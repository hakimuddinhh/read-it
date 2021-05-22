import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MainPage from './pages/main/main.component';
import FeedPage from './pages/feed/feed.component';

function App() {
  return (
    <Router>
    <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/feed">
           <FeedPage />
          </Route>
        </Switch>
    </Router>

  );
}

export default App;
