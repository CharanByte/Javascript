<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Registration Form</title>
    <script>
        // Function to validate each field and enable/disable the register button
        function validateForm() {
            let isFormValid = true;

            // Validate each field
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let phone = document.getElementById("phone").value;
            let password = document.getElementById("password").value;

            // Name validation: not empty and should be more than 3 characters
            if (name.length < 3) {
                isFormValid = false;
                document.getElementById("nameError").innerText = "Name must be at least 3 characters.";
            } else {
                document.getElementById("nameError").innerText = "";
            }

            // Email validation: basic regex check
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                isFormValid = false;
                document.getElementById("emailError").innerText = "Enter a valid email.";
            } else {
                document.getElementById("emailError").innerText = "";
            }

            // Phone validation: must be 10 digits
            const phonePattern = /^\d{10}$/;
            if (!phonePattern.test(phone)) {
                isFormValid = false;
                document.getElementById("phoneError").innerText = "Enter a valid 10-digit phone number.";
            } else {
                document.getElementById("phoneError").innerText = "";
            }

            // Password validation: minimum 6 characters
            if (password.length < 6) {
                isFormValid = false;
                document.getElementById("passwordError").innerText = "Password must be at least 6 characters.";
            } else {
                document.getElementById("passwordError").innerText = "";
            }

            // Enable or disable the register button based on form validity
            document.getElementById("registerBtn").disabled = !isFormValid;
        }

        // Call validateForm function on input in any field
        function onInputChange() {
            validateForm();
        }
    </script>
</head>
<body>
    <h2>Registration Form</h2>

    <!-- Display success or error message -->
    <%
        String message = (String) request.getAttribute("message");
        String messageColor = (String) request.getAttribute("messageColor");
        if (message != null) {
    %>
        <p style="color: <%= messageColor %>;"><%= message %></p>
    <% } %>

    <form id="registrationForm" action="RegistrationServlet" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" oninput="onInputChange()">
        <span id="nameError" style="color: red;"></span>
        <br><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" oninput="onInputChange()">
        <span id="emailError" style="color: red;"></span>
        <br><br>

        <label for="phone">Phone:</label>
        <input type="text" id="phone" name="phone" oninput="onInputChange()">
        <span id="phoneError" style="color: red;"></span>
        <br><br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" oninput="onInputChange()">
        <span id="passwordError" style="color: red;"></span>
        <br><br>

        <button type="submit" id="registerBtn" disabled>Register</button>
    </form>
</body>
</html>
