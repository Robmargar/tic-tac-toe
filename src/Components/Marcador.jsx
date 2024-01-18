
export const Marcador = ({X,O,E}) => {
  return (
    <section class='flex flex-col items-center text-2xl bg-slate-500 p-2'>
        <p class='underline mb-1'>Marcador</p>
        <div class='grid'>
            <p class='text-2xl font-bold'>{X}</p>
            <p class='text-2xl font-bold'>{O}</p>
            <p class='text-2xl font-bold'>{E}</p>
        </div>
    </section>
  )
}
