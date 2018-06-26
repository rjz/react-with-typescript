import * as React from 'react';
import { shallow } from 'enzyme';

import Counter from '../index';

describe('examples/context', () => {
  it('renders count', () => {
    const wrapper = shallow(<Counter />);
    wrapper.setState({ count: 42 });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
