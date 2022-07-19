import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

function Provider({ children }: {children: React.ReactNode}) {
  const [isLoading, setIsLoading] = useState(false);

  const context = useMemo(() => ({
    isLoading,
    setIsLoading,
  }), [isLoading]);

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
