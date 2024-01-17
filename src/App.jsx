import { useState } from 'react'
import './App.css'

const turns={
  x:'x',
  o:'o' 
};

const ganadores={
   false:'Empate',
   true:'Ganador'
};

const Casilla = ({children, updateBoard, index}) => {

  const handleClick=()=>{
    updateBoard(index)
  }
  return (
  <div onClick={handleClick} class='grid items-center border-solid border-2 w-28 h-28 bg-slate-700 text-3xl text-green-500' >
    {children}
  </div>
  )
};

const Combos_ganadores =[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

function App() {
  const [tablero, setTablero] = useState(Array(9).fill(null));
  const [turn,setTurn]=useState(turns.x);
  const [ganador,SetGanador]=useState(null);

  const revisarGanador=(tableroARevisar)=>{
    for(const combo of Combos_ganadores){
      const [a,b,c]=combo;
      if(
        tableroARevisar[a]&&
        tableroARevisar[a]===tableroARevisar[b]&&
        tableroARevisar[a]===tableroARevisar[c]
        ){
          return tableroARevisar[a];
        }
    }
    return null;
  };

  const finDeJuego=(newTablero)=>{
    return newTablero.every((casilla)=>casilla!==null);
  };

  const updateBoard=(index)=>{ 
    if(tablero[index] || ganador)return // Con esta linea evitamos sobreescribir informacion 
    const newTablero=[...tablero];
    newTablero[index]=turn;
    setTablero(newTablero);
    
    const newTurn=turn===turns.x ? turns.o : turns.x; // Cambiamos de turno x-->o
    setTurn(newTurn);

    const nuevoGanador=revisarGanador(newTablero); //Revisamos si hay ganador
    if(nuevoGanador){
      SetGanador(nuevoGanador);
    } else if(finDeJuego(newTablero)){
      SetGanador(false);
    }
  }

  const Reiniciar=()=>{
    setTablero(Array(9).fill(null));
    setTurn(turns.x);
    SetGanador(null);
  };

  return (
    <main >
      <h1 class='text text-6xl mb-8'>Tic Tac Toe</h1>
      <section class="bg-slate-500 my-10">
        <span class="flex flex-col-3 text-2xl justify-evenly items-center h-10">
          <h3> Turno</h3>
          <div  class={`square ${turn===turns.x ? 'text-red-600':''}`} >{turns.x}</div>
          <div  class={`square ${turn===turns.o ? 'text-red-600':''}`} >{turns.o}</div>
        </span>
          
      </section>
      <section class='grid grid-cols-3 justify-items-center min-w-80 max-w-96'>
        {
          tablero.map((_,index)=>{
            return(
              <Casilla key={index} index={index} updateBoard={updateBoard} >
                {tablero[index]}
              </Casilla>
            )
          })
        }
      </section>
      <button onClick={Reiniciar}>Reiniciar Juego</button>  
      {
        ganador !== null &&
      (<section>
        <div>
          <h2>{ganador===false? "Empate":"Ganó :"}</h2>
        </div>
        <header>
          {ganador && <span>{ganador}</span>}
        </header>
        <footer>
          <button onClick={Reiniciar}>Empezar de nuevo</button>  
        </footer>
      </section>)
      }
    </main>
  )
}

export default App
