import * as React from 'react';
import { mount } from 'enzyme';

import Counter from '../index';

describe('examples/render-props', () => {
  it('renders expected count', () => {
    const wrapper = mount(<Counter />);
    expect(wrapper.text()).toMatch(/Count: 44/);
  });
});
