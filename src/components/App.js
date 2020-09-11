import React from 'react';
import { Button } from './common';
import { createGlobalStyle } from 'styled-components';

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
  return (
    <>
      <GlobalStyle />
      <h1>App</h1>
      <Button>Test</Button>
    </>
  );
}

export default App;
