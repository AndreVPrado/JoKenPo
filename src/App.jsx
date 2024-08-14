import { useState } from 'react'
import './App.css'


function App() {
  const [opcaoPlayer, setOpcaoPlayer] = useState(3)
  const [opcaoBot, setOpcaoBot] = useState("/public/semEscolha.png")
  const [resultado, setResultado] = useState("")
  let [vitoria, setVitoria] = useState(0)
  let [derrota, setDerrota] = useState(0)
  let [empate, setEmpate] = useState(0)
  let [vitoriaPartida, setVitoriaPartida] = useState(0)
  let [derrotaPartida, setDerrotaPartida] = useState(0)

  function jogar() {

    if(opcaoPlayer == 3){
      return alert("Faça sua escolha!")
    }

    const numAleatorio = Math.floor(Math.random() * 3)

    console.log(numAleatorio)

    switch(numAleatorio) {
      case 0:
        setOpcaoBot("pedra.png")
        break
      case 1:
        setOpcaoBot("papel.png")
        break
      case 2:
        setOpcaoBot("tesoura.png")
        break    
    }

    if(opcaoPlayer == 0 && numAleatorio == 1){
      setResultado("Derrota")
      setDerrota(d => d + 1)
    }

    else if(opcaoPlayer == 0 && numAleatorio == 2){
      setResultado("Vitória")
      setVitoria(v => v + 1)
    }
    else if(opcaoPlayer == 1 && numAleatorio == 0){
      setResultado("Vitória")
      setVitoria(v => v + 1)
    }

    else if(opcaoPlayer == 1 && numAleatorio == 2){
      setResultado("Derrota")
      setDerrota(d => d + 1)
    }

    else if(opcaoPlayer == 2 && numAleatorio == 0){
      setResultado("Derrota")
      setDerrota(d => d + 1)
    }

    else if(opcaoPlayer == 2 && numAleatorio == 1){
      setResultado("Vitória")
      setVitoria(v => v + 1)
    }

    else if(opcaoPlayer == numAleatorio){
      setResultado("Empate")
      setEmpate(e => e + 1)
    }
    
  }

  function reset() {

    if(vitoria > derrota) {
      alert("Você teve mais vitórias e ganhou!")
      setVitoriaPartida(vp => vp + 1)
    }

    else if(vitoria < derrota) {
      alert("Você teve mais derrotas e perdeu!")
      setDerrotaPartida(dp => dp + 1)
    }

    else if(vitoria == 0 && derrota == 0 && empate == 0) {
      alert("Ao menos jogue uma vez!")
    }

    else {
      alert("Você e a máquina empataram!")
    }

    setVitoria(v => v = 0); 
    setDerrota(v => v = 0);
    setEmpate(v => v = 0);

    setOpcaoBot("semEscolha.png")
    setOpcaoPlayer(3)
  }


  return (
    <>
      <div className='cabecalho'>
        <h1>
          JoKenPo
        </h1>
        <h2>
          {vitoriaPartida} X {derrotaPartida}
        </h2>
        <div className='placar'>
          <p>Vitórias: {vitoria}</p>
          <p>Derrotas: {derrota}</p>
          <p>Empate: {empate}</p>
        </div>
      </div>

      <div className='fazerEscolha'>
        <button onClick={() => setOpcaoPlayer(0)}>Pedra</button>
        <button onClick={() => setOpcaoPlayer(1)}>Papel</button>
        <button onClick={() => setOpcaoPlayer(2)}>Tesoura</button>
      </div>

      <div className='menuDoGame'>
        <nav>
          <p>
            Sua escolha
          </p>
          {
            {
              3: <img className='imgDaSuaEscolha' src="semEscolha.png" alt="" />,
              0: <img className='imgDaSuaEscolha' src="pedra.png" alt="" />,
              1: <img className='imgDaSuaEscolha' src="papel.png" alt="" />,
              2: <img className='imgDaSuaEscolha' src="tesoura.png" alt="" />,
            }[opcaoPlayer]
          }
        </nav>
        <nav>
          <h2 className='resultado'>
            {resultado}
          </h2>
          <div className='divBotoes'>
          <button className='btnJogar' onClick={jogar}>
            Jogar
          </button>
          <button className='btnResetar' onClick={reset}>
            Resetar
          </button>
          </div>
        </nav>
        <nav>
            <p>
              Escolha dele
            </p>
            <p>
              <img className='imgAdversario' src={opcaoBot} alt="" />
            </p>
        </nav>
      </div>
    </>
  )
  }
export default App
