import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

const CharacterPage = () => (
  <div>
    <h1>Character Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/character' component={CharacterPage} />
      </Switch>
    </div>
  );
}

export default App;
