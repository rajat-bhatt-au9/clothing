import React from 'react';

import SignIN from '../../components/sign-in/SignIn';
import SignUp from '../../components/signup/SignUp';

import './signin-and-signup.scss';

const SignInAndSignUpPage = () =>(
    <div className='sign-in-and-sign-up'>
        <SignIN />
        <SignUp />
    </div>
)

export default SignInAndSignUpPage;