import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '../../../src/styles/theme';

export default function Theme(story: any) {
  return <ThemeProvider theme={theme}>{story()}</ThemeProvider>;
}
