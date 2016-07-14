$(document).ready(function() {
	$("#signup-form").bootstrapValidator({
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      username: {
        validators: {
          notEmpty: {
            message: 'Username is required'
          },
          stringLength: {
            min: 8,
            message: 'Username must be at least 8 characters long'
          }
        }
      },
      email: {
        validators: {
          notEmpty: {
            message: 'Email is required'
          },
          emailAddress: {
            message: 'Email address is not valid'
          }
        }
      },
      password: {
        validators: {
          notEmpty: {
            message: 'Password is required'
          },
          stringLength: {
            min: 8,
            message: 'Password must be at least 8 characters long'
          },
          regexp: {
            regexp: /(?=.*[0-9])(?=.*[a-z])(?=.*[!@#$%^&*+-/])([a-zA-Z0-9!@#$%^&**+-/]{8,})/,
            message: 'Password should contain atleast 1 digit and 1 special character'
          }
        }
      },
      confirmPassword: {
        validators: {
          notEmpty: {
            message: 'Password confirmation required'
          },
          identical: {
            field: 'password',
            message: 'Passwords do not match. Try again'
          }
        }
      }
    },
  }).on('success.form.bv', function (e) {
    e.preventDefault();
    if(!alert("Signup successful!")) {
      window.location.reload();
    }
  });
});