const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onCheckForm);

function onCheckForm(event) {
    event.preventDefault();

    const {
        elements: { email, password },
    } = event.currentTarget;

    const formList = {};

    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!');
    } else {
        formList[`${email.name}`] = `${email.value}`;
        formList[`${password.name}`] = `${password.value}`;
    }
    console.log(formList);

    event.currentTarget.reset();
}
