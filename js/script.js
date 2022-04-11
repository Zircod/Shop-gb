//MENU-burger display-block
let burger = document.getElementById('burger');
let navigation = document.getElementById('menu');
let close = document.getElementById('close')
//elem.classList.toggle("class") – добавить класс, если его нет, иначе удалит.

burger.addEventListener('click', function(){
    navigation.classList.toggle('header__nav--show');
});

close.addEventListener('click', function(){
    navigation.classList.toggle('header__nav--show');
});

//HEADER SEARCH FORM display-block
let search_btn = document.getElementById('search-btn');
let search_form = document.getElementById('search-form');
search_btn.addEventListener('click', function(){
    search_form.classList.toggle('header__nav--show');
});

//SHOPPING ITEM CLOSE display-none
let close_card_1 = document.getElementById('close_card_1');
let shopping__item_1 = document.getElementById('shopping__item_1');
close_card_1.addEventListener('click', function(){
    shopping__item_1.classList.toggle('shopping__item--none');
});

let close_card_2 = document.getElementById('close_card_2');
let shopping__item_2 = document.getElementById('shopping__item_2');
close_card_2.addEventListener('click', function(){
    shopping__item_2.classList.toggle('shopping__item--none');
});