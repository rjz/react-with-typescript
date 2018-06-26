import * as React from 'react';

import CounterContext from './context';

// `Count` receives its state from a context `Consumer`
export const Count: React.SFC<{}> = () => (
  <CounterContext.Consumer>
    {({ count, updateCount }) => (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => updateCount(1)}>+1</button>
        <button onClick={() => updateCount(-1)}>-1</button>
      </div>
    )}
  </CounterContext.Consumer>
);

type ContainerState = {
  count: number,
};

// `Container` acts as a state container and context `Provider`
class Container extends React.Component<{}, ContainerState> {
  readonly state = {
    count: 43,
  };

  increment = (delta: number) => this.setState({
    count: this.state.count + delta
  })

  render() {
    return (
      <CounterContext.Provider
        value={{
          count: this.state.count,
          updateCount: this.increment,
        }}
      >
        <Count />
      </CounterContext.Provider>
    );
  }
}

export default Container;
