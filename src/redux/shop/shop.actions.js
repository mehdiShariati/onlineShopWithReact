import ShopActionTypes from "./shop.types";

 export const fetchCollections=collection=>({
    type:ShopActionTypes.UPDATE_COLLECTION,
    payload:collection
});

