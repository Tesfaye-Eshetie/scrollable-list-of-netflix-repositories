import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
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
  NavLink {

  }
  h2 {

  }
  h5{

  }
  p {
    opacity: 0.6;
    line-height: 1.5;
  }
  input {
    opacity: 0.6;
    line-height: 1.5;
    border: none;
    border-radius: 5px;
    width: 300px;
  }
`

export default GlobalStyles;