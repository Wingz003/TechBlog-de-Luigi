const showNewPost = () => {
    document.getElementById('newPost').removeAttribute('hidden');
}


const newFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    if (title && content) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/blog', {
            method: 'POST',
            body: JSON.stringify({ title: title, text_content: content }),
            headers: { 'Content-Type': 'application/json' },
        });

    }
};

try {
    document
        .getElementById('new-post-form')
        .addEventListener('submit', newFormHandler);
} catch (error) {
    console.error(error);
}

const getBlog = async (event) => {
    const blogId = event.currentTarget.id;

    document.getElementById(`${blogId}edit`).removeAttribute('hidden');
};

document.querySelectorAll('.card').forEach((element) => {
    element.addEventListener('click', getBlog);
});

document.getElementById('')

// make separate handlebars for updating a post on dashboard.
// need new homeroutes for dashboard /blog/update/:blogId
// too many submit buttons (need a unique form id)