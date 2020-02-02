import React from "react";
import {connect} from "react-redux";
import "./cart-dropdown.style.scss";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
const CartDropdown=({cartItems})=>(
<div className="cart-dropdown">
<div className="cart-items" >

    {
        cartItems ?
        cartItems.map(item=>{
        return      (<CartItem key={item.id} item={item} />)
        }) : null
    }
  
  </div>
<CustomButton >CheckOut</CustomButton>
</div>

)


const mapStatetoProps=state=>({
        cartItems:state.cart.cartItems
});




export default connect(mapStatetoProps,null)(CartDropdown);