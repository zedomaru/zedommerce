import React from 'react';
import './App.css';
import Homepage from '../src/layouts/Homepage/Homepage'
import { Switch, Route } from 'react-router-dom'
import Shop from './layouts/Shop/Shop'
import Header from './components/Header/Header'
import SignInAndSignUp from './layouts/SignInAndSignUp/SignInAndSignUp'

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={Shop}/>
        <Route exact path='/sign-in' component={SignInAndSignUp}/>
      </Switch>
    </div>
  );
}

export default App;


// missing some point at :
// routing -> last part ch 5 DONE! crystal clear!
// shop page -> second part ch 6
// spread operator
