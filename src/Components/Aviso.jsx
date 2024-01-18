
export const Aviso = ({ganador,reiniciar}) => {
    if(ganador===null)return null;

    const textoGanador=ganador===false? "Empate":"Ganó :";
  return (
    <section>
       <div>
        <h2>{textoGanador}</h2>
        <header>
            {ganador && <span>{ganador}</span>}
        </header>
        <footer>
            <button onClick={reiniciar}>Empezar de nuevo</button>  
        </footer>
       </div>
     </section>      
  )
}
