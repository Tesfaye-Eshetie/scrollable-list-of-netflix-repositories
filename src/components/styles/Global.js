import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }
   h2 h5{
    margin : 20px;
  }
  p {
    opacity: 0.8;
    line-height: 1.5;
    margin : 0;
  }
  span {
    font-size: 16px;
    font-weight: 700;
  }
`

export default GlobalStyles;