export const addItemToCart=(cartItems,cartItemsToAdd)=>{
    const existingCartItem=cartItems.find(cartItem=>cartItem.id === cartItemsToAdd.id);
    if(existingCartItem){
        return cartItems.map(cartItem=>cartItem.id === cartItemsToAdd.id ?  {...cartItem,quantity:cartItem.quantity + 1,totalPrice:cartItem.price * cartItem.quantity } : cartItem)



    }
    return [...cartItems,{...cartItemsToAdd,quantity:1}];
}
export const RemoveItemFromCart=(cartItems,cartItemToRemove)=>{
    const existingCartItem=cartItems.find(cartItem=>cartItem.id===cartItemToRemove.id);
    if(existingCartItem.quantity === 1){
     return   cartItems.filter(cartItem=>cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(item=>
        item.id === cartItemToRemove.id ? {...item,quantity:item.quantity-1} 
         : item
        )
}
