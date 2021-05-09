import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { StyledContainer, StyledHeader } from './App.styled';

import MainPage from './pages/main/main.component';
import FeedPage from './pages/feed/feed.component';

function App() {
  return (
    <StyledContainer>
        <StyledHeader>
        <h1>Read It</h1>
        <p>The second page of Reddit</p>
        </StyledHeader>
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
    </StyledContainer>

  );
}

export default App;
