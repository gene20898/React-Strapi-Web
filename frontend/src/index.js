import React from 'react';
import { createRoot }  from 'react-dom/client';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './theme/theme';

const container = document.querySelector('#root');
const root = createRoot(container); 
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
