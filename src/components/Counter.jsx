import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counter/CounterSlice";

const Counter = () => {
  const [input, setInput] = useState("");

  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter State</h1>
      <h1>counter : {value}</h1>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={() => dispatch(increment(Number(input) || 1))}>+</button>
      <button onClick={() => dispatch(decrement(Number(input) || 1))}>-</button>
    </>
  );
};

export default Counter;
