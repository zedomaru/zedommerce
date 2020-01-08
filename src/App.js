import React from 'react';
import './App.css';
import Homepage from '../src/layouts/Homepage/Homepage'
import { Switch, Route } from 'react-router-dom'
import Shop from './layouts/Shop/Shop'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;


// missing some point at :
// routing -> last part ch 5
// shop page -> second part ch 6
// spread operator
