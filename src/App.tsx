import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from 'routes/Router';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyles';
import theme from 'styles/theme';

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
