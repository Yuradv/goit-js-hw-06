const categoriesEl = document.querySelectorAll('ul#categories .item');
console.log('Number of categoris: ', categoriesEl.length);

let categoriesElements = '';
categoriesEl.forEach(element => {
    categoriesElements += `Category: ${
        element.querySelector('.item>h2').textContent
    } \nElements: ${element.querySelectorAll('.item>ul>li').length} \n \n`;
});
console.log(categoriesElements);
