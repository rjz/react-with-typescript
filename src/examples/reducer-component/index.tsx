import * as React from 'react';
import * as RC from './reducerComponent';

type Action = 'INCREMENT' | 'DECREMENT';

type State = {
  count: number,
};

const Counter: RC.Component<Action, State> = ({ count, send }) => (
  <div>
    <h1>Count: {count}</h1>
    <div>
      <button onClick={() => send('INCREMENT')}>+1</button>
      <button onClick={() => send('DECREMENT')}>-1</button>
    </div>
  </div>
);

const reduce: RC.Reducer<Action, State> = (state, action) => {
  switch (action) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const initialState: State = {
  count: 42
};

export default RC.make(reduce, initialState)(Counter);
