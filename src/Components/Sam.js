import React, {useState} from "react";

function Sam(){
    let [count,setcount]=useState(0)
    let updatecount=()=>
    {
        setcount(count+1)
    }
    return(
        <div>
            <button onClick={updatecount}>update</button>
        </div>
    )
}