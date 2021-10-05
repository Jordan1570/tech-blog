const commentFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();

    // Gather the data from the form elements on the page
    const comment = document.querySelector('postComment').value.trim();

    if (comment) {
        // Send the title and content to the server
        const response = await fetch('/api/comment/post/:id/', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Error');
        }
    }
};

document
    .querySelector('.postComment')
    .addEventListener('submit', PostFormHandler);
