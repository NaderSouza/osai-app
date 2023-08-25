$('#formLogin').addEventListener('submit', onSubmit)

function onSubmit(e) {
  e.preventDefault()

  const user = {
    cpf: $('#cpf').value,
    password: $('#password').value
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


