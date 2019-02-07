import * as React from 'react';

import reducer from '../reducer';

function Counter() {
  const [state, dispatch] = React.useReducer(reducer, {count: 0});

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <div>
        <button onClick={() => dispatch('INCREMENT')}>+1</button>
        <button onClick={() => dispatch('DECREMENT')}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
