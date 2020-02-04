

 import React,{Component} from "react";
 import CollectionOverview from "../../component/collection-overview/collection-overview.component";
 import CollectionPage from "../collection/collection.component";
 import {Route} from "react-router-dom";
  const ShopPage=({match})=>{
 
 return(
 
     <div className="shop-Page">
         <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
      
     </div>
 )
 
 
 }
 
 
  
 
  export default ShopPage;