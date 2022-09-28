import React from "react"
import {Link} from "react-router-dom"
function log(){
    return(
    <div>
          <nav style={{margin:"10px"}}>  
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/products">Product</Link>
            <Link to="/login">Login</Link>
        </nav>
      </div>
    )
}
export default log;