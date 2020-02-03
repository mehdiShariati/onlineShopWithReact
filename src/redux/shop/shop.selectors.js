import {createSelector} from "reselect";

const callshopdata=state=>state.shop;

export const fetchShoppingData=createSelector([callshopdata],(shop)=>shop.collection);