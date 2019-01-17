import * as React from 'react';
import { getDisplayName } from '../utils';

type HOC<P, Q> = (C: React.ComponentType<P>) =>
  React.ComponentType<Q>;

function loadable<P>(predicate: (p: P) => boolean): HOC<P, P> {
  // Return a higher-order component implementing the "loadable" behavior
  // See: https://goo.gl/TxPPCw
  return (C: React.ComponentType<P>) => {
    const LoadableComponent: React.SFC<P> = (props: P) => {
      if (predicate(props)) {
        return <div>Just a moment, please...</div>;
      }
      return <C {...props} />;
    };

    // Set pretty `displayName` for dev tooling
    LoadableComponent.displayName = `Loadable(${getDisplayName(C)})`;
    return LoadableComponent;
  };
}

type ChildProps = {
  isLoading: boolean,
};

const isLoading = (p: ChildProps) => p.isLoading;

const ChildComponent: React.SFC<ChildProps> = () => (
  <div>...loaded.</div>
);

export default loadable(isLoading)(ChildComponent);
