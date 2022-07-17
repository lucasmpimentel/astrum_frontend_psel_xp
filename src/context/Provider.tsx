import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

function Provider({ children }: {children: React.ReactNode}) {
  const [test, setTest] = useState();

  const context = useMemo(() => ({
    test,
    setTest,
  }), [test]);

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
