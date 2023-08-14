
const form =  document.querySelector('.login-form');


form.addEventListener('submit', onSubmit);
const formData = {};

function onSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;

  if (email.value === '' || password.value === '') {
    alert('Всі поля повинні бути заповнені!');
  } else {
    formData.email = email.value;
    formData.password = password.value;

    console.log(formData);
  }
  event.currentTarget.reset();
}
