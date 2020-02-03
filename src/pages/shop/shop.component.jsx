 import React,{Component} from "react";

import PreviewCollection from "../../component/preview-collection/preview-collection.component";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {fetchShoppingData} from "../../redux/shop/shop.selectors";
 const ShopPage=({collections})=>{

return(

    <div className="shop-Page">
        {
            collections.map(({id,...restOfCollection})=>{
              return  <PreviewCollection key={id} {...restOfCollection} />

            })


        }
     
    </div>
)


}


 
const mapStateToProps=createStructuredSelector({
    collections:fetchShoppingData
})
 export default connect(mapStateToProps,null)(ShopPage);