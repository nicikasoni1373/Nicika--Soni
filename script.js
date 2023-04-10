document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    clearErrors();
    validateForm();
});

function clearErrors() {
document.getElementById('fullNameError').textContent = '';
document.getElementById('emailError').textContent = '';
document.getElementById('passwordError').textContent = '';
document.getElementById('confirmPasswordError').textContent = '';
}

function validateForm() {
let fullName = document.getElementById('fullName').value;
let email = document.getElementById('email').value;
let phoneNumber = document.getElementById('phonenumber');
let password = document.getElementById('password').value;
let confirmPassword = document.getElementById('confirmPassword').value;

let namePattern = /^[a-zA-Z ]{5,}$/;
let emailPattern = /\S+@\S+\.\S+/;
let phoneNumberPattern = /^(?!123456789)\d{10}$/;
let passwordPattern = /^(?!.*password)[a-zA-Z0-9!@#$%^&*]{8,}$/;

if (!namePattern.test(fullName)) {
    document.getElementById('fullNameError').textContent = 'Enter a valid full name (at least more than 5 character)';
}

if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Enter a valid email address(Id should have @ character in it)';
}

if (!phoneNumberPattern.test(phoneNumber)){
    document.getElementById('numberError').textContent = 'Enter a valid phone number (should not contain 123456789 and must be a 10-digit number)';
}

if (!passwordPattern.test(password)) {
    document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long and should not contain "password" or "name of the user"';
}

if (confirmPassword !== password) 
    document.getElementById('confirmPasswordError').textContent = 'Password and Confirm password should match'
}

if  (condition) {
    condition
} {
    // If there is any error, prevent form submission
    if (isError) {
        document.getElementById('Error').textContent = '"Email not valid" or "Password is not strong"  '
        return;
}
}
// If all validations pass, submit the form
   { document.getElementById('myForm').submit();
}


