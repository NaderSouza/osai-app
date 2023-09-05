// $('#formRegister').addEventListener('submit', onRegister)

// function onRegister(e) {

// 	e.preventDefault();

// 	const user = {
// 		name: $('#name').value,
// 		surname: $('#surname').value,
// 		email: $('#email').value,
// 		password: $('#password').value,
// 		city: $('#city').value,
// 		date: $('#date').value,
// 		phone: $('#phone').value,
// 		cpf: $('#cpf').value
// 	}

// 	localStorage.setItem('user', JSON.stringify(user))
// 	window.location.replace('index.html')
// }

function $(selector) {
return document.querySelector(selector)
}
