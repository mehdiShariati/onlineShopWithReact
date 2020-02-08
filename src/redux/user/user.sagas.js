import {takeLatest,put,call,all} from "redux-saga/effects";
import {userActionTypes} from "./user.types";
import {auth,getCurrentUser,signInWithGoogle,createUserProfileDocument} from "../../firebase/firebase.utils";
import {SignInWithGoogleSuccess,SignInWithGoogleFailure,SignInWithEmailFailure,SignInWithEmailSuccess,signUpSuccess,signUpFailure} from "./user.action";
export  function* signInWithGoogleStart(){
    try{
    const {user}=yield signInWithGoogle();
    const userRef=yield call(createUserProfileDocument,user);
    const userSnapShot=yield userRef.get();
    yield  put(SignInWithGoogleSuccess({ id:userSnapShot.id,  ...userSnapShot.data()}));
    }catch(error){
        yield put(SignInWithGoogleFailure(error.message));
    }
}

export function* SignInWithGoogleimpelementWithSaga(){

  yield  takeLatest(userActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogleStart)
  

}

export function* signInWithEmails({payload:{email,password}}){

 try{
       const {user}=yield auth.signInWithEmailAndPassword(email,password);
       const userRef=yield call(createUserProfileDocument,user);
       const userSnapShot=yield userRef.get();
       yield put(SignInWithEmailSuccess(userSnapShot));
    
 }catch(error){

   yield put(SignInWithEmailFailure(error.message));
 }


}

export function* EmailAndPassword(){


    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START,signInWithEmails);

}

export function*  OutSign(){
try{
    yield auth.signOut();

}catch(error){
    yield console.log(error.message)
}

    
}

export function* SignOut(){


    yield takeLatest(userActionTypes.SIGNOUT,OutSign)
}

export function* isUserAuthenticated(){

try {
    const userAuth=yield getCurrentUser();
    if(!userAuth) return;
    const userRef=yield call(createUserProfileDocument,userAuth);
    const userSnapShot=yield userRef.get();
       yield put(SignInWithEmailSuccess(userSnapShot));

} catch (error) {
    yield put(SignInWithEmailFailure(error.message))
    
}
}

export function* OncheckUserSession(){

    yield takeLatest(userActionTypes.CHECK_USER_SESSION,isUserAuthenticated)
}


export function* onSignUphandling({payload:{displayName,email,password}}){
     try{
        const {user}=yield auth.createUserWithEmailAndPassword(email,password);
        const userRef=yield call(createUserProfileDocument,user);
        const userSnapShot=yield userRef.get();
         yield  put(signUpSuccess({ id:userSnapShot.id,displayName,...userSnapShot.data(),displayName:displayName}));
     

    }catch(error){
        yield   put(signUpFailure(error.message))
    }

    


}


export function* onSignUp(){

    yield takeLatest(userActionTypes.SIGN_UP_START,onSignUphandling)
}



