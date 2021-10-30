import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  .container {
    max-width: 1440px;
    width: 90%;
    margin: 0 auto;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    font-size: 16px;
    font-family: 'Nunito Sans', sans-serif;
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
  }

`
