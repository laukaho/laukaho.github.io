// src/context/state.js
import { createContext, useContext, useState, useEffect } from 'react';
const AppContext = createContext();

export function AppWrapper({ children }) {
  const [isDark, setIsDark] = useState(true);
  let sharedState = {
    theme: "dark"
    // light: {
    //   foreground: '#000000',
    //   background: '#eeeeee',
    // },
    // dark: {
    //   foreground: '#ffffff',
    //   background: '#222222',
    // }
  };

  return (
    <AppContext.Provider value={{isDark, setIsDark}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}