import * as React from 'react';

type CounterContextState = {
  count: number,
};

// Create a context wrapping some shared state
export default React.createContext<CounterContextState>({
  count: 42,
});
