import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Montserrat, sans-serif;
    height: 100%;
  }
  html,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }
  html {
    scroll-behavior: smooth;
  }
`;