import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';

import Counter from '../index';

describe('examples/hook-reducer', () => {
  // TODO: restore this test once facebook/react#14567 is released
  xit('renders count', () => {
    const testRenderer = TestRenderer.create(<Counter />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
