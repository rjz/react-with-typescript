import * as React from 'react';

import reducer, { Action, State } from '../reducer';

import * as RC from './reducerComponent';

const Counter: RC.Component<Action, State> = ({ count, send }) => (
  <div>
    <h1>Count: {count}</h1>
    <div>
      <button onClick={() => send('INCREMENT')}>+1</button>
      <button onClick={() => send('DECREMENT')}>-1</button>
    </div>
  </div>
);

export default RC.make(reducer, { count: 0 })(Counter);
