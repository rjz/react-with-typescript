import * as React from 'react';
import {createRenderer} from 'react-test-renderer/shallow';

import Counter from '../index';

describe('examples/hook-reducer', () => {
  const shallowRenderer = createRenderer();

  it('renders count', () => {
    const result = shallowRenderer.render(<Counter />);
    expect(result).toMatchSnapshot();
  });
});
