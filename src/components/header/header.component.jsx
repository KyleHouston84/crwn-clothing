import React from "react";
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { HeaderConatiner, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <HeaderConatiner>
    <LogoContainer to='/'>
      <Logo className="logo" />
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/shop'>CONTACT</OptionLink>
      {
        currentUser 
          ? <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
          : <OptionLink to="/signin">SIGN IN</OptionLink> 
      }
      <CartIcon />  
    </OptionsContainer>
    { hidden ? null : <CartDropdown /> } 
  </HeaderConatiner>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);