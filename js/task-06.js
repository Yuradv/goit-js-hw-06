let inputEl = document.querySelector('#validation-input');
let lengthEl = inputEl.dataset.length;

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
    let text = inputEl.value.length;

    if (text == lengthEl) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
}
