import * as React from 'react';

type CounterState = {
  count: number,
};

type ChildProps = CounterState & {
  increment(d: number): void,
};

type CounterProps = {
  render(state: ChildProps): React.ReactNode,
};

class CounterDataProvider extends React.Component<CounterProps, CounterState> {
  readonly state: CounterState = {
    count: 44,
  };

  increment = (delta: number) =>
    this.setState({ count: this.state.count + delta })

  render() {
    return this.props.render({
      ...this.state,
      increment: this.increment,
    });
  }
}

export default () => (
  <CounterDataProvider
    render={(props: ChildProps) => (
      <div>
        <h1>Count: {props.count}</h1>
        <button onClick={() => props.increment(1)}>+1</button>
        <button onClick={() => props.increment(-1)}>-1</button>
      </div>
    )}
  />
);
