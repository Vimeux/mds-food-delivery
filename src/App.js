import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Restaurant from './pages/Restaurant';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <header className="App-header">
          <Switch>
            <Route path='/restaurant' >
              <Restaurant />
            </Route>
            <Route path='/' >
              <Home />
            </Route>
          </Switch>
        </header>
      </Router>
    </div>
  );
}

export default App;
