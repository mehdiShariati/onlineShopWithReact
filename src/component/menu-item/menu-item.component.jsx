import React from "react";

import "./menu-item.style.scss";


const MenuItem=(props)=>(

<div className={`menu-item ${props.size}`} >
<div className="imageContainer" style={{backgroundImage:`url(${props.image}`}} />
<div className="content">
<h1 className="title">{props.title}</h1>
<span className="subtitle">{props.subtitle}</span>
</div>
</div>




);

export default MenuItem;



