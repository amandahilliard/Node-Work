
//Stats (W/L/T)


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
function createPlayersUI()
{
    document.getElementById('players').innerHTML = '';
    for(var i = 0; i < players.length; i++)
    {
        var div_player = document.createElement('div');
        var div_playerid = document.createElement('div');
        var div_hand = document.createElement('div');
        var div_points = document.createElement('div');

        div_points.className = 'points';
        div_points.id = 'points_' + i;
        div_player.id = 'player_' + i;
        div_player.className = 'player';
        div_hand.id = 'hand_' + i;

        div_playerid.innerHTML = players[i].ID;
        div_player.appendChild(div_playerid);
        div_player.appendChild(div_hand);
        div_player.appendChild(div_points);
        document.getElementById('players').appendChild(div_player);
    }
}
//Actions - Hit or Stay (event listeners)
function startblackjack()
{
    document.getElementById('btnStart').value = 'Restart';
    document.getElementById("status").style.display="none";
    // deal 2 cards to every player object
    currentPlayer = 0;
    createDeck();
    shuffle();
    createPlayers(2);
    createPlayersUI();
    dealHands();
    document.getElementById('player_' + currentPlayer).classList.add('active');
}

function dealHands()
{
    // alternate handing cards to each player
    // 2 cards each
    for(var i = 0; i < 2; i++)
    {
        for (var x = 0; x < players.length; x++)
        {
            var card = deck.pop();
            players[x].Hand.push(card);
            renderCard(card, x);
            updatePoints();
        }
    }

    updateDeck();
}
var currentPlayer = 0;
function hitMe()
{
    // pop a card from the deck to the current player
    // check if current player new points are over 21
    var card = deck.pop();
    players[currentPlayer].Hand.push(card);
    renderCard(card, currentPlayer);
    updatePoints();
    check();
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




