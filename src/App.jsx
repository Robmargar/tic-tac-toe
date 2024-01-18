import { useState } from 'react'
import { Aviso} from './Components/Aviso';
import { Tablero } from './Components/Tablero';
import { Turno } from './Components/Turno';
import { Marcador } from './Components/Marcador';
import {revisarGanador, finDeJuego} from './Funciones/Funciones';
import './App.css'

const turns={
  x:'❌',
  o:'🟢', 
  e:'🤝'
};


function App() {
  const [tablero, setTablero] = useState(Array(9).fill(null));
  const [turn,setTurn]=useState(turns.x);
  const [ganador,SetGanador]=useState(null);
  const [marcador,SetMarcador]=useState({
    X:0,
    O:0,
    E:0
  });

  const updateBoard=(index)=>{ 
    if(tablero[index] || ganador)return // Con esta linea evitamos sobreescribir informacion 
    const newTablero=[...tablero];
    newTablero[index]=turn;
    setTablero(newTablero);
    
    const newTurn=turn===turns.x ? turns.o : turns.x; // Cambiamos de turno x-->o
    setTurn(newTurn);

    const nuevoGanador=revisarGanador(newTablero); //Revisamos si hay ganador
    var newMarcador={...marcador};
    console.log(nuevoGanador);
    if(nuevoGanador){
      
      if(nuevoGanador==='❌'){
        newMarcador.X++;
        SetMarcador(newMarcador);
      }if(nuevoGanador==='🟢'){
        newMarcador.O++;
        SetMarcador(newMarcador);
      }
      SetGanador(nuevoGanador);
    } else if(finDeJuego(newTablero)){
      newMarcador.E++;
      SetMarcador(newMarcador);
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
      <div class='grid grid-cols-2 border-double border-4 border-slate-800 mb-8 p-1'>
        <Turno turn={turn} turns={turns}/>
        <Marcador X={marcador.X} O={marcador.O} E={marcador.E}/>
      </div>
      <Tablero tablero={tablero} updateBoard={updateBoard} reiniciar={reiniciar}/>  
      <Aviso ganador={ganador} reiniciar={reiniciar}/>
    </main>
  )
}

export default App
