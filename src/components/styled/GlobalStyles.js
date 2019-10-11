import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
  /* --primary-color: #0099CC; */
  --primary-color: #096432;
  --primary-color-lighter: #28a745;
  --heading-color: #606060;
  --paragraph-color: #5A5A5A;
  --meta-color: #A7A7A7;
  --pro-green: #096432;
  --loco-green: #3AAA35;
  --white: #edf0f1;
  }
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
    font-size: 16px;

    @media screen and (max-width: 599px) {
      font-size: 15px;
    }
  }
  body {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: #5a5a5a;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    color: #303030;
    line-height: 1.3;
  }
  h1 {font-size: 4rem;}
  h2 {font-size: 3.2rem;}
  h3 {font-size: 2.8rem;}
  h4 {font-size: 2.6rem;}
  h5 {font-size: 2.4rem;}
  h6 {font-size: 2rem;}
  ul {
    list-style-type: none;
  }

  p {
    line-height: 1.5;
    font-size: 1.1rem;
  }
  a,
  a:active,
  a:focus {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    text-decoration: none;
    outline: none;

  }
`;

export default GlobalStyle;
