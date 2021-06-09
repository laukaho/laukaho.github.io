import '../styles/globals.css'
import { createContext, useContext, useState, useEffect } from 'react';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../comps/globalStyles";
import { lightTheme, darkTheme } from "../comps/Theme"
import SimpleReactLightbox from "simple-react-lightbox";

const AppContext = createContext();

function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(true);
  return (
    <SimpleReactLightbox>
    <AppContext.Provider value={{isDark, setIsDark}}>
      <ThemeProvider theme={isDark? darkTheme : lightTheme}>
        <GlobalStyles/>
          <Component {...pageProps} />
      </ThemeProvider>
    </AppContext.Provider>
    </SimpleReactLightbox>

  )
}

export default MyApp

export function useAppContext() {
  return useContext(AppContext);
}