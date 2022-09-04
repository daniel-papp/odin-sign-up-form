const signUpForm = document.getElementById('signup-form');
const submitButton = document.getElementById('signup-btn');


signUpForm.addEventListener('submit', (e) => comparePasswords(e));

function comparePasswords(event) {
    const password = document.getElementById('user_password').value;
    const confirmPassword = document.getElementById('user_confirmpassword').value;
    if (password !== confirmPassword) {
        event.preventDefault();
        console.log('Passwords not matching');
        document.getElementById('user_confirmpassword').value = '';
        document.getElementById('user_confirmpassword').focus();
        document.getElementById('user_confirmpassword').removeAttribute('placeholder');
    }
}