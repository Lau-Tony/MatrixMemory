let gameObjects = 
{
    tileBool: []
};

function initialize() 
{
    let element = document.createElement("p");
    element.setAttribute("id", "game-title");
    element.innerText = "Welcome to Matrix Memory";
    document.body.appendChild(element);

    element = document.createElement("div");
    element.setAttribute("id", "game-board");
    document.body.appendChild(element);

    element = document.createElement("button");
    element.setAttribute("id", "start-button");
    element.innerText = "Start";
    document.body.appendChild(element);

    layTiles(25);
    randomize(5, 25);
    
}

function layTiles(numOfTile) 
{
    let board = document.getElementById("game-board");
    for (let i = 0; i < numOfTile; i++)
    {
        let tile = document.createElement("div");
        tile.setAttribute("id", i);
        tile.setAttribute("class", "tile");

        board.appendChild(tile);
    }    
}

function randomize(numOfTrue, numOfTile) 
{
    let trueTiles = [], tileChart =[];
    for (let tileID = 0; tileID < numOfTile; tileID++) 
    {
        tileChart[tileID] = tileID;
        gameObjects.tileBool[tileID] = false;

    }
    for (let i = 0; i < numOfTrue; i++) 
    {
        let TTile = Math.round(Math.random() * numOfTile);
        trueTiles[i] = TTile;
        tileChart[TTile] = tileChart[numOfTile - i];
        tileChart[numOfTile - i] = TTile;
        gameObjects.tileBool[TTile] = true;
    }
}

















