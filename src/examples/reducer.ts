export type Action = 'INCREMENT' | 'DECREMENT';

export type State = {
  count: number;
};

type Reducer<A, S> = (state: S, action: A) => S;

const reducer: Reducer<Action, State> = (state, action) => {
  switch (action) {
    case 'INCREMENT':
      return {count: state.count + 1};
    case 'DECREMENT':
      if (state.count === 0) {
        return state;
      }
      return {count: state.count - 1};
    default:
      return state;
  }
};

export default reducer;
