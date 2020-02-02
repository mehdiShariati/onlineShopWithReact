import React from "react";
import logo from "../../assets/logo.svg";
import {Link} from "react-router-dom";
import "./header.style.scss";
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import setCurrentUser from "../../redux/user/user.action";
const Header=({currentUser})=>(
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

</div>
</div>


);
const mapStatetoProps=state=>({
    currentUser:state.user.currentUser
})

const mapDispatchToProps=dispatch=>({
    setCurrentUser:user=>dispatch(setCurrentUser(user))
  })

const handleSignOut=()=>{
    auth.signOut();
    this.props.setCurrentUser({
        currentUser:null
    });
}

export default connect(mapStatetoProps,mapDispatchToProps)(Header);