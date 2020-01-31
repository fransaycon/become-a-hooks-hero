import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #F2F2F2;
    font-family: Rubik, sans-serif;
    margin: 0;
    background-size: cover;
  }
  
  input {
    font-family: Rubik, sans-serif;
    margin: 10px;
    font-size: 30px;
    width: 500px;
  }

  h1 {
    color: #222222;
    font-size: 52px;
    font-weight: 400;
    margin: 0;
  }

  #header {
    color: royalblue;
    font-size: 62px;
    font-weight: bold;
    margin: 50px 0px 0px 0px;
    text-shadow: 1px 1px #FFFFFF;
    text-shadow: 2px 2px #FFFFFF;
    text-shadow: 3px 3px #FFFFFF;
    opacity: 0.95;
  }

  span {
    font-size: 30px;
    margin: 10px;
  }

  hr {
    margin: 5px 25% 25px 25%;
    height: 10px;
    background-color: royalblue;
    border: none;
  }

  button {
    background-color: royalblue;
    padding: 20px 50px 20px 50px;
    color: white;
    font-size: 30px;
    border: 0;
    border-radius: 20px;
    margin: 20px;

    &: hover {
      opacity: 0.9;
      outline: 0;
      cursor: pointer;
    }
  }
`;

export default GlobalStyles;
