const loginFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();

    // Gather the data from the form elements on the page
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        // Send the e-mail and password to the server
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in');
        }
    }
};

// // grabbing login up btn in login hbs
// const loginBtn = document.getElementById('loginBtn')

// loginBtn.addEventListener("click", function () {

//     if (response.ok) {
//         document.location.replace('/dashboard');
//     } else {
//         console.log('Logged In Successfully');
//     }
// });

// grabbing sign up btn in signup hbs
const signUpBtn = document.getElementById('signUpBtn')

signUpBtn.addEventListener("click", function () {

    if (response.ok) {
        document.location.replace('/signup');
    } else {
        console.log('signing up instead');
    }
});

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

// document
//     .getElementById('navLogin')
//     .addEventListener('click', function() {
//         document.location.replace('/login');
//     })

