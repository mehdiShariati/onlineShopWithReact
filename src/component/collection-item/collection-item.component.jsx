import React from "react";
import "./collection-item.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import {addItem} from "../../redux/cart/cart.action";
import {connect} from "react-redux";
const CollectionItem=({item,addItem})=>{
    const {name,price,imageUrl,id}=item;
return(
    <div className="collection-item" >
        <div className="image" style={{backgroundImage:`url(${imageUrl})`}} />

        <div className="collection-footer">

        <span className="name">{name}</span>
       <span className="price">{price}$</span>
        </div>

        <CustomButton onClick={()=>addItem(item)} inverted="true" >Add to Cart</CustomButton>
    </div>
);
}

const mapDispatchtoProps=dispatch=>({
    addItem:item=>dispatch(addItem(item))
})


export default connect(null,mapDispatchtoProps)(CollectionItem);