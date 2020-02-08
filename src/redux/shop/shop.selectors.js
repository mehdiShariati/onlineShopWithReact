import {createSelector} from "reselect";

const callshopdata=state=>state.shop;


export const fetchShoppingData=createSelector([callshopdata],(shop)=>shop.collection);

export const fetchCollectionWithId=collectionUrlParam=>
createSelector([fetchShoppingData],collections=>{

    return collections[collectionUrlParam]

})

export const fetchShoppingDataAsArray=createSelector([fetchShoppingData],
    collections=>Object.keys(collections).map(key=>collections[key])
    
    
    )

    export const selectIsCollectionFetching=createSelector([callshopdata],shop=>shop.isFetching);

    export const selectIsCollectionNull=createSelector([callshopdata],shop=>!!shop.collection);