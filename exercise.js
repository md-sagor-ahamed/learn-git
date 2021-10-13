// Exercise-1 (Try to create following structure by using Dom properties and method)
//=====================================================================================
const body = document.body;
const div = document.createElement("div");
div.className = "container";
div.id = "container";
const h1 = document.createElement("h1");
h1.innerHTML = "Product List";
const ul = document.createElement("ul");
ul.className = "product-collection mb3";

const li = document.createElement("li");
li.className = "product-collection-item"
li.id = "sample";
li.innerHTML = "Shoes";

body.appendChild(div);
div.appendChild(h1);
div.appendChild(ul);
ul.appendChild(li);
console.log(div);



const creatLi = document.querySelector('.mainLi');
const createUl = document.querySelector('.mainUl');
const createContainer = document.querySelector('.container');
li.addEventListener('click', (evt) =>{
    console.log(evt.target)
})
creatLi.addEventListener('click', (evt) =>{
    console.log("you clicked li")
})
createContainer.addEventListener('click', (evt) =>{
    console.log("you clicked li")
})

const form = document.forms[0];
const input = document.querySelector(".input");
const submit = document.querySelector(".submit");
const findLi = document.querySelector(".mainLi");
const findUl = document.querySelector(".mainUl");

function ieventInfo(evt){
    evt.preventDefault();
    const findLi = document.createElement('li');
    findLi.textContent = input.value;
    findLi.classList.add = 'mainLi';
    createUl.appendChild(findLi);
}
