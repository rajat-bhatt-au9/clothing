import React from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './signup.scss';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            displayName: '',
            email: '',
            password:'',
            confirmPassword :'',
            signupError: ''
        };
    }
    
    handleSumbmit = async event =>{
        event.preventDefault();
        
        const { displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("Passowrd don't Match");
            return;
        }
        if(password.length < 6){
            alert("Password should be atleast 6 character long");
            return;
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password:'',
                confirmPassword :''
            });

        }catch(error){
            console.log(error);
            switch(error.code){
                case 'auth/email-already-in-use':
                    this.setState({signupError: 'Email already exsist'})
                    break;
            }
        }
    };

    handleChnage = event =>{
        const { name, value } = event.target;

        this.setState({[name]: value});
    };

    render(){

        const { displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'> I do not have a account</h2>
                <span>Sign up with your email and password.</span>

                <div className='error'>
                    <h2> {this.state.signupError} </h2>
                </div>

                <form className='sign-up-form' onSubmit={this.handleSumbmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChnage}
                        label='Name'
                        required
                    />

                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChnage}
                        label='Email'
                        required
                    />

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChnage}
                        label='Password'
                        required
                    />

                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChnage}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton  type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;