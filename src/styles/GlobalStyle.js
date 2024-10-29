import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box; 
  }
  body{
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
    font-family: 'Noto Sans', sans-serif;
    letter-spacing: -0.45px;
  }
  a, button {
    cursor: pointer;
  }

  a{
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;
