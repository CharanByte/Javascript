
let onPressname=(event)=>{
	
	//let getName=document.getElementById("name");
	//document.getElementById("show1").innerHTML=getName.value;
	const {name,value}=event.target;
	console.log(value);
	console.log(name);
	if(name==="fullname" && value.length<10){
		console.log("valid");
		document.getElementById("show2").innerHTML="valid";
	
	}
	else{
		console.log("error");
		document.getElementById("show3").innerHTML="invalid";
	}
	if(name==="age" && value>18){
		console.log("valid");
		document.getElementById("show4").innerHTML="valid";
	
	}
	else{
		console.log("error");
		document.getElementById("show4").innerHTML="invalid";
	}


}


		

/*
(function(){
	console.log("hello11");
	
}());

let onPressEmail=()=>{
	let getaddress=document.getElementById("address").value;
	document.getElementById("show2").innerHTML=getaddress;
}

let onPressage=()=>{
	let getAge=document.getElementById("age").value;
	document.getElementById("show3").innerHTML=getAge;
	
}

let onPressQualification=()=>{
	let getQualification=document.getElementById("qualification").value;
	document.getElementById("show4").innerHTML=getQualification;
	
}

let onpressPercentage=()=>{
let getPer=document.getElementById("per").value;
document.getElementById("show5").innerHTML=getPer;
}
let  onpresscollege=()=>{
	let getCollege=document.getElementById("college").value;
	document.getElementById("show6").innerHTML=getCollege;
}
*/