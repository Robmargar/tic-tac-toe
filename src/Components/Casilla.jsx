export const Casilla = ({children, updateBoard, index}) => {

  const handleClick=()=>{
    updateBoard(index)
  }
  return (
  <div onClick={handleClick} class='grid items-center border-solid border-blanco border-2  w-32 h-32  bg-azul text-3xl ' >
    {children}
  </div>
  )
};

