import React from "react";
import {connect} from "react-redux";
import {clearItem,RemoveItem,addItem} from "../../redux/cart/cart.action";
import "./checkout-item.style.scss";

const CheckoutItem=({item,clearItemFromCart,removeItem,addItems})=>{
   const {name,price,quantity,imageUrl}=item;

    return(
    <div className="checkout-item">
        <div className="image-container">
        <img src={imageUrl} alt="item"/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div onClick={()=>removeItem(item)} className="arrow">&#10094;</div>
           <span className="value">{quantity}</span> 
            <div onClick={()=>addItems(item)} className="arrow">&#10095;</div>
            </span>
        <span className="price">{price}</span>
        <div onClick={()=>clearItemFromCart(item)} className="remove-button">&#10005;</div>

    </div>
)}
const mapDispatchToProps=dispatch=>({
clearItemFromCart:item=>dispatch(clearItem(item)),
removeItem:item=>dispatch(RemoveItem(item)),
addItems:item=>dispatch(addItem(item))
});
export default connect(null,mapDispatchToProps)(CheckoutItem);