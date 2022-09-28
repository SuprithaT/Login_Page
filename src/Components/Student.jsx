import React from 'react'
import "./Student.css"
function Student({sname,sage})
{
    return(
        <div className='std'>
            <h1>{sname}</h1>
            <h1>{sage}</h1>
        </div>
    )
}
export default Student