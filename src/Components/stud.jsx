import React from 'react'
function stud({sname,sage}){
    let mystyle={
        border:"1px soild green",
        backgroundColor:"red",
        color:"white",
        borderRadius:"20px",
        boxShadow:"1px 1px 30px 2px cyan",
        margin:"20px"
    }
return(
    <div style={mystyle}>
        <h1>Name:{sname}</h1>
        <h1>Age:{sage}</h1>
    </div>
)
}