import logo from './logo.svg';
import './App.css';
import Home from './HomeTemplate';
import SignUp from './SignInPage/SignUp';
import PageNoteFound from "./PageNotFound"
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import SignIn from './SignInPage/SignIn';
import SaleBookPage from './SaleBookPage';
import { renderRoute } from './Route';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        {renderRoute()}
        <Route path="" component={PageNoteFound} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
