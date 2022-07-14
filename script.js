const fieldEmail = document.getElementById('fieldEmail');
const fieldSenha = document.getElementById('fieldSenha');
const btnLogin = document.getElementById('btn-login');
const submitBtn = document.getElementById('submit-btn');
const submitCheck = document.getElementById('agreement');

submitCheck.addEventListener('click', () => {
  if (submitCheck.checked === true) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', '');
  }
});

btnLogin.addEventListener('click', (e) => {
  e.preventDefault();
  if (fieldEmail.value === 'tryber@teste.com' && fieldSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
