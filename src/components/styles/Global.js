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
  h1 {
    color: #fff;
    line-height: 1;
    margin-right: .3em;
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
    align-items: start;
    margin-top: 0;
  }
  input {
    margin: 10px 0;
    width: 300px;
    height: 28px;
    font-size: 16px;
    border-radius: 5px;
    border: none;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 160px; 
  }
  textarea {
    margin: 10px 0;
    width: 500px;
    font-size: 16px;
    border-radius: 5px;
    border: none;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 200px; 
  }
`

export default GlobalStyles;