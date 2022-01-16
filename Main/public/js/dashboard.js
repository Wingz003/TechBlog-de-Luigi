const showNewPost = () => {
    document.getElementById('newPost').removeAttribute('hidden');
}


const newFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form

    const title = event.target.querySelector('#post-title').value.trim();
    const content = event.target.querySelector('#post-content').value.trim();

    if (title && content) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/blog', {
            method: 'POST',
            body: JSON.stringify({ title: title, text_content: content }),
            headers: { 'Content-Type': 'application/json' },
        });
        document.location.replace('/dashboard');
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
    if(event.target.className !== 'card-header') {
        return;
    }
    const blogId = event.currentTarget.id;
    
    document.querySelectorAll('.update').forEach((element) => {
        element.setAttribute('hidden', true);
    });
    document.getElementById(`${blogId}edit`).removeAttribute('hidden');
};

document.querySelectorAll('.card').forEach((element) => {
    element.addEventListener('click', getBlog);
});

document.querySelectorAll('.update-post-form').forEach((element) => {
    element.addEventListener('submit', async (event) => {

        event.preventDefault();
        let id = event.target.id;
        if (event.submitter.name === "update") {
            const response = await fetch(`/api/blog/${id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    title: event.target.querySelector("#post-title").value,
                    text_content: event.target.querySelector("#post-content").value
                }),
                headers: { 'Content-Type': 'application/json' },
            });
        } else if (event.submitter.name === "delete"){
            const response = await fetch(`/api/blog/${id}`, {
                method: 'DELETE',

                headers: { 'Content-Type': 'application/json' },
            });
        }
        document.location.replace('/dashboard');
    })
});

// make separate handlebars for updating a post on dashboard.
// need new homeroutes for dashboard /blog/update/:blogId
// too many submit buttons (need a unique form id)
