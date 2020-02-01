import React from "react";
import "./custom-button.style.scss";

const CustomButton=({children,...restOfProps})=>(
<button className="custom-button" {...restOfProps}>
    {children}
</button>
);
export default CustomButton;