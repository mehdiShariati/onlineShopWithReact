import React from "react";
import logo from "../../assets/logo.svg";
import {Link} from "react-router-dom";
import "./header.style.scss";
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import setCurrentUser from "../../redux/user/user.action";
import CartIcon from "../cart-icon/cart-icon.component";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";
const Header=({currentUser,hidden})=>(
<div className="header">
<Link to="/" className="logo-container">
<img src={logo} alt="logo" className="logo" />
</Link>
<div className="options">
<Link to="/shop" className="option">
Shop
</Link>

<Link to="/contact" className="option">
Contact
</Link>
{
    currentUser ? 
    <Link to="/" className="option" onClick={()=>auth.signOut()}>Sign Out</Link>
    :
    <Link to="/signIn" className="option">
    SignIn
    </Link>
}
<CartIcon />
</div>
{
    hidden ? null :  (<CartDropdown />)
}


</div>


);
const mapDispatchToprops=dispatch=>({
    setCurrentUser:user=>dispatch(setCurrentUser(user))
})
const mapStatetoProps=({user:{currentUser},cart:{hidden}})=>({
    currentUser,
    hidden
});




export default connect(mapStatetoProps,mapDispatchToprops)(Header);