import React, { Component } from 'react';
import './App.css';
import Homepage from '../src/layouts/Homepage/Homepage'
import { Switch, Route } from 'react-router-dom'
import Shop from './layouts/Shop/Shop'
import Header from './components/Header/Header'
import SignInAndSignUp from './layouts/SignInAndSignUp/SignInAndSignUp'
import {auth} from './firebase/firebase'

class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null

  componentDidMount = () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      console.log(user)
    })
  }

  componentWillUnmount = () => {
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/shop' component={Shop}/>
          <Route exact path='/sign-in' component={SignInAndSignUp}/>
        </Switch>
      </div>
    );
  }
}

export default App;


// missing some point at :
// routing -> last part ch 5 DONE! crystal clear!
// shop page -> second part ch 6
// spread operator
