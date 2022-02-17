import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Routers from "./routers";

const theme = {
  colors: {
    headerColor:'#d1d1d1',
    headerBack: '#333333',
    body: '#ffffff',
    background: '#a8d7f0',
  },
  mobile: '768px',
}
function App() {

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Layout>
            <Routers/>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    );
  }

export default App;
