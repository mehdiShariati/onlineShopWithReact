import React from "react";
import logo from "../../assets/logo.svg";
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import {setCurrentUser,SignOut} from "../../redux/user/user.action";
import CartIcon from "../cart-icon/cart-icon.component";
import {selectHiddenState} from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";

import {HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
    OptionDiv} from "./header.style";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";
const Header=({currentUser,hidden,SignOut})=>(
<HeaderContainer>
<LogoContainer to="/" >
<img src={logo} alt="logo" className="logo" />
</LogoContainer>
<OptionsContainer>
<OptionLink to="/shop" >
Shop
</OptionLink>

<OptionLink to="/contact" >
Contact
</OptionLink>

{
    currentUser ? 
    <OptionLink to="/"  onClick={()=>SignOut()}>Sign Out</OptionLink>
    :
    <OptionLink to="/signIn" >
    SignIn
    </OptionLink>
}
<CartIcon />
</OptionsContainer>
{
    hidden ? null :  (<CartDropdown />)
}


</HeaderContainer>


);
const mapDispatchToprops=dispatch=>({
    setCurrentUser:user=>dispatch(setCurrentUser(user)),
    SignOut:()=>dispatch(SignOut())
})
const mapStatetoProps=createStructuredSelector({
       
    currentUser:selectCurrentUser,
    hidden:selectHiddenState
});




export default connect(mapStatetoProps,mapDispatchToprops)(Header);