function redirectToSignIn() {
    window.location.href = "signup.html"; // Redirect to sign-in page
}

function submitForm() {
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var fullName = firstName + ' ' + lastName;
    alert(fullName + ", thank you for signing up, have fun shopping babes!!!");
}

