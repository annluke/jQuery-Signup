$(document).ready(function() {
	$("#signup").click(function() {
		var name = $("#name-id").val();
		var email = $("#email-id").val();
		var password = $("#pass-id").val();
		var cpassword = $("#confirm-pass-id").val();
		if (name == '' || email == '' || password == '' || cpassword == '') {
		alert("Please fill all the fields");
		} else if ((name.length) < 8) {
			alert("Username should have atleast 8 characters");
		} else if (!/\S+@\S+\.\S+/.test(email) ){
			alert("Invalid email-id");
		} else if (!/(?=.*[0-9])(?=.*[a-z])(?=.*[!@#$%^&*+-/])([a-zA-Z0-9!@#$%^&**+-/]{8,})/.test(password)) {
			alert("Password should have atleast 8 characters with atleast 1 digit and 1 special character");
		} else if (!(password === cpassword)) {
			alert("Your passwords don't match. Try again");
		} else {
			alert("Sign up successful!");
		}
	});
});