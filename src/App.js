import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Routers from "./routers";

const theme = {
  colors: {
    headerColor:'#f2f2f2',
    headerBack: '#212121',
    body: '#ffffff',
    background: '#a8d7f0',
  }
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
