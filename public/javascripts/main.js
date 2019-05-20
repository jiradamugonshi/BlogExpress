function deleteBlog(id) {
  if (window.confirm("Are you sure to delete this blog?")) {
    fetch('/blogs/:id/delete', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'id': id
      })
    })
      .then(res => {
        window.location.reload(true)
      })
  }
}

function updateBlog(id) {
  let name = document.getElementById("name").value;
  let blogue = document.getElementById("blogue").value;
  fetch('/blogs/:id/update', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      'id': id,
      'name': name,
      'blogue': blogue
    })
  }).then(res => res.text())          // convert to plain text
    .then(text => console.log(text))
    .then(data => {
      window.location.reload(true)
    })
}