class GameTableCard {
    #_name;
    #_src;
    #_alt;
    #_titleTimeGame;
    #_timeGame;
    #_titleNumberGamer;
    #_numberGamer;
    #_description;
    #_grade;
    #_parent;

    constructor(name, src, alt, titleTimeGame, timeGame, titleNumberGamer, numberGamer, description, grade, parent) {
        this.name = name;
        this.src = src;
        this.alt = alt;
        this.titleTimeGame = titleTimeGame;
        this.timeGame = timeGame;
        this.titleNumberGamer = titleNumberGamer;
        this.numberGamer = numberGamer;
        this.description = description;
        this.grade = grade;
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

    get parent() {
        return this.#_parent;
    }
    set parent(parentValue) {
        this.#_parent = parentValue;
    }

    createCard() {
        let elem = document.createElement('div');
        elem.classList.add('cart');
        elem.innerHTML = `
        
        <h2 class='cart__title'>${this.name}</h2>
        <div class='cart__item'>
            <img class='cart__item__image' src='${this.src}' alt='${this.alt}'>
            <div class='cart__item__specifications'>
                <div class='cart__item__specifications__game'>
                    <h3 class='cart__item__specifications__game__title'>${this.titleTimeGame}</h3>
                    <p class='cart__item__specifications__game__time'>${this.timeGame}</p>
                </div>
                <div class='cart__item__specificationsv__game'>
                    <h3 class='cart__item__specifications__game__title'>${this.titleNumberGamer}</h3>
                    <p class='cart__item__specifications__game__number'>${this.numberGamer}</p>
                </div>
            </div>
        </div>
        <p class='cart__description'>${this.description}</p>
        <p class='cart__grade'>${this.grade}</p>
        
        `;

        this.parent.append(elem);
    }
}

let carts = [
    {
        name: 'Carcassone',
        src: 'img/tableGame/carcassonne2.jpg',
        alt: 'Carcassone',
        titleTimeGame: 'Duration of the game:',
        timeGame: 'from 25 minutes',
        titleNumberGamer: 'Number of players:',
        numberGamer: '2-6 people',
        description: 'The measured life of the fiefdoms in the vicinity of Carcassonne attracts many people from all over France.There is a lively trade in the cities, construction is in full swing, and the people are getting rich, so that now the lord is forced to reckon with the heads of the communities.We invite you to experience these changes in the social and economic life of Carcassonne at the gaming table. For the first time in Russia - a collection from Carcassonne and four additions to it in one large box.The Royal Gift features 144 terrain squares, 84 wooden tokens and countless exciting games that are now up to six players to play! The set includes "Carcassonne" itself, additions to it "Taverns and Cathedrals", "Merchants and Builders", "Abbot and Mayor" and "King", as well as "Scout" - a small expansion for the game "Hunters and Gatherers".',
        grade: '4/5'
    },
    {
        name: 'Monopoly',
        src: 'img/tableGame/monopoly.jpg',
        alt: 'monopoly',
        titleTimeGame: 'Duration of the game:',
        timeGame: 'from 60 minutes',
        titleNumberGamer: 'Number of players:',
        numberGamer: '2-6 people',
        description: 'New edition of the classic "Monopoly" with 8 tokens voted on by fans in early 2017! Children and adults alike can feel like real high-flying tycoons. Buy property, invest in homes and hotels, collect rents and make great deals with your opponents.',
        grade: '3.5/5'
    },
    {
        name: 'Sid Meiers Civilization: A New Dawn',
        src: 'img/tableGame/civigame.jpg',
        alt: 'Sid Meiers Civilization: A New Dawn',
        titleTimeGame: 'Duration of the game:',
        timeGame: '60 to 120 minutes',
        titleNumberGamer: 'Number of players:',
        numberGamer: '2-4 people',
        description: '"Sid Meiers Civilization: A New Dawn" recreates the iconic series of computer games in the form of a tabletop strategy.In this dynamic and easy- to - learn game, you will lead nations to prosperity as you fight for territory, technology and wonders of the world.',
        grade: '../5'
    },
    {
        name: 'Evolution',
        src: 'img/tableGame/evol.jpg',
        alt: 'Evolution',
        titleTimeGame: 'Duration of the game:',
        timeGame: '30 to 60 minutes',
        titleNumberGamer: 'Number of players:',
        numberGamer: '2-4 people',
        description: 'Darwins theory This is Evolution, a board game about survival and adaptation in the face of constant competition between species.The game is the worlds most unusual biology textbook. But this does not mean that she is boring! Herbivores will go to any adaptation possibilities in order to escape from predators, and predators will take measures in response to eat these herbivores.Your creatures will be weighed and combined in the course of the game with useful evolutionary properties.This can be the size of the creature, its ability to swim, disguise and survive.This is how the waterfowl poisonous killer rabbits turn out in the course of the game! You will see all this in the new Russian game called Evolution!',
        grade: '3/5'
    },
    {
        name: 'Catan',
        src: 'img/tableGame/catan.jpg',
        alt: 'Catan',
        titleTimeGame: 'Duration of the game:',
        timeGame: '45 to 90 minutes',
        titleNumberGamer: 'Number of players:',
        numberGamer: '3-4 people',
        description: 'A new land stretches before the brave colonizers - a huge island called Catan.Here they will have to master the territory, extract raw materials, lay roads and build cities, trade and fight robbers.Which of the settlers will manage to create the most powerful state? The answer depends only on you.',
        grade: '../5'
    },
    {
        name: 'UNO',
        src: 'img/tableGame/uno.jpg',
        alt: 'UNO',
        titleTimeGame: 'Duration of the game:',
        timeGame: '15 to 45 minutes',
        titleNumberGamer: 'Number of players:',
        numberGamer: '2-10 people',
        description: 'UNO successfully combines passion, simplicity and variability of rules, neutral design and addictive gameplay. While the rules are easy to learn, they are modular in themselves, which means you can customize them to suit you. There are a huge number of different combinations of rules, the main thing is to find the one that suits you! And the most interesting thing is that all this is contained only in a compact deck of cards!',
        grade: '4/5'
    },
    {
        name: 'The corridor',
        src: 'img/tableGame/gorridor.jpg',
        alt: 'The corridor',
        titleTimeGame: 'Duration of the game:',
        timeGame: '5 to 10 minutes',
        titleNumberGamer: 'Number of players:',
        numberGamer: '2-4 people',
        description: 'Welcome to the maze! Although, wait a minute, at the beginning of the game there is no maze, to be honest, there is no.Players, trying to get to the opposite edge of the field, along the way, put obstacles for their competitors.This is where the maze appears, move by move.And the one who turns out to be the most agile and the first to be on the other side is declared the winner in the end.And the rest will remain in this maze forever! Joke)',
        grade: '4/5'
    },
    {
        name: 'Rummikub',
        src: 'img/tableGame/rumi.jpg',
        alt: 'Rummikub',
        titleTimeGame: 'Duration of the game:',
        timeGame: 'from 20 minutes',
        titleNumberGamer: 'Number of players:',
        numberGamer: '2-4 people',
        description: 'Rummikub in its ingenious simplicity will give you endlessly exciting leisure time, because each game will be different, like the combinations of the laid out chips!',
        grade: '4.5/5'
    },
    {
        name: 'Game of Thrones',
        src: 'img/tableGame/game.jpg',
        alt: 'Game of Thrones',
        titleTimeGame: 'Duration of the game:',
        timeGame: '120 to 180 minutes',
        titleNumberGamer: 'Number of players:',
        numberGamer: '3-6 people',
        description: 'Game of Thrones is an atmospheric, original and thoughtful board strategy game based on George Martins popular A Song of Ice and Fire, recently filmed as a high- budget television series.The struggle for power in the Seven Kingdoms is in full swing: undercover intrigues turn into bloody battles, temporary alliances turn into despicable betrayals, and what has been considered childrens fairy tales for centuries turns out to be a harsh reality. Lead one of the Great Houses of Westeros and lead it to victory',
        grade: '../5'
    },
    {
        name: 'Ticket to Ride Europe',
        src: 'img/tableGame/ticket.jpg',
        alt: 'Ticket to Ride Europe',
        titleTimeGame: 'Duration of the game:',
        timeGame: '30 to 60 minutes',
        titleNumberGamer: 'Number of players:',
        numberGamer: '2-5 people',
        description: 'From the rocky hills of Edinburgh to the sunny docks of Constantinople, from the dusty alleys of Pamplona to the windswept station in Berlin, Ticket To Ride Europe takes you on a thrilling train adventure through Europes greatest cities at the turn of the century ...',
        grade: '../5'
    },
    {
        name: 'Suburbia',
        src: 'img/tableGame/suburbia.jpg',
        alt: 'Suburbia',
        titleTimeGame: 'Duration of the game:',
        timeGame: 'from 90 minutes',
        titleNumberGamer: 'Number of players:',
        numberGamer: '1-4 people',
        description: 'Can a provincial town turn into a huge prosperous metropolis? Its mayor will have to answer this question by taking up construction. You and your colleagues - or rather, competitors - will try to make your city the most profitable and attract as many people as possible. Remember, Suburbia Corporation is closely following your progress!',
        grade: '../5'
    },
    // {},
    // {},
    // {},
    // {},
    // {},
    // {},
    // {},
    // {},
]

let cart;

for (let i = 0; i < carts.length; i++) {
    cart = new GameTableCard(
        carts[i]['name'],
        carts[i]['src'],
        carts[i]['alt'],
        carts[i]['titleTimeGame'],
        carts[i]['timeGame'],
        carts[i]['titleNumberGamer'],
        carts[i]['numberGamer'],
        carts[i]['description'],
        carts[i]['grade'],
        '.cart-blok').createCard();
}