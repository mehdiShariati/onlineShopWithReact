import React from "react";
import "./collection-overview.style.scss";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {fetchShoppingDataAsArray} from "../../redux/shop/shop.selectors";
import PreviewCollection from "../preview-collection/preview-collection.component";

const CollectionOverview=({collections})=>(

    <div className="collection-overview">
              {
            collections.map(({id,...restOfCollection})=>{
                
              return  <PreviewCollection key={id} {...restOfCollection} />

            })


        }

    </div>

);

const mapStateToProps=createStructuredSelector({
    collections:fetchShoppingDataAsArray
})


export default connect(mapStateToProps,null)(CollectionOverview);