



export const Casilla = ({children, updateBoard, index}) => {

  const handleClick=()=>{
    updateBoard(index)
  }
  return (
  <div onClick={handleClick} class='grid items-center border-solid border-2 w-28 h-28 bg-slate-700 text-3xl text-green-500' >
    {children}
  </div>
  )
};

