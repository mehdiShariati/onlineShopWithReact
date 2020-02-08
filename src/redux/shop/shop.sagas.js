import {takeEvery,call,put} from "redux-saga/effects"

import ShopActionTypes from "./shop.types";

import {firestore,converCollectionsSnapshotToMap} from "../../firebase/firebase.utils"; 

import {
    fetchCollectionsStartSuccess,
    fetchCollectionsStartFailure
} from "./shop.actions";

export function* fetchCollectionsAsync(){

 
        try{
        const collectionRef=firestore.collection('collection');

        const snapshot=yield collectionRef.get();

        const collectionsMap=yield call(converCollectionsSnapshotToMap,snapshot);

        yield put(fetchCollectionsStartSuccess(collectionsMap));

        }catch(error){
            yield put(fetchCollectionsStartFailure(error.message));
        }


        // dispatch(fetchCollectionStart());

        // collectionRef.get().then(snapshot=>{
        //   const collectionMap=  converCollectionsSnapshotToMap(snapshot);
        //   dispatch(fetchCollectionsStartSuccess(collectionMap))
         
        // }).catch(error=>{
        //     dispatch(fetchCollectionsStartFailure(error));
        // })


}


export function* fetchCollectionStart(){

yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START,fetchCollectionsAsync);



}