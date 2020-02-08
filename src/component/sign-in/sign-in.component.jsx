import React, { useState } from "react";
import "./sign-in.style.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {connect} from "react-redux";
import {SignInWithGoogleStart,SignInWithEmailStart} from "../../redux/user/user.action";


const SignIn =({signINWithEmailAndPassword,signInWithGoogles})=>{
    const [userCredentials,setUserCredentials]= useState({email:'',password:''})



const HandleSubmit=async event=>{
    event.preventDefault();
    const {email,password}=userCredentials;
   
    signINWithEmailAndPassword({email,password});
    setUserCredentials({email:'',password:''});

}


const HandleChange=event=>{
    const {name,value}=event.target;
    setUserCredentials({...userCredentials,[name]:value});
}


const {email,password}=userCredentials;
return(

    <div className="sign-in">

        <h2>I already have an accunt</h2>
        <span>Sign in With your Email and password</span>

        <form onSubmit={HandleSubmit}>
            <FormInput type="text"
              name="email" 
              value={email} 
              handleChange={HandleChange} 
              required
              label="Email"
              />
       

            <FormInput type="password"
              name="password" 
              value={password}
              handleChange={HandleChange} 
              label="Password"
              />
           

            <CustomButton type="submit" >Sign In</CustomButton>
        &nbsp;
      
        </form>
        <CustomButton onClick={()=>signInWithGoogles()} >Sign In With Google</CustomButton>
    </div>
)





}
const MapDispatchToProps=dispatch=>({
    signInWithGoogles:()=>dispatch(SignInWithGoogleStart()),
    signINWithEmailAndPassword:({email,password})=>dispatch(SignInWithEmailStart({email,password}))
})
export default connect(null,MapDispatchToProps)(SignIn);