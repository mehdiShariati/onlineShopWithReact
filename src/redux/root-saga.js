import {all,call} from "redux-saga/effects";
import {fetchCollectionStart} from "./shop/shop.sagas";
import {SignInWithGoogleimpelementWithSaga,OncheckUserSession,EmailAndPassword,SignOut,onSignUp} from "./user/user.sagas";
import {clearCardOnSignOut} from "./cart/cart.sagas";

export default function* rootSaga(){


    yield all([call(fetchCollectionStart),call(SignInWithGoogleimpelementWithSaga),call(EmailAndPassword),call(SignOut),call(OncheckUserSession),call(clearCardOnSignOut),call(onSignUp)]);
} 