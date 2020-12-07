"use strict";

const list = document.getElementById("list"),

    addButton = document.querySelector(".button-add"),

    removeButton = document.querySelector(".button-remove");

let selectedTarget = null;


addButton.addEventListener("click", addLiElement);

removeButton.addEventListener("click", removeSelectedLiElement);

list.addEventListener("click", function (event){
    const currentTarget = event.target.closest(".li-element");

    if (!currentTarget) return;

    if (selectedTarget === currentTarget) {

        deleteActiveElement();

        selectedTarget = null;

    } else {
        
        deleteActiveElement();

        selectedTarget = currentTarget;

        selectedTarget
        .classList
        .add('li-element_active');
    }
});


function addLiElement() {
    const input = document.querySelector(".input");

    if (input.value === ' ') return;

    const newLiElement = list.innerHTML,
        newListItem = `<li class="li-element">${input.value}</li>`;

    list.innerHTML = newLiElement + newListItem;

    input.value = ' ';

    deleteActiveElement();
}

function removeSelectedLiElement() {
    if (!selectedTarget) return;

    selectedTarget.remove();
    selectedTarget = null;
}

function deleteActiveElement() {
    document
        .querySelector('.li-element_active')
        ?.classList
        .remove('li-element_active');
}

