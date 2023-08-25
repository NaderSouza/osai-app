$('#formRegister').addEventListener('submit', onRegister)

function onRegister(e) {
  e.preventDefault()

  const user = {
    name: $('#name').value,
    surname: $('#surname').value,
    email: $('#email').value,
    password: $('#password').value,
    city: $('#city').value,
    date: $('#date').value,
    phone: $('#phone').value,
    cpf: $('#cpf').value
  }

  localStorage.setItem('user', JSON.stringify(user))
  window.location.replace('index.html')
}

function $(selector) {
  return document.querySelector(selector)
}

let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', () => {
  let inputPassword = document.querySelector('#senha');

  if (inputPassword.getAttribute('type') == 'password') {
    inputPassword.setAttribute('type', 'text');
  } else {
    inputPassword.setAttribute('type', 'password');
  }
});



// Função para formatar a date com as barras automaticamente
function formatarData(date) {
  date = date.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

  if (date.length <= 2) {
    return date;
  } else if (date.length <= 4) {
    return date.slice(0, 2) + '/' + date.slice(2);
  } else {
    return date.slice(0, 2) + '/' + date.slice(2, 4) + '/' + date.slice(4, 8);
  }
}

// Adicione um ouvinte de evento para o campo de date
const dateInput = document.getElementById('date'); // Substitua pelo ID correto do seu campo de date

dateInput.addEventListener('input', function() {
  const formatteddate = formatarData(dateInput.value);
  dateInput.value = formatteddate;
});

// Função para formatar o número de phone com DDD de forma correta
function formatarCelular(phone) {
  phone = phone.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

  if (phone.length <= 2) {
    return phone;
  } else if (phone.length <= 6) {
    return '(' + phone.slice(0, 2) + ') ' + phone.slice(2);
  } else if (phone.length <= 10) {
    return '(' + phone.slice(0, 2) + ') ' + phone.slice(2, 6) + '-' + phone.slice(6);
  } else {
    return '(' + phone.slice(0, 2) + ') ' + phone.slice(2, 7) + '-' + phone.slice(7, 11);
  }
}

// Adicione um ouvinte de evento para o campo de número de phone
const phoneInput = document.getElementById('phone'); // Substitua pelo ID correto do seu campo de número de phone

phoneInput.addEventListener('input', function() {
  const formattedphone = formatarCelular(phoneInput.value);
  phoneInput.value = formattedphone;
});

// Função para formatar o CPF com os pontos 
function formatarCPF(cpf) {
  cpf = cpf.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

  if (cpf.length <= 3) {
    return cpf;
  } else if (cpf.length <= 6) {
    return cpf.slice(0, 3) + '.' + cpf.slice(3);
  } else if (cpf.length <= 9) {
    return cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6);
  } else {
    return cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9, 11);
  }
}

// Adicione um ouvinte de evento para o campo de CPF
const cpfInput = document.getElementById('cpf'); // Substitua pelo ID correto do seu campo de CPF

cpfInput.addEventListener('input', function() {
  const formattedCPF = formatarCPF(cpfInput.value);
  cpfInput.value = formattedCPF;
});
