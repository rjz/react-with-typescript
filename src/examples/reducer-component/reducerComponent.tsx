import * as React from 'react';
import { getDisplayName } from '../utils';

type Sender<A> = {
  send(a: A): void
};

export type Component<A, S> = React.SFC<S & Sender<A>>;

export type Reducer<A, S> = (state: S, action: A) => S;

export const make = <A, S>(reduce: Reducer<A, S>, initialState: S) =>
  (C: Component<A, S>) =>
    class ReducerComponent extends React.Component<{}, S> {

      // Set pretty `displayName` for dev tooling
      static displayName = `ReducerComponent(${getDisplayName(C)})`;

      readonly state: S = initialState;

      send = (a: A) =>
        this.setState(reduce(this.state, a))

      render() {
        return <C {...this.state} send={this.send} />;
      }
    };
