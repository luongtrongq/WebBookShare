import logo from './logo.svg';
import './App.css';
import Home from './HomeTemplate';
import SignUp from './SignInPage/SignUp';
import PageNoteFound from "./PageNotFound"
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import SignIn from './SignInPage/SignIn';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />

        <Route path="" component={PageNoteFound} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
