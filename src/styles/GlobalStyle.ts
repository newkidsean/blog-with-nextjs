import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';

const baseFont = `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
sans-serif;`;

const GlobalStyle = createGlobalStyle`

/* reset style */
${reset}

/* font style - 10px: 1rem */
html {
    font: normal 10px ${baseFont}; 
    -webkit-font-smoothing: antialiased;
  }

  /* default text style */
  body {
    font-family: 'Roboto', ${baseFont};
  }
`;
// 공통 스타일링은 스타일스 폴더에 객체 식으로 정의해서 사용해도 된다.

export default GlobalStyle;
