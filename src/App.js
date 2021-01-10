import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUpPage';
import { setCurrentUser } from './redux/user/user.actions';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component{

    unsubscribedFromAuth = null;

    componentDidMount(){

        const { setCurrentUser } = this.props;
        this.unsubscribedFromAuth = auth.onAuthStateChanged(async userAuth=>{
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth); 
                
                userRef.onSnapshot(snapShot =>{
                    setCurrentUser({
                        id : snapShot.id,
                        ...snapShot.data()
                    });
                });
            }
            setCurrentUser(userAuth);

        });
    }

    componentWillUnmount(){
        this.unsubscribedFromAuth();
    }

  render(){
    return (
        <div >
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route 
                    exact path='/signin' 
                    render={() => 
                    this.props.currentUser ? (
                    <Redirect to='/' />
                    ) : (
                    <SignInAndSignUpPage />
                    )
                    }
                />
            </Switch>
        </div>
      );
  }
}

const mapStateToProps = ({ user }) =>({
    currentUser:user.currentUser
})

const mapDispatchToProps = dispatch =>({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
