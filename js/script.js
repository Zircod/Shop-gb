//MENU
let button = document.getElementById('burger');

let navigation = document.getElementById('menu');

//let wrp = document.getElementById('wrp');

let close = document.getElementById('close')

//elem.classList.toggle("class") – добавить класс, если его нет, иначе удалить.
button.addEventListener('click', function(){
    navigation.classList.toggle('display-block');
    // wrp.classList.toggle('display-block');
});

close.addEventListener('click', function(){
    navigation.classList.toggle('display-block');
});

//HEADER SEARCH FORM
let search_btn = document.getElementById('search-btn')

let search_form = document.getElementById('search-form');

search_btn.addEventListener('click', function(){
    search_form.classList.toggle('display-block');
});