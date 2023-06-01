import { useReducer, useState } from 'react';
import useCounterStore from './store';

const Counter = () => {
  const {count, increment, reset} = useCounterStore()

  return (
    <div>
      Counter ({count})
      <button
        onClick={() => increment()}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        onClick={() => reset()}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
