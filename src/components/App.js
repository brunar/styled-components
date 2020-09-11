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
      <Button>Primary Button</Button>
      <Button secondary>Secondary Button</Button>
      <Button large>Large Button</Button>
      <Button disabled>Disabled Button</Button>
    </>
  );
}

export default App;
