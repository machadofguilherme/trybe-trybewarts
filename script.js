function validacaoLogin() {
  const campoEmail = document.querySelector('input#fieldEmail');
  // const campoSenhaTexto = document.querySelector('input#fieldSenha').value;
  // const senha = parseInt(campoSenhaTexto, 10);
  // if (campoEmail === 'tryber@teste.com' && senha === 123456) {
  //   alert('Olá, Tryber!');
  // } else {
  //   alert('Email ou senha inválidos.');
  // }
  console.log(campoEmail.value);
  // console.log(senha);
}
const botaoLogin = document.querySelector('button#btn-login');
botaoLogin.addEventListener('click', validacaoLogin);
