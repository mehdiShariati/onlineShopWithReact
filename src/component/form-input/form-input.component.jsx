import React from "react";

import "./form-input.style.scss";


const FormInput=({handleChange,label,...RestOfProps})=>(
<div className="group">
<input className="form-input" onChange={handleChange} {...RestOfProps} />
{
    label ?
    (<label className={`${RestOfProps.value.length ? "shirink" : ""} form-input-label`}>
        {label}
    </label>)
    :
    null
}

</div>


);
export default FormInput;