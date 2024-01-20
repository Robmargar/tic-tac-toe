
export const Turno = ({turn,turns}) => {
  return (
    <section class="text-2xl bg-gris_claro p-2 ">
    <p class='underline mb-1 min-w-sm'> Turno</p>
    <div class='grid'>
      <p class={`square ${turn===turns.x ? 'justify-self-center  animate-pulse bg-slate-400 w-10 rounded ':''}`} >{turns.x}</p>
      <p class={`square ${turn===turns.o ? 'justify-self-center  animate-pulse bg-slate-400 w-10 rounded':''}`} >{turns.o}</p>
      <p class={`square ${turn===turns.e ? 'bg-slate-400 w-10 rounded':''}`} >{turns.e}</p>
    </div>    
  </section>
  )
}
