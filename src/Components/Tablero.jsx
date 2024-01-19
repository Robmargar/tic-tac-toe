import { Casilla } from "./Casilla"

export const Tablero = ({tablero, updateBoard, reiniciar}) => {
  return (
    <section class='flex  flex-col items-center '>
    <div class='grid grid-cols-3 justify-items-center content-center shadow-lg min-w-80 max-w-96 '>
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
    <button class="bg-naranja hover:bg-naranja_claro active:bg-amarillo-700 focus:outline-none focus:ring focus:ring-amarillo w-full my-8" onClick={reiniciar}>Reiniciar Juego</button> 
  </section>
  )
}
