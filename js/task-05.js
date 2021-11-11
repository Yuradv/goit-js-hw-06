const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.input = event.currentTarget.value;

    refs.input !== ' ' ? (refs.output.innerText = refs.input) : 'незнакомец';
}
