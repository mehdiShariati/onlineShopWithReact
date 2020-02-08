
import {userActionTypes} from "./user.types";


 export const setCurrentUser=user=>({
type:userActionTypes.SET_CURRENT_USER,
payload:user

})

export const SignInWithGoogleStart=()=>({
    type:userActionTypes.GOOGLE_SIGN_IN_START
})

export const SignInWithGoogleSuccess=(user)=>({
    type:userActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload:user
})

export const SignInWithGoogleFailure=(error)=>({
    type:userActionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload:error
})


export const SignInWithEmailStart=(emailAndpassword)=>({
    type:userActionTypes.EMAIL_SIGN_IN_START,
    payload:emailAndpassword
})
export const SignInWithEmailSuccess=(emailAndpassword)=>({
    type:userActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload:emailAndpassword
});

export const SignInWithEmailFailure=(error)=>({
    type:userActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload:error
})

export const SignOut=()=>({
    type:userActionTypes.SIGNOUT
})

export const checkuserSession=()=>({
    type:userActionTypes.CHECK_USER_SESSION
})

export const signUpStart=(usercredentials)=>({
    type:userActionTypes.SIGN_UP_START,
    payload:usercredentials
})

export const signUpSuccess=(user)=>({
    type:userActionTypes.SIGN_UP_SUCCESS,
    payload:user
})
export const signUpFailure=(error)=>({
    type:userActionTypes.SIGN_UP_Failure,
    payload:error
})




