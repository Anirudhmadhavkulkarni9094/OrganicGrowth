import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import FirstPage from './components/FirstPage';
import Content from './components/Content';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <BrowserRouter>
        <Route exact path="/" component={FirstPage} />
        <Route path="/second-page" component={Content} />
      </BrowserRouter>
    </>
  );
}

export default App;
