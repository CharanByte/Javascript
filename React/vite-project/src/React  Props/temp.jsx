import React from "react";

let sty={
   color:"red",
   width:200,
   
}
function Card(Props){
    
    return <div>
        <h1 style={sty}>{Props.name}</h1>
        <img src={Props.src} style={sty} ></img>
        <p>{Props.tele}</p>
        <p>{Props.email}</p>
    </div> 
}

export default Card;