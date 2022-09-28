import React, { useState } from "react";
function About(){
let[name,setName]=useState(" ");
    let[age,setAge]=useState(" ")
    let updatename=(s)=>
    {
        setName(s.target.value)
    }
    let updateage=(s)=>
    {
        setAge(s.target.value)
    }
return(
        <div>
            <h1>Name:{name}</h1>
            <h1>age:{age}</h1>
            <input type="text" placeholder="enter the name" onChange={updatename}/>
            <input type="text" placeholder="enter the age" onChange={updateage}/>
        </div>
    )
}
export default About;