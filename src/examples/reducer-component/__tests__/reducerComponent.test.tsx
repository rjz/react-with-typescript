import * as React from 'react';
import {createRenderer} from 'react-test-renderer/shallow';

import * as RC from '../reducerComponent';

type Action = 'TIC';

type State = {
  count: number;
};

const TickerView: RC.Component<Action, State> = () => <div />;

const reduceCount = (s: State, a: Action) => ({
  count: +s.count + (a === 'TIC' ? 1 : 0),
});

const Ticker = RC.make(reduceCount, {count: 42})(TickerView);

describe('examples/reducerComponent', () => {
  it('sets .displayName', () => {
    expect(Ticker.displayName).toEqual('ReducerComponent(TickerView)');
  });

  it('sets child props', () => {
    const renderer = createRenderer();
    renderer.render(<Ticker />);
    const component = renderer.getRenderOutput();
    expect(component.type).toEqual(TickerView);
  });

  describe('.send', () => {
    it('updates parent state', () => {
      const renderer = createRenderer();
      renderer.render(<Ticker />);
      const component = renderer.getRenderOutput();
      component.props.send('TIC');
      const nextComponent = renderer.getRenderOutput();
      expect(nextComponent.props.count).toEqual(43);
    });
  });
});
