import React, { createContext, useState } from 'react';

// Create the context
const AppContext = createContext();

// Define the provider component
const AppProvider = ({ children }) => {
  const [email, setemail] = useState('');
  const [email1, setemail1] = useState('');
  return (
    <AppContext.Provider value={{ email, setemail ,email1,setemail1}}>
      
      {children}
    </AppContext.Provider>
  );
};


export { AppContext, AppProvider};