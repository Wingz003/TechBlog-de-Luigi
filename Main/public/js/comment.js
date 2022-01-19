const commentFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form

  const comment = document.querySelector('#comment-text').value.trim();
  const blogId = event.currentTarget.id;
  const userName = event.currentTarget.name;
  if (comment) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({ comment: comment, blog_id: blogId, userName: name }), // find blog id via handlebars or other source
      headers: { 'Content-Type': 'application/json' },
    });
    document.location.replace(`/blog/${blogId}`);
  }

};

try {
  document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);
} catch {

}