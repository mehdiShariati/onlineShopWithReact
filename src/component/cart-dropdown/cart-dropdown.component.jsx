import React from "react";
import {connect} from "react-redux";
import "./cart-dropdown.style.scss";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {createStructuredSelector} from "reselect";
import {withRouter} from "react-router-dom";
import {ToggleCartHidden} from "../../redux/cart/cart.action";

const CartDropdown=({cartItems,history,dispatch})=>{

  return(
<div className="cart-dropdown">
<div className="cart-items" >

    {
        cartItems.length ?
        cartItems.map(item=>{
        return      (<CartItem key={item.id} item={item} />)
        }) : (<span className="empty-message">Your Cart is Empty Dude</span>)
    }
  
  </div>
<CustomButton onClick={
  ()=>{history.push('/checkout');
  dispatch(ToggleCartHidden());
  }} >CheckOut</CustomButton>
</div>

);
  }



const mapStatetoProps=createStructuredSelector({
        cartItems:selectCartItems
});




export default withRouter(connect(mapStatetoProps,null)(CartDropdown));