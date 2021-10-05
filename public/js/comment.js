const commentFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();

    // Gather the data from the form elements on the page
    const title = document.querySelector('postComment').value.trim();

    if (title && content) {
        // Send the title and content to the server
        const response = await fetch('/api/comment/post/:id/', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Error');
        }
    }
};

document
    .querySelector('.postComment')
    .addEventListener('submit', PostFormHandler);
