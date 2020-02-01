import React from "react";
import logo from "../../assets/logo.svg";
import {Link} from "react-router-dom";
import "./header.style.scss";


const Header=()=>(
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

<Link to="/signIn" className="option">
SignIn
</Link>
</div>
</div>


);

export default Header;