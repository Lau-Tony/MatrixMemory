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
        randomize();
        layTiles();
        setTrueTile();
        showTrueTiles();
        // for (let i = 0; i < numOfTile; i++) 
        // {
            
        // }
        
    // }

}

function showTrueTiles() 
{
    // for (let i = 0; i < numOfTrue; i++)
    // {
    //     let element = document.getElementById(gameObjects.numOfTrue[i].);
    //     element.setAttribute.
    // }
}

function layTiles() 
{
    let board = document.getElementById("game-board");
    for (let i = 0; i < gameObjects.numOfTile; i++)
    {
        let tile = createTile(i);
        board.appendChild(tile);
    }    
}

function setTrueTile() 
{
    for (let i = 0; i < gameObjects.numOfTrue; i++) 
    {
        console.log(gameObjects.trueTiles[i] + "-back");
        document.getElementById(gameObjects.trueTiles[i] + "-back").className = "tile-back-true";
    }
}

function createTile(i) 
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
    tileBack.setAttribute("class", "tile-back-false");
    
    tileInner.appendChild(tileFront);
    tileInner.appendChild(tileBack);
    tile.appendChild(tileInner);

    return tile;
}

function randomize() 
{
    let tileChart =[];
    for (let tileID = 0; tileID < gameObjects.numOfTile; tileID++) 
    {
        tileChart[tileID] = tileID;
        // console.log("tileChart[tileID] = tileID " + tileChart[tileID] + " " + tileID);
        gameObjects.tileBool[tileID] = false;

    }
    for (let i = 0; i < gameObjects.numOfTrue; i++) 
    {
        let TTile = Math.trunc(Math.random() * (gameObjects.numOfTile - i));
        // console.log(i + " " + TTile);
        // console.log("gameObjects.trueTiles[i] = tileChart[TTile] " + gameObjects.trueTiles[i] + " " + tileChart[TTile]);
        gameObjects.trueTiles[i] = tileChart[TTile];
        // console.log("tileChart[TTile] = tileChart[gameObjects.numOfTile - 1 - i] " + tileChart[TTile] + " " + tileChart[gameObjects.numOfTile - i - 1]);
        tileChart[TTile] = tileChart[gameObjects.numOfTile - i - 1];
        // console.log("tileChart[gameObjects.numOfTile - i - 1] = gameObjects.trueTiles[i] " + tileChart[gameObjects.numOfTile - i - 1] + " " + gameObjects.trueTiles[i]);
        tileChart[gameObjects.numOfTile - i - 1] = gameObjects.trueTiles[i];
        // console.log("gameObjects.trueTiles[i] " + gameObjects.trueTiles[i]);
        // console.log("tileChart[TTile] " + tileChart[TTile]);
        // console.log("tileChart[gameObjects.numOfTile - i - 1] " + tileChart[gameObjects.numOfTile - i - 1]);
        gameObjects.tileBool[tileChart[TTile]] = true;
    }
}

















