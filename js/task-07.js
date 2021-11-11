const textEl = document.querySelector('#text');
const inputEl = document.querySelector('#font-size-control');

inputEl.addEventListener('input', onInputChange);

function onInputChange() {
    const size = inputEl.value;

    textEl.style.fontSize = size + 'px';
}
