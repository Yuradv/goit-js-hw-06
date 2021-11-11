const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

ingredients.map(ingredient => {
    const element = document.createElement('li');
    element.textContent = `${ingredient}`;
    element.className = 'item';
    ingredientsEl.append(element);
});
