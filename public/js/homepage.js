const getBlog = async (event) => {
  const blogId = event.currentTarget.id;

  document.location.replace(`/blog/${blogId}`);
};

document.querySelectorAll('.card').forEach((element) => {
  element.addEventListener('click', getBlog);
});

