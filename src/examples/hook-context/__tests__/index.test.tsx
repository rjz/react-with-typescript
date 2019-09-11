import * as React from 'react';
import {createRenderer} from 'react-test-renderer/shallow';

import Counter from '../index';

describe('examples/context', () => {
  it('renders count', () => {
    const shallowRenderer = createRenderer();
    const wrapper = shallowRenderer.render(<Counter />);
    // wrapper.setState({count: 42});
    expect(wrapper).toMatchSnapshot();
  });
});
