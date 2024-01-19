
export const Marcador = ({X,O,E}) => {
  return (
    <section class='flex flex-col items-center text-2xl bg-gris_claro p-2'>
        <p class='underline mb-1 min-w-sm'>Marcador</p>
        <div class='grid'>
            <p class='text-2xl font-bold'>{X}</p>
            <p class='text-2xl font-bold'>{O}</p>
            <p class='text-2xl font-bold'>{E}</p>
        </div>
    </section>
  )
}
