import {takeLatest,put,call,all} from "redux-saga/effects";

import {userActionTypes} from "../user/user.types"
import {clearCart} from "./cart.action";

export function* clearCartBaseOnSignout(){

    yield put(clearCart());



}

export function* clearCardOnSignOut(){

    yield takeLatest(userActionTypes.SIGNOUT,clearCartBaseOnSignout)
}