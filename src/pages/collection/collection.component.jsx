import React from "react";

import "./collection.style.scss";
import CollectionItem from "../../component/collection-item/collection-item.component";
import {connect} from "react-redux";
import {fetchCollectionWithId} from "../../redux/shop/shop.selectors";

const CollectionPage=({match,collection})=>{
const {title,items}=collection;



return(

    <div className="collection-page">
        <div className="title">{title}</div>
        <div className="items">

        {
         items.map(item=>(<CollectionItem key={item.id} item={item} />))
        }


        </div>

       

    </div>
)
}
const mapStateToProps=(state,ownProps)=>({
    collection:fetchCollectionWithId(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps,null)(CollectionPage);
