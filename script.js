$(document).ready(function() {
	$("#signup").click(function() {
		$.validator.addMethod("passwordCheck", function (value, element) {
        return /(?=.*[0-9])(?=.*[a-z])(?=.*[!@#$%^&*+-/])([a-zA-Z0-9!@#$%^&**+-/]{8,})/.test(value);
    });
		$("#signup-form").validate({
      rules: {
        username: {
        	required: true,
          minlength: 8
        },
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 8,
          passwordCheck: true
        },
        confirmPassword: {
        	required: true,
        	equalTo: "#pass-id"
        }
      },
      messages: {
        name: {
        	required: "Please enter username",
        	minlength: "Username must be at least 8 characters long"
        },
        email: {
        	required: "Please enter email address",
        	email: "Please enter a valid email address"
        },
        password: {
          required: "Please provide a password",
          minlength: "Password must be at least 8 characters long",
          passwordCheck: "Password should contain atleast 1 digit and 1 special character"
        },
        confirmPassword: {
          required: "Please confirm password",
          equalTo: "Passwords do not match"
        }
      },
      submitHandler: function() {
      	alert("Signup successful!");
      }
    });
	});
});