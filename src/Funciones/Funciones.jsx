export const Combos_ganadores =[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

export  const revisarGanador=(tableroARevisar)=>{
  for(const combo of Combos_ganadores){
    const [a,b,c]=combo;
    if(
      tableroARevisar[a]&&
      tableroARevisar[a]===tableroARevisar[b]&&
      tableroARevisar[a]===tableroARevisar[c]
      ){
        return tableroARevisar[a];
      }
  }
  return null;
};

export const finDeJuego=(newTablero)=>{
  return newTablero.every((casilla)=>casilla!==null);
};