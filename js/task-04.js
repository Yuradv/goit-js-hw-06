let counterValue = 0;

let valueEl = document.querySelector('#value');
const increaseBtn = document.querySelector('button[data-action="increment"');
const decreaseBtn = document.querySelector('button[data-action="decrement"');

increaseBtn.addEventListener('click', OnIncreaseCounterValue);
decreaseBtn.addEventListener('click', OnDecreaseCounterValue);

function OnIncreaseCounterValue() {
    counterValue += 1;
    valueEl.textContent = counterValue;
}

function OnDecreaseCounterValue() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}

valueEl.textContent = counterValue;
