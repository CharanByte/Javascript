console.log("hi");
let datavalid={};


const validation=(event)=>{

   
    const {name,value}=event.target;
    datavalid={
        ...datavalid,
        [name]:value
    }
    if (name==="fullname" && value.length>=4 && value.trim()) {
        console.log(value+" name is valid"); 
    }
   else if (name==="fullname" && value.length<4 && value.trim()) {
        console.log(value+" name is In valid"); 
    }
    if (name==="email" && value.includes("@gmail.com") && value.trim()) {
        console.log(value+" email is valid"); 
    }
   else if (name==="email" && !value.includes("@gmail.com") && value.trim()) {
        console.log(value+" email is In valid"); 
    }

    if (name==="password" && value.length>5 && value.trim()) {
        console.log(value+" password is valid"); 
    }
   else if (name==="password" && value.length<5 && value.trim()) {
        console.log(value+" password is In valid"); 
    }

    datavalid={
        ...datavalid,
        [name]:value
    }
    console.log(datavalid);
    
    if(
        datavalid.fullname.length>=4 &&
        datavalid.email.includes("@gmail.com")&&
        datavalid.password.length>5
    ){
        document.getElementById("button").removeAttribute("disabled");
    }
    else{
        document.getElementById("button").setAttribute("disabled","");

    }
}