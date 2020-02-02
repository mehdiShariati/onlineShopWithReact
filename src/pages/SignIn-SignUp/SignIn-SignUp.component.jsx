import React from "react";
import "./SignIn-SignUp.style.scss";

import SignIn from "../../component/sign-in/sign-in.component";
import SingUp from "../../component/sign-up/sign-up.component";

const SignInAndSignUp=()=>(
    <div className="sign-in-and-sign-Up">
      <SignIn />
      <SingUp />
    </div>
);

export default SignInAndSignUp;