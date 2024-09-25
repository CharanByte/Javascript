import React from "react";
import ReactDom from "react-dom";

let sty={
  color:"green",
  backgroundColor:"red"
}
let name="charan";

let d=new Date();
let y=d.getFullYear();
console.log(d);
console.log(y);


ReactDom.render(<h1 style={sty}>hellooooo {name}</h1>,document.getElementById("root"));
