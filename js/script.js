class GameCard {
    #_src;
    #_alt;
    #_name;
    #_description;
    #_grade;
    #_opinion;
    #_parent;

    constructor(src, alt, name, description, grade, opinion, parent) {
        
        this.src = src;
        this.alt = alt;
        this.name = name;
        this.description = description;
        this.grade = grade;
        this.opinion = opinion;
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

    get description() {
        return this.#_description;
    }
    set description(descriptionValue) {
        this.#_description = descriptionValue;
    }

    get grade() {
        return this.#_grade;
    }
    set grade(gradeValue) {
        this.#_grade = gradeValue;
    }

    get opinion() {
        return this.#_opinion;
    }
    set opinion(opinionValue) {
        this.#_opinion = opinionValue;
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
        elem.innerHTML = `
        
        <img class='card__image' src='${this.src}' alt='${this.alt}'>
        <h2 class='card__title'>${this.name}</h2>
        <p class='card__description'>${this.description}</p>
        <p class='card__grade'>${this.grade}</p>
        <p class='card__opinion'>${this.opinion}</p>
        
        `;

        this.parent.append(elem);
    }
}

let cards = [
    {
        src: 'img/game/worldwarcraft.jpg',
        alt: 'World of warcraft',
        name: 'World Of Warcraft',
        description: 'World of Warcraft — массовая многопользовательская ролевая онлайн-игра, разработанная и издаваемая компанией Blizzard Entertainment. Действие World of Warcraft происходит в фэнтезийной вселенной Warcraft.',
        grade: '5/5',
        opinion: 'супер класс'
    },
    {
        src: 'img/game/worldwarcraft.jpg',
        alt: 'Warhammer 40000',
        name: 'Warhammer 40000',
        description: '',
        grade: '5/5',
        opinion: ''
    },
    {
        src: 'img/game/worldwarcraft.jpg',
        alt: 'Civilizatin Vi',
        name: 'Civilizatin Vi',
        description: '',
        grade: '4.5/5',
        opinion: ''
    },
    {
        src: 'img/game/worldwarcraft.jpg',
        alt: 'NHL 21',
        name: 'NHL 21',
        description: '',
        grade: '5/5',
        opinion: ''
    },
    {
        src: 'img/game/worldwarcraft.jpg',
        alt: 'FIFA 21',
        name: 'FIFA 21',
        description: '',
        grade: '5/5',
        opinion: ''
    },
    {
        src: 'img/game/worldwarcraft.jpg',
        alt: 'Command & Conquer: Generals',
        name: 'Command & Conquer: Generals',
        description: '',
        grade: '5/5',
        opinion: ''
    },
    {
        src: 'img/game/worldwarcraft.jpg',
        alt: 'Корсары 3',
        name: 'Корсары 3',
        description: '',
        grade: '3.5/5',
        opinion: ''
    },
    {
        src: 'img/game/worldwarcraft.jpg',
        alt: 'Mafia',
        name: 'Mafia',
        description: '',
        grade: '4/5',
        opinion: ''
    },
    {
        src: 'img/game/worldwarcraft.jpg',
        alt: 'Call of Duty: Modern Warfare',
        name: 'Call of Duty: Modern Warfare',
        description: '',
        grade: '4/5',
        opinion: ''
    },
    {
        src: 'img/game/worldwarcraft.jpg',
        alt: 'Need for Speed',
        name: 'Need for Speed',
        description: '',
        grade: '4.5/5',
        opinion: ''
    },
    {
        src: 'img/game/worldwarcraft.jpg',
        alt: 'Diablo',
        name: 'Diablo',
        description: '',
        grade: '4/5',
        opinion: ''
    },
    {
        src: 'img/game/worldwarcraft.jpg',
        alt: 'The elder scroll: Oblivion',
        name: 'The elder scroll: Oblivion',
        description: '',
        grade: '3.5/5',
        opinion: ''
    },
    {
        src: 'img/game/worldwarcraft.jpg',
        alt: 'GTA: Vice city',
        name: 'GTA: Vice city',
        description: '',
        grade: '3.5/5',
        opinion: ''
    },
    
]

let card;

for (let i = 0; i < cards.length; i++) {
    card = new GameCard(
        cards[i]['src'],
        cards[i]['alt'],
        cards[i]['name'],
        cards[i]['description'],
        cards[i]['grade'],
        cards[i]['opinion'],
        '.cards .container').createCard();
}