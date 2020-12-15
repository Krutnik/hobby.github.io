let text1 = document.querySelector('.blok__text__a__h2');
let text2 = document.querySelector('.blok__text__b__h2');


text1.oninput = function() {
    text2.classList.add('hidden')
}

text2.oninput = function () {
    text1.classList.add{'hidden'}
}