import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Login from '../components/pages/Login';
import Home from '../components/pages/Home';
import LightTheme from '../themes/light';
import DarkTheme from '../themes/dark';

const GlobalStyle = createGlobalStyle`
  body {
    background-color:white;
    min-height:100vh;
    margin:0;
    color:black;
    font-family:'Kaushan Script'
  }
`;

const App = () => {

  const [theme, setTheme] = useState(LightTheme);

  return (
    <ThemeProvider theme={{
      ...theme, setTheme: () => {
        setTheme(s => s.id === 'light' ? DarkTheme : LightTheme);
      }
    }}>
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
