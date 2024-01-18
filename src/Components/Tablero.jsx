import { Casilla } from "./Casilla"

export const Tablero = ({tablero, updateBoard, reiniciar}) => {
  return (
    <section >
    <div class='grid grid-cols-3 justify-items-center min-w-80 max-w-96'>
        {
        tablero.map((_,index)=>{
            return(
            <Casilla key={index} index={index} updateBoard={updateBoard} >
                {tablero[index]}
            </Casilla>
            )
        })
        }
    </div>
    <button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-full my-8" onClick={reiniciar}>Reiniciar Juego</button> 
  </section>
  )
}
