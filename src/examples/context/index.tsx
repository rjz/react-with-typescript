import * as React from 'react';

import CounterContext from './context';

type CountProps = {
  increment(n: number): void,
};

// `Count` receives its state from a context `Consumer`
const Count: React.SFC<CountProps> = ({ increment }) => (
  <CounterContext.Consumer>
    {({ count }) => (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => increment(1)}>+1</button>
        <button onClick={() => increment(-1)}>-1</button>
      </div>
    )}
  </CounterContext.Consumer>
);

type CounterState = {
  count: number,
};

// `Container` acts as a state container and context `Provider`
class Container extends React.Component<{}, CounterState> {
  readonly state = {
    count: 43,
  };

  increment = (delta: number) => this.setState({
    count: this.state.count + delta
  })

  render() {
    return (
      <CounterContext.Provider value={this.state}>
        <Count increment={this.increment} />
      </CounterContext.Provider>
    );
  }
}

export default Container;
