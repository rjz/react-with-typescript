import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReducerComponent from './examples/reducer-component';
import HigherOrderComponent from './examples/higher-order-component';
import RenderPropsComponent from './examples/render-props';
import HookEffectComponent from './examples/hook-effect';
import HookContextComponent from './examples/hook-context';
import HookReducerComponent from './examples/hook-reducer';
import ContextComponent from './examples/context';

type ExampleProps = {
  title: string | React.ReactNode;
  link: string;
  children: React.ReactNode;
};

const srcUrl = (link: string) =>
  `https://github.com/rjz/react-with-typescript/blob/master/src/${link}`;

const Example = (props: ExampleProps) => (
  <div className="example">
    <h2>{props.title}</h2>
    <a className="pull-right" href={srcUrl(`examples/${props.link}`)}>
      src
    </a>
    {props.children}
  </div>
);

ReactDOM.render(
  <div>
    <Example
      title={<><small>use</small>Effect() Component</>}
      link="hook-effect"
    >
      <HookEffectComponent />
    </Example>

    <Example
      title={<><small>use</small>Reducer() Component</>}
      link="hook-reducer"
    >
      <HookReducerComponent/>
    </Example>

    <Example
      title={<><small>use</small>Context() Component</>}
      link="hook-context"
    >
      <HookContextComponent/>
    </Example>

    <Example title="Reducer Component" link="reducer-component">
      <ReducerComponent />
    </Example>

    <Example title="Higher-Order Component" link="higher-order-component">
      <HigherOrderComponent isLoading={true} />
      <HigherOrderComponent isLoading={false} />
    </Example>

    <Example title="Context API" link="context">
      <ContextComponent />
    </Example>

    <Example title="Render Props" link="render-props">
      <RenderPropsComponent />
    </Example>
  </div>,
  document.getElementById('root') as HTMLElement,
);
