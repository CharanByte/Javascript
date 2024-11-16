<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<form action="valid" method="post">
<pre>
<span id="invalidname"></span>
Name<input type="text" id="name" name="name" onblur="onKeypress(event)">
Email<input type="text" id="email" name="email"
				onblur="onKeypress(event)">
password<input type="text" id="password" name="password"
				onblur="onKeypress(event)">
Age<input type="text" id="age" name="age" onblur="onKeypress(event)"> 
Phone No<input type="text" id="no" name="phone"
				onblur="onKeypress(event)">
<input type="submit" value="Submit">


</pre>
	</form>
	<script>

const onKeypress=(event)=>{
	const {name,value}=event.target;
	console.log(value);
	console.log(name);
	
	if(name==="name" && value.length<5){
	
	}
	else{
	console.log("invalid");
	}
	
  	if (name==="email" && value.length>6){
		console.log("valid");
     }
	{
	console.log("invalid");
	}
}


</script>
</body>
</html>