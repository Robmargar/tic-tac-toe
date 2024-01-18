import { useState } from 'react'
import { Aviso} from './Components/Aviso';
import { Tablero } from './Components/Tablero';
import { Turno } from './Components/Turno';
import {revisarGanador, finDeJuego} from './Funciones/Funciones';
import './App.css'

const turns={
  x:'x',
  o:'o' 
};

const ganadores={
   false:'Empate',
   true:'Ganador'
};

function App() {
  const [tablero, setTablero] = useState(Array(9).fill(null));
  const [turn,setTurn]=useState(turns.x);
  const [ganador,SetGanador]=useState(null);

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

  const reiniciar=()=>{
    setTablero(Array(9).fill(null));
    setTurn(turns.x);
    SetGanador(null);
  };

  return (
    <main >
      <h1 class='text text-6xl mb-8'>Tic Tac Toe</h1>
      <Turno turn={turn} turns={turns}/>
      <Tablero tablero={tablero} updateBoard={updateBoard} reiniciar={reiniciar}/>  
      <Aviso ganador={ganador} reiniciar={reiniciar}/>
    </main>
  )
}

export default App
