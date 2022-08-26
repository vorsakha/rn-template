import React from 'react';
import Config from 'react-native-config';
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/routes';
import { theme } from './src/styles/theme';
import StorybookUIRoot from './storybook';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default Config.LOAD_STORYBOOK === 'true' ? StorybookUIRoot : App;
