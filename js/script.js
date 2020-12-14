class GameCard {
    #_name;
    #_src;
    #_alt;
    #_timeGame;
    #_numberGamer;
    #_description;
    #_grade;
    #_opinion;
    #_parent;

    constructor(name, src, alt, timeGame, numberGamer,description, grade, opinion, parent) {
        this.name = name;
        this.src = src;
        this.alt = alt;
        this.timeGame = timeGame;
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

    get timeGame() {
        return this.#_timeGame;
    }
    set timeGame(timeGameValue) {
        this.#_timeGame = timeGameValue;
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
        
        <h2></h2>
        <div>
            <img>
            <div>
                <h3></h3>
                <p></p>
            </div>
            <div>
                <h3></h3>
                <p></p>
            </div>
        </div>
        <p></p>
        <p></p>
        <p></p>
        
        `;

        this.parent.append(elem);
    }
}

let cards = [
    {},
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