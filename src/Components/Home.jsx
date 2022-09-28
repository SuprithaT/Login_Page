import React, { useState } from "react";
function Home(){
    let [count,setCount]=useState(0);
    let updatecount=()=>
    {
        setCount(count+1)
    }
    return(
        <div>
            <h1>Count:{count}</h1>
 <button onClick={updatecount} >Update</button>


        </div>
       )
}

   
export default Home;//////useState concept
//Data binding is a connection between data to be displayed in view ans component logic .