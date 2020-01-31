 import React,{Component} from "react";
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../component/preview-collection/preview-collection.component";
 class ShopPage extends Component{
constructor(){
    super();
    this.state={
        collections:SHOP_DATA
    }
}

render(){
const {collections}=this.state;
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


 }

 export default ShopPage;