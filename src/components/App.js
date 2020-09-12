import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Login from '../components/pages/Login';
import Home from '../components/pages/Home';

const GlobalStyle = createGlobalStyle`
  body {
    background-color:white;
    min-height:100vh;
    margin:0;
    color:black;
    font-family:'Kaushan Script'
  }
`;
//Theme add variables
const theme = {
  primaryColor: '#f8049c',
  secondaryColor: '#fdd54f',
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
