import { useState } from 'react'
import { Aviso} from './Components/Aviso';
import { Tablero } from './Components/Tablero';
import { Turno } from './Components/Turno';
import { Marcador } from './Components/Marcador';
import { Footer } from './Components/Footer';
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
    <main class="border-double border-4 border-verde sm:p-2 xlg:p-4">
      <section class='grid md:grid-flow-col md:auto-cols-max ml-4'>
        <div class='self-center'>
          <h1 class='text-blanco text-6xl mb-8'>Tic Tac Toe</h1>
          <div class='grid justify-self-center grid-cols-2 border-double border-4 border-verde shadow-lg mb-8 p-1 w-96 max-h-96'>
            <Turno turn={turn} turns={turns}/>
            <Marcador X={marcador.X} O={marcador.O} E={marcador.E}/>
          </div>
        </div>
        <div class='mt-4'>
          <Tablero  tablero={tablero} updateBoard={updateBoard} reiniciar={reiniciar}/>    
        </div>
      </section>
      <Aviso ganador={ganador} reiniciar={reiniciar}/>
      <Footer class='mb-8'/>
    </main>
  )
}

export default App
