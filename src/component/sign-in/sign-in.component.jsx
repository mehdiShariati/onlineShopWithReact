import React, { Component } from "react";
import "./sign-in.style.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from "../../firebase/firebase.utils";
class SignIn extends Component{
constructor(){
    super();
    this.state={
        email:"",
        password:'',
    }
}

HandleSubmit=event=>{
    event.preventDefault();
    this.setState({email:'',password:''});
}
HandleChange=event=>{
    const {name,value}=event.target;
    this.setState({[name]:value});
}

render (){
return(

    <div className="sign-in">

        <h2>I already have an accunt</h2>
        <span>Sign in With your Email and password</span>

        <form onSubmit={this.HandleSubmit}>
            <FormInput type="text"
              name="email" 
              value={this.state.email} 
              handleChange={this.HandleChange} 
              required
              label="Email"
              />
       

            <FormInput type="password"
              name="password" 
              value={this.state.password}
              handleChange={this.HandleChange} 
              label="Password"
              />
           

            <CustomButton type="submit" >Sign In</CustomButton>
        &nbsp;
        <CustomButton onClick={signInWithGoogle} >Sign In With Google</CustomButton>
        </form>
      
    </div>
)


}


}
export default SignIn;