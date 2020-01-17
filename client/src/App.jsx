import React from 'react';

import { ThemeProvider } from 'emotion-theming';

import { light, ThemeContext } from './theme';

import GlobalStyles from './GlobalStyles';

const theme = light;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={theme}>
        <GlobalStyles />
        hello
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
