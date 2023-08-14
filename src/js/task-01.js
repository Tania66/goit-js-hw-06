const allCategoryEl = document.querySelector('#categories');
const titleCategoriEl = document.querySelector('.item');
const itemCategoriEl = document.querySelector('.item > ul');



Array.of(allCategoryEl.children).forEach(function(elem) {
console.log("Number of categories:",  elem.length);
})

console.log("Category :", titleCategoriEl.firstElementChild.innerHTML);

Array.of(itemCategoriEl.children).forEach(function(elem) {
    console.log("Elements:" , elem.length);
    })
    




console.log("Category :", allCategoryEl.children[1].firstElementChild.innerHTML);

Array.of(allCategoryEl.children[1].lastElementChild.children).forEach(function(elem) {
        console.log("Elements:" , elem.length);
    })
        




console.log("Category :", allCategoryEl.children[2].firstElementChild.innerHTML);

Array.of(allCategoryEl.children[2].lastElementChild.children).forEach(function(elem) {
            console.log("Elements:" , elem.length);
        })
            
    
    