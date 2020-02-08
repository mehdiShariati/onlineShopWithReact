
import {userActionTypes} from "./user.types";

const initialState={
    currentUser:null,
    error:null,
    SignInWithGoogle:null
}


const userReducer=(state=initialState,action)=>{
switch(action.type){
// case userActionTypes.SET_CURRENT_USER:
//     return {
//         ...state,
//         currentUser:action.payload
//     }

    case userActionTypes.GOOGLE_SIGN_IN_START:
        return{
            ...state,
            SignInWithGoogle:true
        }

        case userActionTypes.GOOGLE_SIGN_IN_SUCCESS:
            return{
                ...state,
                currentUser:action.payload
            }
            case userActionTypes.GOOGLE_SIGN_IN_FAILURE:
                return{
                    ...state,
                    error:action.payload
                }
                case userActionTypes.EMAIL_SIGN_IN_START:
                return{
                    ...state
                  
                }
                case userActionTypes.EMAIL_SIGN_IN_SUCCESS:
                    return{
                        ...state,
                        currentUser:action.payload
                    }
                case userActionTypes.EMAIL_SIGN_IN_FAILURE:
                    return{
                        ...state,
                        error:action.payload
                    }
                    case userActionTypes.SIGNOUT:
                        return{
                            ...state,
                            currentUser:null,
                            error:null,
                            SignInWithGoogle:null
                        }
                        case userActionTypes.CHECK_USER_SESSION:
                            return{
                                ...state,

                            }
                            case userActionTypes.SIGN_UP_SUCCESS:
                                return{
                                    ...state,
                                    currentUser:action.payload
                                }
                                case userActionTypes.GOOGLE_SIGN_IN_FAILURE:
                                return{
                                    ...state,
                                    error:action.payload
                                }
    default:
        return state;


}
}

export default userReducer;