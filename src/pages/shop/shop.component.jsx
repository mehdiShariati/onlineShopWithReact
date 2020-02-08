

 import React,{Component} from "react";
 import CollectionOverview from "../../component/collection-overview/collection-overview.component";
 import CollectionPage from "../collection/collection.component";
 import {Route} from "react-router-dom";
 import {connect} from "react-redux"
 import WithSpinner from "../../component/with-spinner/with-spinner.component";
 import {fetchCollectionStart} from "../../redux/shop/shop.actions";
 import {createStructuredSelector} from "reselect";
 import {selectIsCollectionFetching} from "../../redux/shop/shop.selectors";
 import {selectIsCollectionNull} from "../../redux/shop/shop.selectors";


const CollectionsOverviewWithSpinner=WithSpinner(CollectionOverview);
const CollectionPageWithSpinner=WithSpinner(CollectionPage);

  class ShopPage extends React.Component{
  
    
    componentDidMount(){
      
      const {fetchCollectionStart}=this.props;
      fetchCollectionStart();

    }

    render(){
        const {match}=this.props;
        const {loading}=this.props;
        const {isCollectionFetched}=this.props;
        
        return(
 
            <div className="shop-Page">
                <Route exact path={`${match.path}`} render={(props)=><CollectionsOverviewWithSpinner isLoading={!isCollectionFetched} {...props} />} />
               <Route exact path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={!isCollectionFetched} {...props} />} />
             
            </div>
        )
    }




 
 
 }
 
 
  const mapDispatchtoProps=dispatch=>({
    fetchCollectionStart:()=>dispatch(fetchCollectionStart())
  })
  const mapStateToProps=createStructuredSelector({
    loading:selectIsCollectionFetching,
    isCollectionFetched:selectIsCollectionNull
   
  })
  
  export default connect(mapStateToProps,mapDispatchtoProps)(ShopPage);