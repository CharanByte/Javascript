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
  <Card name="charan"
  src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/3d0f6/MainAfter.avif"
  tele="9267268278" 
  email="xyz@gmail.com"/>

  <Card name="sachin"
  src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
  tele="782787792" 
  email="abcd@gmail.com"/>

</div>,document.getElementById("root"));