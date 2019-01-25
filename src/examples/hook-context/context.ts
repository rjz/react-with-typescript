import * as React from 'react';

type CounterContext = {
  count: number,
  updateCount(delta: number): void,
};

// Create a context wrapping some shared state
export default React.createContext<CounterContext>({
  count: 42,
  updateCount: (n) => {
    // Prevent a `Consumer` without a matching `Provider` above it in the tree
    // from invoking the default implementation
    throw new Error('updateCount() not implemented');
  }
});
