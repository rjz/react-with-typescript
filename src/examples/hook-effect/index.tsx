import * as React from 'react';

export function useCounter(interval: number = 1000): number {
  const [state, setState] = React.useState({count: 0});
  const increment = () => setState({count: state.count + 1});

  React.useEffect(() => {
    const tictoc = window.setInterval(increment, interval);
    return () => window.clearInterval(tictoc);
  });

  return state.count;
}

const Counter: React.SFC<{}> = () => {
  const count = useCounter(1000);
  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
};

export default Counter;
