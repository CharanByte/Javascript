<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f7f7f7;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            width: 100%;
        }
        .container h2 {
            margin-bottom: 20px;
            font-size: 24px;
            color: #333;
        }
        .container input[type="email"],
        .container input[type="password"],
        .container input[type="text"] {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        .container input[type="checkbox"] {
            margin-right: 10px;
        }
       /* .container .register-btn {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        .container .register-btn:hover {
            background-color: #0056b3;
        }
        */
        .container .help-text {
            display: block;
            margin-top: 10px;
            text-align: center;
        }
        .container .language-selector {
            margin-top: 20px;
            text-align: center;
        }
        .container .language-selector select {
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Register</h2>
        <form action="/register" method="post">
            <input type="email" name="email" placeholder="Email" id="e" required onblur="validData(event)">
            <span id="emailvalid"></span>
            <input type="password" name="password" placeholder="Password" id="pas" required onblur="validData(event)">
            <span id="passwordvalid"></span>
            <input type="password" name="confirm_password" id="con" placeholder="Confirm password" required onblur="validData(event)">
            <span id="conpasswordvalid"></span>
            <input type="text" name="first_name" placeholder="First name" id="f" required onblur="validData(event)">
            <span id="firstnamevalid"></span>
            <input type="text" name="last_name"   placeholder="Last name" id="l" required onblur="validData(event)">
            <span id="lastnamevalid"></span>
            <div>
                <input type="checkbox" name="keep_signed_in">
                <label for="keep_signed_in">Keep me signed in</label>
            </div>
            <button type="submit" class="register-btn" disabled id="button">Register</button>
            <div class="help-text">
                <a href="/login">Return to login</a>
            </div>
            <div class="language-selector">
                <select name="language">
                    <option value="en">English</option>
                    <!-- Add more language options as needed -->
                </select>
            </div>
        </form>
    </div>
    <script>
    
    var valid={};
    const validData=(event)=>{
    	const {name,value}=event.target;
    	if(name==="email" && value.includes("@gmail.com")){
    		console.log("valid email");
    		document.getElementById("emailvalid").innerHTML="<span style='color:green'}> Email Valid</span>"
    	}
    	else if(name==="email" && !value.includes("@gmail.com")){
    	console.log("email not valid");
    	document.getElementById("emailvalid").innerHTML="<span style='color:red'}> Email Not Valid</span>"
    	}
    	
    	
    	if(name==="password" && value.length>=5){
    		console.log("valid Password");
    		document.getElementById("passwordvalid").innerHTML="<span style='color:green'}> Password Valid</span>"
    	}
    		
    	else if(name==="password" && value.length<5){
    	console.log("password not valid");
    	document.getElementById("passwordvalid").innerHTML="<span style='color:red'}> Password Not Valid</span>"
    	}
    	
    	
    	if(name==="confirm_password" && value===document.getElementById("pas").value){
    		console.log("valid Conform Password");
    		document.getElementById("conpasswordvalid").innerHTML="<span style='color:green'}>Conform Password Valid</span>"
    	}
    		
    	else if(name==="confirm_password" && value!==document.getElementById("pas").value){
    	console.log("Conform password not valid");
    	document.getElementById("conpasswordvalid").innerHTML="<span style='color:red'}>Conform Password Not Valid</span>"
    	}
    	
    	if(name==="first_name" && value.length>=4){
    		console.log("first_name Password");
    		document.getElementById("firstnamevalid").innerHTML="<span style='color:green'}>firstname Valid</span>"
    	}
    		
    	else if(name==="first_name" && value.length<4){
    	console.log("first_name not valid");
    	document.getElementById("firstnamevalid").innerHTML="<span style='color:red'}>firstname Not Valid</span>"
    	}
    	
    	if(name==="last_name" && value.length>=1){
    		console.log("last_name Password");
    		document.getElementById("lastnamevalid").innerHTML="<span style='color:green'}>lastname Valid</span>"
    	}
    		
    	else if(name==="last_name" && value.length<1){
    	console.log("last_name not valid");
    	document.getElementById("lastnamevalid").innerHTML="<span style='color:red'}>lastname Not Valid</span>"
    	}
    	
    	valid={...valid,
    	[name]:value		
    	}
    	
    	console.log(Object.keys(valid).length)
    	
    	let buttonDes=document.getElementById("button");
    	
    	if(Object.keys(valid).length===5 && (document.getElementById("f").value.length>=4) && (document.getElementById("l").value.length>=1) && (document.getElementById("e").value.includes("@gmail.com")) && (document.getElementById("pas").value.length>=5)) {
    		buttonDes.removeAttribute("disabled");
    	}
    	else{
    		
    		buttonDes.setAttribute("disabled", "");
    	}
    	
    }
    
    	
    </script>
    
    
</body>
</html>

