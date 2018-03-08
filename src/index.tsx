import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReducerComponent from './examples/reducer-component';
import HigherOrderComponent from './examples/higher-order-component';
import RenderPropsComponent from './examples/render-props';
import ContextComponent from './examples/context';

type ExampleProps = {
  title: string,
  link: string,
  children: React.ReactNode,
};

const srcUrl = (link: string) =>
  `https://github.com/rjz/react-with-typescript/blob/master/src/${link}`;

const Example = (props: ExampleProps) => (
  <div className="example">
    <h2>{props.title}</h2>
    <a
      className="pull-right"
      href={srcUrl(`examples/${props.link}`)}
    >
      src
    </a>
    {props.children}
  </div>
);

ReactDOM.render(
  <div>
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
  document.getElementById('root') as HTMLElement
);
