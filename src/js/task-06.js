
const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener("blur", onInputValueValid);


 
function onInputValueValid (){

if ((inputEl.value).length !=  inputEl.dataset.length) {
  inputEl.classList.add('invalid')
} else {
   inputEl.classList.add('valid')
   inputEl.classList.remove('invalid')
}

}