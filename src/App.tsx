import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Box, Button, Typography } from './common';
import { NavigationProvider } from './contexts/navigation';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';
import { Icon } from './styles/icons';
import { Style } from './styles/style';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <NavigationProvider>
          <Home />
        </NavigationProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
