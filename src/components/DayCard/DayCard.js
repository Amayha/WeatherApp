import React from 'react';


function Daycard(props) {



    return(

        <div>
            <p> {props.dia.day}</p>
            <p>{props.dia.mar}</p>
        </div>
    )
}



export default Daycard;