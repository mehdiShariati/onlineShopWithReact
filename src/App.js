import React from 'react';
import {Route,Switch} from "react-router-dom";
import './App.css';
import Homepage from "./pages/homepage/homePage.component";


const Hats=()=>(

<div>
  <h1>
    this is Hats
  </h1>
</div>

);


function App() {
  return (
<div>
 
  <Route exact  path="/" component={Homepage} />
  <Route  path="/hats" component={Hats} />
 
</div>
  );
}

export default App;
