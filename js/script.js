class GameCard {
    #_src;
    #_alt;
    #_name;
    #_genre;
    #_developer;
    #_grade;
    #_category
    #_parent;

    constructor(src, alt, name, genre, developer, grade, category, parent) {
        
        this.src = src;
        this.alt = alt;
        this.name = name;
        this.genre = genre;
        this.developer = developer;
        this.grade = grade;
        this.category = category;
        this.parent = document.querySelector('.right-blok');
    }

    get src() {
        return this.#_src;
    }
    set src(srcValue) {
        this.#_src = srcValue;
    }

    get alt() {
        return this.#_alt;
    }
    set alt(altValue) {
        this.#_alt = altValue;
    }

    get name() {
        return this.#_name;
    }
    set name(nameValue) {
        this.#_name = nameValue;
    }

    get genre() {
        return this.#_genre;
    }
    set genre(genreValue) {
        this.#_genre = genreValue;
    }

    get developer() {
        return this.#_developer;
    }
    set developer(developerValue) {
        this.#_developer = developerValue;
    }

    get grade() {
        return this.#_grade;
    }
    set grade(gradeValue) {
        this.#_grade = gradeValue;
    }

    get category() {
        return this.#_category;
    }
    set category(categoryValue) {
        this.#_category = categoryValue;
    }

    get parent() {
        return this.#_parent;
    }
    set parent(parentValue) {
        this.#_parent = parentValue;
    }

    createCard() {
        let elem = document.createElement('div');
        elem.classList.add('card');
        elem.setAttribute('data-category', `${this.genre}`);
        elem.innerHTML = `
        
        <img class='card__image' src='${this.src}' alt='${this.alt}'>
        <h2 class='card__title'>${this.name}</h2>
        <p class='card__genre'>Genre: ${this.genre}</p>
        <p class='card__developer'>Developer: ${this.developer}</p>
        <p class='card__grade'>My mark: ${this.grade}</p>
        
        `;

        this.parent.append(elem);
    }
}

let cards = [
    {
        src: 'img/game/worldwarcraft.jpg',
        alt: 'World of warcraft',
        name: 'World Of Warcraft',
        genre: 'MMORPG',
        developer: 'Blizzard Entertainment',
        grade: '5/5',
        category: 'MMOPRG'
    },
    {
        src: 'img/game/wh40.jpg',
        alt: 'Warhammer 40000',
        name: 'Warhammer 40000',
        genre: 'RTS',
        developer: 'Relic Entertainment',
        grade: '4/5',
        category: 'RTS'
    },
    {
        src: 'img/game/civi6.jpg',
        alt: 'Civilizatin Vi',
        name: 'Civilizatin Vi',
        genre: 'TBS',
        developer: 'Firaxis Games',
        grade: '4.5/5',
        category: 'TBS'
    },
    {
        src: 'img/game/nhl.jpg',
        alt: 'NHL 21',
        name: 'NHL 21',
        genre: 'Simulator',
        developer: 'EA',
        grade: '5/5',
        category: 'Simulator'
    },
    {
        src: 'img/game/fifa.jpg',
        alt: 'FIFA 21',
        name: 'FIFA 21',
        genre: 'Simulator',
        developer: 'EA',
        grade: '5/5',
        category: 'Simulator'
    },
    {
        src: 'img/game/generals.jpg',
        alt: 'C&C: Generals',
        name: 'C&C: Generals',
        genre: 'RTS',
        developer: 'EA',
        grade: '5/5',
        category: 'RTS'
    },
    {
        src: 'img/game/korsar.jpg',
        alt: 'Корсары 3',
        name: 'Корсары 3',
        genre: 'PRG',
        developer: 'Акелла',
        grade: '3.5/5',
        category: 'PRG'
    },
    {
        src: 'img/game/mafia.jpg',
        alt: 'Mafia',
        name: 'Mafia',
        genre: 'TPS',
        developer: 'Illusion Softworks',
        grade: '4/5', 
        category: 'TPS'
    },
    {
        src: 'img/game/CoD.jpg',
        alt: 'Call of Duty: Modern Warfare',
        name: 'Call of Duty: Modern Warfare',
        genre: 'FPS',
        developer: 'Infinity Ward',
        grade: '4/5',
        category: 'FPS'
    },
    {
        src: 'img/game/nfs.jpg',
        alt: 'Need for Speed',
        name: 'Need for Speed',
        genre: 'Simulator',
        developer: 'EA',
        grade: '4.5/5',
        category: 'Simulator'
    },
    {
        src: 'img/game/diablo.jpeg',
        alt: 'Diablo',
        name: 'Diablo',
        genre: 'PRG',
        developer: 'Blizzard Entertainment',
        grade: '4/5',
        category: 'PRG'
    },
    {
        src: 'img/game/oblivion.jpg',
        alt: 'The elder scroll: Oblivion',
        name: 'The elder scroll: Oblivion',
        genre: 'RPG',
        developer: 'Bethesda Game Studios',
        grade: '3.5/5',
        category: 'RPG'
    },
    {
        src: 'img/game/gta.jpg',
        alt: 'GTA: Vice city',
        name: 'GTA: Vice city',
        genre: 'TPS',
        developer: 'Rock Star Game',
        grade: '3.5/5',
        category: 'TPS'
    },
    {
        src: 'img/game/fable.jpg',
        alt: 'Fable',
        name: 'Fable',
        genre: 'RPG',
        developer: 'Lionhead Studios',
        grade: '4.5/5',
        category: 'RPG'
    },
    
]

let card;

for (let i = 0; i < cards.length; i++) {
    card = new GameCard(
        cards[i]['src'],
        cards[i]['alt'],
        cards[i]['name'],
        cards[i]['genre'],
        cards[i]['developer'],
        cards[i]['grade'],
        cards[i]['category'],
        '.cards .container').createCard();
}

let sizeText = document.querySelector('.size');
let rangeText = document.querySelector('.size-text');
console.log(sizeText);
console.log(rangeText);

let genreVal, children;

function createGenre() {
    genreVal = document.createElement('p');
    genreVal.classList.add('');
    genreVal.style.fontSize = sizeText.textContainer;

    return genreVal;
}

rangeText.oninput = function () {
    let fontSize = rangeText.value;

    sizeText.textContent = fontSize;
}

let cardGenres = document.querySelectorAll('.card');
let inputGenre = document.querySelectorAll('.genre-input');
// let checkedGenre = document.querySelectorAll('.genre-chek');
console.log(cardGenres);
console.log(inputGenre);

inputGenre.onchange = function () {
    for (cardGenre of cardGenres) {
        if (cardGenre.dataset.category !== inputGenre.value && inputGenre.value !== 'all') {
            cardGenre.classList.add("hidden");
        }
        else {
            cardGenre.classList.remove("hidden");
        }
    }
}
