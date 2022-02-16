import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={ <HomePage /> }/>
        <Route path='/shop' element={ <ShopPage /> } />
        <Route path='/signin' element={ <SignInAndSignUp /> } />
      </Routes>
    </div>
  );
}

export default App;
