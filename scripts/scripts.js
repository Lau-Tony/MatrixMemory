let gameObjects = 
{
    tileBool: [],
    trueTiles: [],
    numOfTile: 25,
    numOfTrue: 5
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

    // element = document.createElement("button");
    // element.setAttribute("id", "start-button");
    // element.innerText = "Start";
    // document.body.appendChild(element);

    startGame();
    
    
}

function startGame() 
{
    // while (true) 
    // {
        layTiles();
        randomize();
        
        // for (let i = 0; i < numOfTile; i++) 
        // {
            
        // }
        
    // }

}

function showTrueTiles() 
{
    // for (let i = 0; i < numOfTrue; i++)
    // {
    //     let element = document.getElementById(gameObjects.numOfTrue[i]);
    //     element.
    // }
}

function layTiles() 
{
    let board = document.getElementById("game-board");
    for (let i = 0; i < gameObjects.numOfTile; i++)
    {
        let tile = document.createElement("div");
        tile.setAttribute("id", i);
        tile.setAttribute("class", "tile");

        let tileInner = document.createElement("div");
        tileInner.setAttribute("id", i + "-inner");
        tileInner.setAttribute("class", "tile-inner");

        let tileFront = document.createElement("div");
        tileFront.setAttribute("id", i + "-front");
        tileFront.setAttribute("class", "tile-front");

        let tileBack = document.createElement("div");
        tileBack.setAttribute("id", i + "-back");
        tileBack.setAttribute("class", "-back-false");
        
        tileInner.appendChild(tileFront);
        tileInner.appendChild(tileBack);
        tile.appendChild(tileInner);
        board.appendChild(tile);
    }    
}

function randomize() 
{
    let tileChart =[];
    for (let tileID = 0; tileID < gameObjects.numOfTile; tileID++) 
    {
        tileChart[tileID] = tileID;
        gameObjects.tileBool[tileID] = false;

    }
    for (let i = 0; i < gameObjects.numOfTrue; i++) 
    {
        let TTile = Math.round(Math.random() * gameObjects.numOfTile);
        gameObjects.trueTiles[i] = TTile;
        tileChart[TTile] = tileChart[gameObjects.numOfTile - i];
        tileChart[gameObjects.numOfTile - i] = TTile;
        gameObjects.tileBool[TTile] = true;
    }
}

















