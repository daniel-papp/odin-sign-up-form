const signUpForm = document.getElementById('signup-form');
const submitButton = document.getElementById('signup-btn');

signUpForm.addEventListener('submit', (e) => comparePasswords(e));
submitButton.addEventListener('click', () => checkMissingNames());

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

function checkMissingNames() {
    if (!document.getElementById('user_firstname').checkValidity()) {
        document.getElementById('user_firstname').removeAttribute('placeholder');
    }
    if (!document.getElementById('user_lastname').checkValidity()) {
        document.getElementById('user_lastname').removeAttribute('placeholder');
    }
}