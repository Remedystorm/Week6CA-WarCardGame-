function Deck()
{
    let deck = [];
    let count = 1;
    for(let i = 1; count <= 4; i++)
    {
        deck.push(i);
        if(i === 13)
        {
            i = 0;
            count++;
        }
    }
return deck;
}

function shuffle(array)
{
    let currentIndex = array.length;

    while(currentIndex != 0)
    {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function player(array)
{
    let deck = [];
    for(let i = 1; i <= 26; i++)
    {
        deck.push(array.shift());
    }
    return deck;
}

function card(array)
{
    return array.shift();
}

function play_war(arr, array)
{
    let card = 26;
    let player1Card = 0;
    let player2Card = 0;
    let player1score = 0;
    let player2score = 0;
    while(card != 0)
    {
        player1Card = arr.shift();
        player2Card = array.shift();
        if(player1Card > player2Card)
        {
            console.log("player1 won the battle and recieved a point");
            player1score++;
        }
       else if(player1Card < player2Card)
        {
            console.log("player2 won the battle and recieved a point");
            player2score++;
        }
        else
        {
            console.log("both players tied and recieved nothing!");
        }
        card--;
    }
console.log("player1 score: " + player1score + " player2 score: " + player2score);
    if(player1score > player2score)
        {
            console.log("player1 won the war");
        }
    else if(player1score < player2score)
    {
        console.log(" player2 won the war");
    }
    else
    {
        console.log("both players tied");
    }
    return 1;
}

let deck = (shuffle(Deck()));
let Player1 = player(deck);
let Player2 = player(deck);
play_war(Player1, Player2); 
