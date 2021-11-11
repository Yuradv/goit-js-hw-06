const categoriesEl = document.querySelectorAll('ul#categories .item');
console.log('Number of categoris: ', categoriesEl.length);

//
const categoriesElements = [];
categoriesEl.forEach(element => {
    categoriesElements.push(
        `Category: ${element.querySelector('.item>h2').textContent}, Element: ${
            element.querySelectorAll('.item>ul>li').length
        }`,
    );
});

console.log(...categoriesElements);
