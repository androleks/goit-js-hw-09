const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormInput() {
  const data = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  saveToLS(STORAGE_KEY, data);
}

function onFormSubmit(e) {
  e.preventDefault();
  const data = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  if (data.email && data.message) {
    console.log(data);
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
  } else {
    alert('Check input!');
  }
}

function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLS(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return null;
  }
}

function restoreData() {
  const objInput = loadFromLS(STORAGE_KEY) || {};
  form.elements.email.value = objInput.email || '';
  form.elements.message.value = objInput.message || '';
}

restoreData();