import React, { useEffect } from 'react';
import ReactAdapterProvider from './ReactAdapterProvider';

const ModernReactComponent = props => {
  const { children, input } = props;

  useEffect(() => {
    console.log('some effect from app2 based component');
  }, []);

  return (
    <div>
      <strong>
        This Component uses hooks, if loaded on localhost:3001, it should work.
      </strong>
      <br />
      <h2>Text form React app2: {input}</h2>
      {children}
    </div>
  );
};

export const Adapted = React.forwardRef((props, ref) => {
  return <ReactAdapterProvider {...props} component={ModernReactComponent} ref={ref} />;
});

export default ModernReactComponent;
