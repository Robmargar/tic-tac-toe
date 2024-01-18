
export const Aviso = ({ganador,reiniciar}) => {
    if(ganador===null)return null;

    const textoGanador=ganador===false? "Empate":"Ganó :";
  return (
    
    <section class='fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center'>
       <div class='bg-slate-700 p-3 rounded flex flex-col justify-center items-center  gap-5 '>
        <h2 class="text-2xl text-gray-400">{textoGanador}</h2>
        <header class=" flex border-double border-4 border-sky-500 p-2 m-2 w-14 h-14 justify-center items-center">
            { 
            ganador !==false ? <span>{ganador}</span> : <span>🤝</span>
            }
        </header>
        <footer>
            <button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-full " onClick={reiniciar}>Empezar de nuevo</button>  
        </footer>
       </div>
     </section>      
  )
}
