import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);

  const AddCash = (cash) => {
    dispatch({ type: 'ADD', payload: cash });
  };
  const GetCash = (cash) => {
    dispatch({ type: 'GET', payload: cash });
  };
  return (
    <div>
      <div>{cash}</div>
      <div>
        <button type="button" onClick={() => AddCash(Number(prompt()))}>
          +
        </button>
        <button type="button" onClick={() => GetCash(Number(prompt()))}>
          -
        </button>
      </div>
    </div>
  );
};
