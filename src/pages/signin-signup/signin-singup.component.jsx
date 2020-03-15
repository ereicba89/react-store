import React from 'react'

import './signin-signup.styles.scss'

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const SigninAndSignup = () => (
  <div className='singin-singnup'>
    <SignIn />
    <SignUp />
  </div>
)

export default SigninAndSignup