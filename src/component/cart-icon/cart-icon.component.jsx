import React from "react";
import {connect} from "react-redux";
import {ReactComponent as ShopingIcon} from "../../assets/shopping-bag.svg";
import {ToggleCartHidden} from "../../redux/cart/cart.action";
import "./cart-icon.style.scss";

const CartIcon=({ToggleCartHidden,cartItems})=>(
    <div className="cart-icon" onClick={ToggleCartHidden}>

    <ShopingIcon className="shopping-icon" />

<span className="item-count">{cartItems.length}</span>

    </div>
);
const mapDispatchToProps=dispatch=>({
    ToggleCartHidden:()=>dispatch(ToggleCartHidden())
})
const mapStatetoProps=state=>({
    cartItems:state.cart.cartItems
});

export default connect(mapStatetoProps,mapDispatchToProps)(CartIcon);