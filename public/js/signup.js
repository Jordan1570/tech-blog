const signUpBtn = document.getElementById('signUpBtn')

signUpBtn.addEventListener("click", function () {

    if (response.ok) {
        document.location.replace('/signup');
    } else {
        console.log('signing up instead');
    }
});

