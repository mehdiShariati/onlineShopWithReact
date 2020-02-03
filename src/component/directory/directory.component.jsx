import React,{Component} from "react";
import "./directory.style.scss";
import MenuItem from "../menu-item/menu-item.component";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {fetchDirectories} from "../../redux/directory/directory.selectors";
class Directory extends Component{


render(){
const {sections}=this.props;
    return(
<div className="directory-menu">
{

sections.map(({id,...OtherState})=>{

  return  <MenuItem key={id} {...OtherState} />


})

}


</div>

    )
}

}
const mapStatetoProps=createStructuredSelector({

sections:fetchDirectories

})



export default connect(mapStatetoProps,null)(Directory);