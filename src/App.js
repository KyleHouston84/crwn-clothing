import './App.css';
import { Routes, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log("🚀 ~ file: App.js ~ line 22 ~ App ~ componentDidMount ~ user", user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path='/' element={ <HomePage /> }/>
          <Route path='/shop' element={ <ShopPage /> } />
          <Route path='/signin' element={ <SignInAndSignUp /> } />
        </Routes>
      </div>
    );
  }
}

export default App;
