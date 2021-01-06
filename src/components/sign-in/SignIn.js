import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import './signin.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();

        this.setState({email:'', password:''})
    }

    handleChange= event =>{
        const { value, name} = event.target;

        this.setState({[name]: value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' handleChange={this.handleChange} value={this.state.email} label='Email' required />

                    <FormInput name='passowrd' type='password' handleChange={this.handleChange} label='Password' value={this.state.password} required />

                    <CustomButton type='submit' >Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;