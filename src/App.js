
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import CountryDetail from './components/CountryDetail/CountryDetail';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
            
        </Route>
        <Route path="/users">
            
        </Route>
        <Route path="/name/:name">
          <CountryDetail></CountryDetail>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
