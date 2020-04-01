import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css';

import HomePage from './pages/homepage/homepage.component'

import ShopPage from './pages/shop/shop.component'

import SigninAndSignup from './pages/signin-signup/signin-singup.component'

import Header from './components/header/header.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import { setCurrentUser } from './redux/user/users.actions'

class App extends React.Component {

  unsuscribeFromAuth = null
  //concepto de subscripcion
  componentDidMount() {

    const { setCurrentUser } = this.props

    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            })
          })
          // , () => { console.log(this.state)}
          // console.log(this.state);
        
      }
      setCurrentUser(userAuth)
    })
  }

  //desuscripcion
  componentWillUnmount() {
    this.unsuscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/guns' component={ShopPage} />
          <Route path='/signin' component={SigninAndSignup} />
        </Switch>
      </div>
    )
  }
}

const mapDispachToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispachToProps)(App);
