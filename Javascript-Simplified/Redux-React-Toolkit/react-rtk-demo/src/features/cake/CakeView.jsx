import { useSelector, useDispatch } from "react-redux";
import { ordered,restock } from './cakeSlice';

export const CakeView = () => {
  const numOfCakes = useSelector((state) => {
    return state.cake.numOfCakes;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Cakes - {numOfCakes} </h2>
      <button onClick={()=> dispatch(ordered())}>Order Cake</button>
      <button onClick={()=> dispatch(restock(5))}>Restock Cakes</button>
    </div>
  );
};
