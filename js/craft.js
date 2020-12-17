// новое окно
let btnNewWindow = document.querySelector('.head__btn');
let hidden = document.querySelector('.hidden');
let test;
let main = document.getElementById('main')


btnNewWindow.onclick = function () {
    if(hidden.classList.contains('hidden')) {
        hidden.classList.remove('hidden');
        document.body.classList.add('opacity');
    }
    else {
        hidden.classList.add('hidden');
        document.body.classList.remove('opacity');
    }
}