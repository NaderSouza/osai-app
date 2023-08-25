$('#formLogin').addEventListener('submit', onSubmit)

function onSubmit(e) {
  e.preventDefault()

  const user = {
    username: $('#username').value,
    password: $('#password').value
  }

  localStorage.setItem('user', JSON.stringify(user))
  window.location.replace('index.html')
}

function $(selector) {
  return document.querySelector(selector)
}
