import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box; 
  }
  body{
    font-family: 'Roboto', sans-serif; /* 기본 폰트는 Roboto */
  }
  body:lang(ko) {
    font-family: 'Noto Sans', sans-serif; /* 한글 폰트 설정 */
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
