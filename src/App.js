import React, { Component } from 'react';
import {Route,Switch} from "react-router-dom";
import './App.css';
import Homepage from "./pages/homepage/homePage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./component/header/header.component";
import SignInAndSignUp from "./pages/SignIn-SignUp/SignIn-SignUp.component";
import {auth,createUserProfileDocument} from "./firebase/firebase.utils";




class App extends Component {
constructor(){
  super();
  this.state={
    currentUser:null
  }
}
unSubscribeFromAuth=null;
componentDidMount(){
this.unSubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
  if(userAuth){
   const UserRef= await createUserProfileDocument(userAuth);
 UserRef.onSnapshot(snapshot=>{
   this.setState({
     currentUser:{
       id:snapshot.id,
       ...snapshot.data()
     }
   })
 });
  }else{

    this.setState({
      currentUser:null
    });
  }

 
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
