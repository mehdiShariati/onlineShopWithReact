import React, { useState } from "react";
import "./sign-up.style.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth , createUserProfileDocument } from "../../firebase/firebase.utils";
import {signUpStart} from "../../redux/user/user.action";
import {connect} from "react-redux";

const SingUp=({SignUpStart})=>{
const [userCredentials,setUserCredentials]=useState({
displayName:'',
email:'',
password:"",
confirmPassword:""

});
const {displayName,email,password,confirmPassword }=userCredentials;

const handleSubmit= event=>{
    event.preventDefault();
 
    
  
    if(password!==confirmPassword){
        alert('password and onfirmpassword is incorrect');  
        return;
    }
   
    SignUpStart( {displayName,email,password});
    setUserCredentials({ 
        displayName:'',
        email:'',
        password:"",
        confirmPassword:""
    });
}
const handleChange=event=>{
    const {name,value}=event.target;
    setUserCredentials({...userCredentials,[name]:value});
}



     
        return(

            <div className="sign-up">
                <h2 className="title">I dont have an account!</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={handleSubmit}>

                    <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                    label="Display Name"
                    required />

                    <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label="email"
                    required />

                    <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label="password"
                    required />

                       <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    label="confirmPassword"
                    required />

                    <CustomButton type="submit" >Sign Up</CustomButton>




                </form>
        
            </div>
        
        
        )

}

const mapDispatchToProps=dispatch=>({
    SignUpStart:({displayName,email,password})=>dispatch(signUpStart({displayName,email,password}))
})

export default connect(null,mapDispatchToProps)(SingUp);