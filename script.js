const submitBtn = document.getElementById('submit-btn');
const submitCheck = document.getElementById('agreement');

submitCheck.addEventListener('click', () => {
  if (submitCheck.checked === true) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', '');
  }
});
