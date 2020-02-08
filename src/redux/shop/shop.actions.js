import ShopActionTypes from "./shop.types";
import {firestore,converCollectionsSnapshotToMap} from "../../firebase/firebase.utils";

 export const fetchCollectionStart=()=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_START,
    
});

export const fetchCollectionsStartSuccess=collection=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collection
})
export const fetchCollectionsStartFailure=error=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload:error
})






