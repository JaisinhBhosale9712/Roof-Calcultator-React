import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Dashboard from './components/dashboard';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import First_Page from './components/first_page';


function App() {
  return (
    <div className="App">
<Router>
    <Header />
    <Switch>
    <Route path="/" exact>
      <Dashboard />
    </Route>
    <Route path="/calculator" exact>
      <First_Page />
    </Route>
    </Switch>
</Router>
    </div>
  );
}

export default App;
