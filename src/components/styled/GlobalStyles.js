import { createGlobalStyle } from "styled-components";
import RobotoRegular from "../../static/Roboto-Regular.woff2";
import RobotoMedium from "../../static/Roboto-Medium.woff2";
import RobotoBold from "../../static/Roboto-Bold.woff2";
import RobotoBlack from "../../static/Roboto-Black.woff2";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoMedium}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBlack}) format('woff2');
    font-weight: 900;
    font-style: normal;
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
    @media screen and (max-width: 500px) {
      font-size: 14px;
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

  body.no-js .fadeIn {
    opacity: 1;
  }
  body.no-js .slideLeft {
    opacity: 1;
    transform: none;
  }
  body.no-js .slideUp {
    opacity: 1;
    transform: none;
  }

`;

export default GlobalStyle;
