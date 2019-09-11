import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';

import Counter from '../index';

describe('examples/render-props', () => {
  it('renders expected count', () => {
    const renderer = TestRenderer.create(<Counter />);
    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
