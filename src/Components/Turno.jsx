
export const Turno = ({turn,turns}) => {
  return (
    <section class="bg-slate-500 my-10">
    <span class="flex flex-col-3 text-2xl justify-evenly items-center h-10">
      <h3> Turno</h3>
      <div  class={`square ${turn===turns.x ? 'text-red-600 bg-slate-400 w-10':''}`} >{turns.x}</div>
      <div  class={`square ${turn===turns.o ? 'text-red-600  bg-slate-400 w-10':''}`} >{turns.o}</div>
    </span>    
  </section>
  )
}
