import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form  input'),
  textarea: document.querySelector('.feedback-form  textarea'),
};

const KEY_FORM = 'feedback-form-state';

refs.form.addEventListener('input', throttle(onFormInput, 500));

refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  obj[event.target.name] = event.target.value;

  localStorage.setItem(KEY_FORM, JSON.stringify(obj));
}

const localData = JSON.parse(localStorage.getItem(KEY_FORM));

let obj = localData || {};

if (localData) {
  refs.input.value = localData.email || '';
  refs.textarea.value = localData.message || '';
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log({ email: refs.input.value, message: refs.textarea.value });
  obj = {};
  refs.form.reset();
  localStorage.removeItem(KEY_FORM);
}
