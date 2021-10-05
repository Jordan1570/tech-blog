const PostFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();

    // Gather the data from the form elements on the page
    const title = document.querySelector('postTitle').value.trim();
    const content = document.querySelector('postContent').value.trim();

    if (title && content) {
        // Send the title and content to the server
        const response = await fetch('/api/posts', {
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
    .querySelector('.postTitle')
    .querySelector('.postContent')
    .addEventListener('submit', PostFormHandler);