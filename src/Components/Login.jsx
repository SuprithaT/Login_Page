import React from "react";
import {useNavigate} from "react-router-dom"

function Login(){

let navigatetohome=useNavigate()
let forsubmit=(e)=>
{
    navigatetohome("/products")  
    e.preventDefault()
}

    return(
        <div>
<form onSubmit={forsubmit}>
    <input type="text" placeholder="Enter the name"/>
    <input type="password" placeholder="Enter the password"/>
    <button type="submit">Submit</button>
</form>
</div>
    )
}
export default Login;
