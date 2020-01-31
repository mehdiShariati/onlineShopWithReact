import React from 'react';
import {Route,Switch} from "react-router-dom";
import './App.css';
import Homepage from "./pages/homepage/homePage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./component/header/header.component";




function App() {
  return (
    <div>
      <Header />
   
        <Switch>
        
          <Route exact  path="/" component={Homepage} />
          <Route  path="/shop" component={ShopPage} />
        
        </Switch>
</div>
  );
}

export default App;
