//import lib
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

//import style
import './App.css';

//import layout
import Homepage from '../src/layouts/Homepage/Homepage'
import Shop from './layouts/Shop/Shop'
import SignInAndSignUp from './layouts/SignInAndSignUp/SignInAndSignUp'
import Checkout from './layouts/Checkout/Checkout'

//import component
import Header from './components/Header/Header'

//import firebase
import {auth, createUserProfileDocument} from './firebase/firebase'

//import redux
import {setCurrentUser} from './redux/user/user-actions'

//import selectors
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './redux/user/user-selectors'

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
          <Route path='/shop' component={Shop}/>
          <Route exact path='/checkout' component={Checkout}/>
          {/* if user sign in, user redirect to home */}
          <Route exact path='/sign-in' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUp/>)}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => {
    return {
      setCurrentUser: (user) => dispatch(setCurrentUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


// missing some point at :
// firestore part 12 & 13 ch 7
// redux !!!!!
// async await
// to do:
// fixing signin after signin or auto login signup
