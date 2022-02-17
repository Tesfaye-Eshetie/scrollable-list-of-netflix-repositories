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
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
  }
  input {
    margin: 10px auto;
    min-width: 500px;
    height: 28px;
    font-size: 16px;
    border-radius: 5px;
    border: none;
  }
`

export default GlobalStyles;