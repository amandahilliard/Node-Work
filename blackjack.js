
//Stats (W/L/T)
function setOutcome(outcome){   
        stats[outcome]++;           
        document.getElementById("result").innerText = `It was a ${outcome}`; 
        document.getElementById(outcome).innerText = stats[outcome]; 
    }


let suits = ["heart", "diamond", "club", "spades"];
let values = [2,3,4,5,6,7,8,9,10,11];
let names = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven"];

function getDeck(){
    let deck = cardArray();
    let numDecks = 1
        for(let a = 1; a <= numDecks; a++){ //loops through based off the number of decks
            for(let i=0; i < Suits.length; i++){ //loops through all the suits
                for(let j = 0; j < values.length; j++){ //loops through all the card values
                    let nextCard = {suit: suits[i], value: values[j], name: names[j]}
                        deck.push(nextCard);
                }
            }
        }
}

function shuffleDeck(){
    for (var i = 0; i < 1000; i++){
        var computerHand = Math.floor((Math.random() * deck.length));
        var playerHand = Math.floor((Math.random() * deck.length));
    }
}
//Player hand cards - taken from card object
//Player Hand Value - taken from card objects
//Player hand - collection of cards
let playerHand = cardArray();
//Comp Hand Cards - taken from card object
//Comp Hand Value - taken from card objects
//Comp Hand - Collection of cards
let compHand = cardArray();

var players = new Array();
function createPlayers(num)
{
    players = new Array();
    for(var i = 1; i <= num; i++)
    {
        var hand = new Array();
        var player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand };
        players.push(player);
    }
}



//function to check hands for points - checking each individually
//loop through the array (playerHand / compHand) add points and check for loss / win

//function to draw a card and give it to a specific hand
    //Pull 'top' card from the deck 
    //Return it to be added to the hand that needs it
    //Check the size of the deck
    //If there's still a card left do nothing
    //If there are no more cards, take the dicard pile, shuffle it and re-add it to the main deck

//Event listeners for 'hit' and 'stay'
//hit - give another card to the user and check totals. will then give a card to the comp if they want one
//stay - end the players turn and then keep giving a card to the computer as long as they need one

//function to check if the comp wants a card when its fine with its card, stop checking

//when stay has been clicked and the computer doesnt need cards, end the game

//End game function - compares points, displays messaging, moves cards to the discard pile


var currentPlayer = 0;
function hitMe()
{
    // pop a card from the deck to the current player
    // check if current player new points are over 21
    var card = deck.pop();
    
}
function check()
{
    if (players[currentPlayer].Points > 21)
    {
        document.getElementById('status').innerHTML = 'Player: ' + players[currentPlayer].ID + ' LOST';
    }
}

function stay()
{
    // move on to next player, if any
    if (currentPlayer != players.length-1) {
        document.getElementById('player_' + currentPlayer).classList.remove('active');
        currentPlayer += 1;
        document.getElementById('player_' + currentPlayer).classList.add('active');
    }

    else {
        end();
    }
}

function end()
{
    var winner = -1;
    var score = 0;

    for(var i = 0; i < players.length; i++)
    {
        if (players[i].Points > score && players[i].Points < 22)
        {
            winner = i;
        }

        score = players[i].Points;
    }

    document.getElementById('status').innerHTML = 'Winner: Player ' + players[winner].ID;
}




