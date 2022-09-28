import React from "react";
import {Link} from 'react-router-dom'
import './Navbar.css'
function Navbar(){
    return(
        <nav>
            <Link to="home">Home</Link>
            <Link to="Prouducts">Prouducts</Link>
            <Link to="Contact">Contact</Link>
            <Link to="Login">Login</Link>
           
        </nav>
    )
}
export default Navbar