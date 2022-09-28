import React, { useEffect, useState } from "react";

function Services() {
    let [state, setState] = useState([]);
     useEffect(()=>{
        let getdata = async () => {
            let res = await fetch("https://fakestoreapi.com/products/")
            res = await res.json();
            setState(res)
        }
        getdata()
    },[]) 

console.log(state);
return (
        <div>
            {state.map((e)=>{
                return(
                    <div>
                    <h1>Title : {e.title}</h1>
                    <h1>price : {e.price}</h1>
                    <h1>image: {e.image}</h1>
</div>
                )
            })
        }
        </div>
    )}
export default Services