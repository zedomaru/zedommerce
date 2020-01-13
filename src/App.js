import React, { Component } from 'react';
import './App.css';
import Homepage from '../src/layouts/Homepage/Homepage'
import { Switch, Route } from 'react-router-dom'
import Shop from './layouts/Shop/Shop'
import Header from './components/Header/Header'
import SignInAndSignUp from './layouts/SignInAndSignUp/SignInAndSignUp'
import {auth, createUserProfileDocument} from './firebase/firebase'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user-actions'

class App extends Component {

  unsubscribeFromAuth = null

  componentDidMount = () => {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
       
      }
      else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount = () => {
    this.unsubscribeFromAuth()
  }

  render(){
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
}

const mapDispatchToProps = (dispatch) => {
    return {
      setCurrentUser: (user) => dispatch(setCurrentUser(user))
    }
}

export default connect(null, mapDispatchToProps)(App);


// missing some point at :
// firestore part 12 & 13 ch 7
// to do:
// fixing signin after signin or auto login signup
// redux
