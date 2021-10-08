const signupFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();

    // Gather the data from the form elements on the page
    const username = document.getElementById('signUpUsernameInput').value.trim();
    const password = document.getElementById('signUpPasswordInput').value.trim();

    if (username && password) {
        // Send the e-mail and password to the server
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to log in');
        }
    }
};

document
    .querySelector('#submit-form')
    .addEventListener('submit', signupFormHandler);
