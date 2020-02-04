import React from "react";

import StripeCheckout from "react-stripe-checkout";


const StripeButton=({price})=>{

    const priceForStripe=price *100;
    const publishableKey="pk_test_Y0EsYXHBQgqC3ljdsVJv0izU004HEXM8d9";
const onToken=token=>{
    console.log(token);
    alert('payment SuccessFull');

}
    return(
        <StripeCheckout
        name="Pay right Now"
        label="OnlineShop ltd. Pay Now"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your Total Value $${price}`}
        amount={priceForStripe}
        token={onToken}
        stripeKey={publishableKey}
        />
    )

}
export default StripeButton;