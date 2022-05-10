const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  const clientemail = event.currentTarget.elements;
  console.log(clientemail);

  if (email.value === '' || password.value === '') {
    return alert('All fields must be filled');
  }
  const dataResult = {
    email: email.value,
    password: password.value,
  };

  console.log(dataResult);
  event.currentTarget.reset();
}
