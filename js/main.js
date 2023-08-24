const inputs = document.querySelectorAll(".input");


function addcl() {
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl() {
	let parent = this.parentNode.parentNode;
	if (this.value == "") {
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

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
