
//Card Suits
//Card Values
//Card Names
interface Card{
    suit: string, 
    value: number, 
    name: string,
}
//Stats (W/L/T)
interface Stats{
    wins: number,
    losses: number,
    ties: number,
}

let suits: Array<string> = ["heart", "diamond", "club", "spades"];
let values: Array<number> = [2,3,4,5,6,7,8,9,10,11];
let names: Array<string> = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven"];

let numDecks = 1
//Deck - collection of cards - array of cards
let deck: Array<Card> = [];

for(let a = 1; a <= numDecks; a++){ //loops through based off the number of decks
    for(let i=0; i < suits.length; i++){ //loops through all the suits
        for(let j = 0; j < values.length; j++){ //loops through all the card values
            let nextCard: Card = {
                suit: suits[i],
                value: values[j],
                name: names[j],
            }
            deck.push(nextCard);
        }
    }
}


//Comp Hand Cards - taken from card object
//Comp Hand Value - taken from card objects
//Comp Hand - Collection of cards
let compHand: Array<Card>

//Actions - Hit or Stay (event listeners)




//Player hand cards - taken from card object
//Player Hand Value - taken from card objects
//Player hand - collection of cards
let playerHand: Array<Card>