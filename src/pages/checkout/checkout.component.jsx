import React from "react";
import "./checkout.style.scss";
import {connect} from "react-redux";
import {createStructuredSelector} from 'reselect';
import StripeButton from "../../component/stripe-button/stripe-button.component";
import {selectCartItems,selectCartTotal} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../component/checkout-item/checkout-item.component";
const CheckoutPage=({cartItems,total})=>(
<div className="checkout-page">
<div className="checkout-header">
                            <div className="header-block">
                                <span>Product</span> 
                            </div>
                            <div className="header-block">
                                <span>Descrtiption</span> 
                            </div>
                            <div className="header-block">
                                <span>Price</span> 
                            </div>
                            <div className="header-block">
                                <span>Quantity</span> 
                            </div>
                            <div className="header-block">
                                <span>Remove</span> 
    </div>

</div>
{
    cartItems.map(item=>
    (<CheckoutItem key={item.id} item={item} />)
    )
}
<div className="total">
<span>Total:{total}$</span>
</div>
<StripeButton price={total} />
</div>


);
const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})



export default connect(mapStateToProps)(CheckoutPage);