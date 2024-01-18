
export const Turno = ({turn,turns}) => {
  return (
    <section class="bg-slate-500 p-2 ">
    <div class="flex flex-col  justify-evenly items-center text-2xl ">
      <p class='underline mb-1'> Turno</p>
      <span  class={`square ${turn===turns.x ? 'animate-pulse bg-slate-400 w-10  rounded':''}`} >{turns.x}</span>
      <span  class={`square ${turn===turns.o ? 'animate-pulse bg-slate-400 w-10 rounded':''}`} >{turns.o}</span>
      <span  class={`square ${turn===turns.e ? 'bg-slate-400 w-10 rounded':''}`} >{turns.e}</span>
    </div>    
  </section>
  )
}
