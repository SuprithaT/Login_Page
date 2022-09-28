import React, { useEffect,useState } from "react";
function products() {
    let [state, setState] = useState([]);

    useEffect(() => {
        let getdata = async () => {
            let res = await fetch("https://fakestoreapi.com/products/")
            res = await res.json()
            setState(res)
        }
        getdata()
    }, [])

    console.log(state);

    return (
        <div>
            {
                state.map((e) => {
                    return (
                        <div>
                            <table>
                                <tr>
                                    <td>Title:{e.title}</td>
                                </tr>
                            </table>
                        </div>
                    )
                })
            }
            {/* <nav>
                <Link to="mobiles">Mobile</Link>
                <Link to="earphone">Earphone</Link>
            </nav>
            <Outlet /> */}
        </div>
    )
}
export default products;








// import React, { useEffect, useState } from "react";
// function products() {
//     let [state, setState] = useState([]);

//     useEffect(()=>{
//         let getdata = async () => {
//             let res = await fetch("https://fakestoreapi.com/products/")
//             res = await res.json();
//             setState(res)
//         }
//         getdata()
//     }, [])

//     console.log(state);

//     return (
//         <div>
//             {
//                 state.map((e) => {
//                     return (
//                         <div>
//                             <table>
//                                 <tr>
//                                     <td>Title:{e.title}</td>
//                                 </tr>
//                             </table>
//                         </div>
//                     )
//                 })
//             }
          
//         </div>
//     )
// }
// export default products;
