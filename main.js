'use strict';

let size = 10;
let orderElement = 1; // number pour li

// fonction init , create code
const init = () => {
    const btn = document.createElement('button');
    const btnReset = document.createElement('button');
    btn.textContent = "Dodaj 10 elementow do listy";
    btnReset.textContent = "Reset";
    btn.style.fontSize = "28px";
    btn.style.width = "300px";
    btn.style.height = "80px";
    btnReset.style.fontSize = "28px";
    btnReset.style.width = "500px";
    btnReset.style.height = "80px";
    document.body.appendChild(btn);
    document.body.appendChild(btnReset);
    const ul = document.createElement('ul');
    ul.style.listStyle = "none";
    document.body.appendChild(ul);
    btn.addEventListener('click', createLiElements);
    btnReset.addEventListener('click', cleanList);
}

// fonction pour EventListener
const createLiElements = () => {

    for (let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        li.textContent = `Element numer ${orderElement++}`;
        li.style.fontSize = `${size++}px`;
        li.style.color = "red";
        document.querySelector('ul').appendChild(li);
    }
}


const cleanList = () => {
    document.querySelector('ul').textContent = ""; // reset 
    size = 10;
    orderElement = 1;
}
init();