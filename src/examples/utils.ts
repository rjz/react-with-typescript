import * as React from 'react';

export const getDisplayName = <P>(C: React.ComponentType<P>): string =>
  C.displayName || C.name || 'Component';
