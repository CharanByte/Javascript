import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import Card from "./React  Props/temp"


// let sty={
//   color:"green",
//   backgroundColor:"red"
// }
// let name="charan";

// let d=new Date();
// let y=d.getFullYear();
// console.log(d);
// console.log(y);


// ReactDom.render(<h1 style={sty}>hellooooo {name}</h1>,document.getElementById("root"));


ReactDom.render(<div>
  <App></App>
  <Card name="charan"/>

</div>,document.getElementById("root"));