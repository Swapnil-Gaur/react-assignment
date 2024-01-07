import React, { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

// Toggle Provider component to manage the state
export const GlobalProvider = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(prevState => !prevState);
  };

  return (
    <GlobalContext.Provider value={{ isToggled, toggle }}>
      {children}
    </GlobalContext.Provider>
  );
};
