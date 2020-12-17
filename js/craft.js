// новое окно
let btnNewWindow = document.querySelector('.head__btn');
let hidden = document.querySelector('.hidden');
let test;


btnNewWindow.onclick = function () {
    if(hidden.classList.contains('hidden')) {
        hidden.classList.remove('hidden');
    }
    else {
        hidden.classList.add('hidden');
    }
}