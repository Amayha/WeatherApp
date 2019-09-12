import React from 'react';


function Daycard(props) {



    return(

        <div>
            <h3>{props.dia.day}</h3>
            <img src={props.dia.icon} alt='' />
            <p >
                <span>{props.dia.min}</span> {props.dia.max}
            </p>
            <p>{props.dia.mar}</p>
            <p>{props.dia.humedad}</p>
            <p>{ props.dia.descri}</p>
            <p>{ props.dia.vel}</p>
            <p>{ props.dia.deg}</p>
        </div>
    )
}



export default Daycard;