const signUpForm = document.getElementById('signup-form');
const submitButton = document.getElementById('signup-btn');


submitButton.addEventListener('click', (e) => comparePasswords(e));

function comparePasswords(event) {
    const password = document.getElementById('user_password').value;
    const confirmPassword = document.getElementById('user_confirmpassword').value;
    console.log(password);
    console.log(confirmPassword);
    if (password !== confirmPassword) {
        event.preventDefault();
        console.log('Passwords not matching');
    }
}