import React from "react";
import {connect} from "react-redux";
import {ReactComponent as ShopingIcon} from "../../assets/shopping-bag.svg";
import {ToggleCartHidden} from "../../redux/cart/cart.action";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import "./cart-icon.style.scss";

const CartIcon=({ToggleCartHidden,cartItemsCount})=>(
    <div className="cart-icon" onClick={ToggleCartHidden}>

    <ShopingIcon className="shopping-icon" />

<span className="item-count">{cartItemsCount}</span>

    </div>
);
const mapDispatchToProps=dispatch=>({
    ToggleCartHidden:()=>dispatch(ToggleCartHidden())
})
const mapStatetoProps=createStructuredSelector({
    cartItemsCount:selectCartItemsCount 
});

export default connect(mapStatetoProps,mapDispatchToProps)(CartIcon);