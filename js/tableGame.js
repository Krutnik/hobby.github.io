class GameCard {
    #_name;
    #_src;
    #_alt;
    #_titleTimeGame;
    #_timeGame;
    #_titleNumberGamer;
    #_numberGamer;
    #_description;
    #_grade;
    #_opinion;
    #_parent;

    constructor(name, src, alt, titleTimeGame, timeGame, titleNumberGamer, numberGamer, description, grade, opinion, parent) {
        this.name = name;
        this.src = src;
        this.alt = alt;
        this.titleTimeGame = titleTimeGame;
        this.timeGame = timeGame;
        this.titleNumberGamer = titleNumberGamer;
        this.numberGamer = numberGamer;
        this.description = description;
        this.grade = grade;
        this.opinion = opinion;
        this.parent = document.querySelector(parent);
    }

    get name() {
        return this.#_name;
    }
    set name(nameValue) {
        this.#_name = nameValue;
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

    get titleTimeGame() {
        return this.#_titleTimeGame;
    }
    set titleTimeGame(titleTimeGameValue) {
        this.#_titleTimeGame = titleTimeGameValue;
    }

    get timeGame() {
        return this.#_timeGame;
    }
    set timeGame(timeGameValue) {
        this.#_timeGame = timeGameValue;
    }

    get titleNumberGamer() {
        return this.#_titleNumberGamer;
    }
    set titleNumberGamer(titleNumberGamerValue) {
        this.#_titleNumberGamer = titleNumberGamerValue;
    }

    get numberGamer() {
        return this.#_numberGamer;
    }
    set numberGamer(numberGamerValue) {
        this.#_numberGamer = numberGamerValue;
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
        elem.classList.add('...');
        elem.innerHTML = `
        
        <h2 class=''>${this.name}</h2>
        <div class=''>
            <img class='' src='${this.src}' alt='${this.alt}'>
            <div class=''>
                <h3 class=''>${this.titleTimeGame}</h3>
                <p class=''>${this.timeGame}</p>
            </div>
            <div class=''>
                <h3 class=''>${this.titleNumberGamer}</h3>
                <p class=''>${this.numberGamer}</p>
            </div>
        </div>
        <p class=''>${this.description}</p>
        <p class=''>${this.grade}</p>
        <p class=''>${this.opinion}</p>
        
        `;

        this.parent.append(elem);
    }
}

let cards = [
    {
        name: 'Warcraft',
        src: 'img/...',
        alt: 'Warcraft',
        titleTimeGame: '',
        timeGame: '',
        titleNumberGamer: '',
        numberGamer: '',
        description: '',
        grade: '',
        opinion: ''

    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]

let card;

for (let i = 0; i < cards.length; i++) {
    card = new GameCard(
        cards[i][],
        cards[i][],
        cards[i][],
        cards[i][],
        cards[i][],
        cards[i][],
        cards[i][],
        '.cards .container').createCard();
}