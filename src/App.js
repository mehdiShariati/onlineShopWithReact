import React, { Component } from 'react';
import {Route,Switch} from "react-router-dom";
import './App.css';
import Homepage from "./pages/homepage/homePage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./component/header/header.component";
import SignInAndSignUp from "./pages/SignIn-SignUp/SignIn-SignUp.component";
import {auth} from "./firebase/firebase.utils";




class App extends Component {
constructor(){
  super();
  this.state={
    currentUser:null
  }
}
unSubscribeFromAuth=null;
componentDidMount(){
this.unSubscribeFromAuth=auth.onAuthStateChanged(user=>{
  this.setState({currentUser:user})
  console.log(user);
})

}
componentWillUnmount(){
  this.unSubscribeFromAuth();
}






  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
     
          <Switch>
          
            <Route exact  path="/" component={Homepage} />
            <Route  path="/shop" component={ShopPage} />
            <Route  path="/signIn" component={SignInAndSignUp} />
          
          </Switch>
  </div>
    );


  }

}

export default App;
