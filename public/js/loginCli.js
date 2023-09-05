$('#formLogin').addEventListener('submit', onSubmit)

function onSubmit(e) {
  e.preventDefault();


  const xhr = new XMLHttpRequest();
	xhr.open("GET", '/login-cli?username=' + $('#username').value + '&password=' + $('#password').value);
	xhr.send();
	xhr.responseType = "json";
	xhr.onload = () => {

		if (xhr.readyState != 4 || xhr.status != 200)
		{
			window.location.replace('LoginCliErro.html');
			return;
		}

		var response = xhr.response;
		
		if (response.status != 'ok')
		{
			window.location.replace('LoginCliErro.html');
			return;
		}

		localStorage.setItem('user', response.user);
		window.location.replace('Solicitar.html');
		
	};
}

function $(selector) {
  return document.querySelector(selector)
}
