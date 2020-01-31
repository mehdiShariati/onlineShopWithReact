import React from "react";
import {withRouter} from "react-router-dom";
import "./menu-item.style.scss";


const MenuItem=({title,size,imageUrl,match,linkUrl,history})=>(

<div className={`menu-item ${size}`} onClick={()=>history.push(`${match.url}${linkUrl}`)} >
<div className="imageContainer" style={{backgroundImage:`url(${imageUrl}`}} />
<div className="content">
<h1 className="title">{title}</h1>
<span className="subtitle">Shop Now!</span>
</div>
</div>




);

export default withRouter(MenuItem);



