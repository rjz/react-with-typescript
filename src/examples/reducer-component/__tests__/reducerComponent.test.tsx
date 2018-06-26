import * as React from 'react';
import { shallow } from 'enzyme';

import * as RC from '../reducerComponent';

type Action = 'TIC';

type State = {
  count: number,
};

const TickerView: RC.Component<Action, State> = () => <div />;

const reduceCount = (s: State, a: Action) => ({
  count: (+s.count) + (a === 'TIC' ? 1 : 0),
});

const Ticker = RC.make(reduceCount, { count: 42 })(TickerView);

describe('examples/reducerComponent', () => {
  it('sets .displayName', () => {
    expect(Ticker.displayName).toEqual('ReducerComponent(TickerView)');
  });

  it('sets child props', () => {
    const wrapper = shallow(<Ticker />);
    const child = wrapper.find(TickerView);
    expect(child.props().count).toEqual(42);
  });

  describe('.send', () => {
    it('updates parent state', () => {
      const wrapper = shallow<{}, State>(<Ticker />);
      const child = wrapper.find(TickerView);
      child.props().send('TIC');
      expect(wrapper.state().count).toEqual(43);
    });
  });
});
