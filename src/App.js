import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import MainPage from './pages/main/main.component';
// import Dashboard from './pages/Feed/Feed.component';

function App() {
  return (
    <main>
        <header>
        <h1>Read It</h1>
        <p>The second page of Reddit</p>
        </header>
    <Router>
    <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          {/* <Route path="/feed">
           <Feed />
          </Route> */}
        </Switch>
    </Router>
    </main>

  );
}

export default App;
