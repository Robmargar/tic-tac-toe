
export const Aviso = ({ganador,reiniciar}) => {
    if(ganador===null)return null;

    const textoGanador=ganador===false? "Empate":"Ganó :";
  return (
    
    <section class='fixed inset-0 bg-gris_obscuro bg-opacity-60 backdrop-blur-sm flex justify-center items-center '>
       <div class='bg-blanco bg-opacity-60 p-3 rounded flex flex-col justify-center items-center w-60 gap-5 '>
        <h2 class="text-2xl text-gray-400">{textoGanador}</h2>
        <header class=" flex bg-amarillo bg-opacity-60 border-double border-4 border-verde rounded-xl p-2 m-2 w-14 h-14 justify-center items-center">
            { 
            ganador !==false ? <span>{ganador}</span> : <span>🤝</span>
            }
        </header>
        <footer>
            <button class="text-xl bg-naranja hover:bg-naranja_claro active:bg-amarillo-700 focus:outline-none focus:ring focus:ring-amarillo rounded-sm shadow-lg w-56 " onClick={reiniciar}>Empezar de nuevo</button>  
        </footer>
       </div>
     </section>      
  )
}
