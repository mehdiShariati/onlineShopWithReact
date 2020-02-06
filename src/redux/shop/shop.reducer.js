
import ShopActionTypes from "./shop.types";
const INITIAL_STATE={
    collection:[]

}



const shopReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){

        case ShopActionTypes.UPDATE_COLLECTION:
            return{
                ...state,
                collection:action.payload
            }

        default:
            return state;
    }


}
export default shopReducer;