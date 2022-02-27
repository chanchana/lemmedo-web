import React from 'react';
import { Box, Button, Typography } from './common';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';
import { Icon } from './styles/icons';
import { Style } from './styles/style';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Home />
    </React.Fragment>
  );
}

export default App;
