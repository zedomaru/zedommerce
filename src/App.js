import React, { Component } from 'react';
import './App.css';
import Homepage from '../src/layouts/Homepage/Homepage'
import { Switch, Route } from 'react-router-dom'
import Shop from './layouts/Shop/Shop'
import Header from './components/Header/Header'
import SignInAndSignUp from './layouts/SignInAndSignUp/SignInAndSignUp'
import {auth, createUserProfileDocument} from './firebase/firebase'

class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null

  componentDidMount = () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log('1 ', this.state)
          })
        })
       
      }
      else {
        this.setState({currentUser: userAuth})
      }
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
// firestore part 12 & 13 ch 7
