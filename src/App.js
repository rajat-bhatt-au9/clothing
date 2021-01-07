import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUpPage';

import {auth} from './firebase/firebase.utils';

class App extends React.Component{
    constructor(){
        super();

        this.state={
            currentUser: null
        }
    }

    unsubscribedFromAuth = null;

    componentDidMount(){
        this.unsubscribedFromAuth = auth.onAuthStateChanged(user=>{
            this.setState({ currentUser: user});
            
            console.log(user);
        });
    }

    componentWillUnmount(){
        this.unsubscribedFromAuth();
    }

  render(){
    return (
        <div >
            <Header currentUser={this.state.currentUser} />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route path='/signin' component={SignInAndSignUpPage} />
            </Switch>
        </div>
      );
  }
}

export default App;
