import React, { Component } from 'react';
import {Route,Switch,Redirect} from "react-router-dom";
import './App.css';
import Homepage from "./pages/homepage/homePage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./component/header/header.component";
import SignInAndSignUp from "./pages/SignIn-SignUp/SignIn-SignUp.component";
import {auth,createUserProfileDocument} from "./firebase/firebase.utils";

import {connect} from "react-redux";
import setCurrentUser from "./redux/user/user.action";




class App extends Component {

unSubscribeFromAuth=null;
componentDidMount(){
  const {setCurrentUser}=this.props;
this.unSubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
  if(userAuth){
   const UserRef= await createUserProfileDocument(userAuth);
 UserRef.onSnapshot(snapshot=>{
  setCurrentUser ({
     currentUser:{
       id:snapshot.id,
       ...snapshot.data()
     }
   })
 });
  }else{
setCurrentUser({
  currentUser:null
})
    
  }
  

 
})

}
componentWillUnmount(){
  this.unSubscribeFromAuth();
}






  render(){
    const {currentUser}=this.props;
    return (
      <div>
        <Header  />
     
          <Switch>
          
            <Route exact  path="/" component={Homepage} />
            <Route  path="/shop" component={ShopPage} />
            
            <Route exact path="/signIn"  render={()=> currentUser ? (<Redirect to="/" />) :  (<SignInAndSignUp />) } />
          
          </Switch>
  </div>
    );


  }

}
const mapStatetoProps=state=>({
  currentUser:state.user.currentUser
});
const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStatetoProps,mapDispatchToProps)(App);
