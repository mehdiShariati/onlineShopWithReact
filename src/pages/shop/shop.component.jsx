

 import React,{Component} from "react";
 import CollectionOverview from "../../component/collection-overview/collection-overview.component";
 import CollectionPage from "../collection/collection.component";
 import {Route} from "react-router-dom";
 import {connect} from "react-redux"
 import WithSpinner from "../../component/with-spinner/with-spinner.component";
 import {fetchCollections} from "../../redux/shop/shop.actions";
import { firestore,converCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

const CollectionsOverviewWithSpinner=WithSpinner(CollectionOverview);
const CollectionPageWithSpinner=WithSpinner(CollectionOverview);

  class ShopPage extends React.Component{
    state={
        loading:true,
    }
    unsubscribeFromSnapshot=null;
    
    componentDidMount(){
        const {upcollection}=this.props;
        const collectionRef=firestore.collection('collection');
        collectionRef.onSnapshot(async snapshot=>{
          const collectionMap=  converCollectionsSnapshotToMap(snapshot);
          upcollection(collectionMap);
          this.setState({loading:false});
        })

    }

    render(){
        const {match}=this.props;
        const {loading}=this.state;
        return(
 
            <div className="shop-Page">
                <Route exact path={`${match.path}`} render={(props)=><CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
               <Route exact path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={loading} {...props} />} />
             
            </div>
        )
    }




 
 
 }
 
 
  const mapDispatchtoProps=dispatch=>({
    upcollection:collecitonMap=>dispatch(fetchCollections(collecitonMap))
  })
  
  export default connect(null,mapDispatchtoProps)(ShopPage);