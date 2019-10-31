let gameObjects = 
{
    tileBool: [],
    trueTiles: [],
    columns: 5,
    rows: 5,
    numOfTile: 25,
    numOfTrue: 3,
    numOfClicks: 0,
    clickStatus: 0,
    successFlag: true,
    score: 1
};

function initialize() 
{
    let element = document.createElement("p");
    element.setAttribute("id", "game-title");
    element.innerText = "Welcome to Matrix Memory";
    document.body.appendChild(element);

    element = document.createElement("div");
    element.setAttribute("id", "game-board");
    element.style.width = (gameObjects.columns * 50 + "px");
    element.style.height = (gameObjects.rows * 50 + "px");
    document.body.appendChild(element);

    startGame();
    
}

function startGame() 
{
    randomize();
    layTiles();
    setTrueTile();
    setTimeout(showTrueTiles, 2000);
    setTimeout(hideTrueTiles, 3000);
    setTimeout(rotateBoard, 4000);
}

function resetBoard() 
{
    setTimeout(removeTiles, 0);
    setTimeout(removeAllBoardChild, 1000);
}

function newRoundSettings() 
{
    if (gameObjects.successFlag) 
    {
        if(gameObjects.numOfTrue < gameObjects.columns - 2 || gameObjects.numOfTrue < gameObjects.rows - 2)
        {
            choice = 1;
        } else 
        {
            choice = 0;
        }
        switch(choice)
        {
            case 0: 
                addOneRowOrColumn();
            break;
            case 1:
                gameObjects.numOfTrue++;
            break;
        }
    }
    numOfTilesMin();
}

function removeAllBoardChild() 
{
    let element = document.getElementById("game-board");
    element.parentNode.removeChild(element);
}

function createBoard() 
{
    newRoundSettings();
    let element = document.createElement("div");
    element.setAttribute("id", "game-board");
    element.style.width = (gameObjects.columns * 50 + "px");
    element.style.height = (gameObjects.rows * 50 + "px");
    document.body.appendChild(element);
}

function newRound() 
{
    showTrueTiles();
    setTimeout(resetBoard, 1000);    
    setTimeout(createBoard, 2000);
    // console.log("columns " + gameObjects.columns + " rows " + gameObjects.rows + " numOfTile " + gameObjects.numOfTile + " numOfTrue " + gameObjects.numOfTrue);
    setTimeout(startGame, 4000);
}

// remove tile animation
function removeTiles() 
{
    for (let i = 0; i < gameObjects.numOfTile; i++)
    {
        // console.log(i);
        let element = document.getElementById(i).childNodes;
        // console.log(element);
        element[0].style.transform = "rotateX(90deg)";
    }
}

function rotateBoard() 
{
    document.getElementById("game-board").style.transform = "rotate(90deg)";
    setTimeout(enableClicks, 100);
}

function showTrueTiles() 
{
    for (let i = 0; i < gameObjects.numOfTrue; i++)
    {
        let element = document.getElementById(gameObjects.trueTiles[i]).childNodes;
        element[0].style.transform = "rotateY(180deg)";
    }
}

function hideTrueTiles() 
{
    for (let i = 0; i < gameObjects.numOfTrue; i++)
    {
        let element = document.getElementById(gameObjects.trueTiles[i]).childNodes;
        element[0].style.transform = "rotateY(0deg)";
    }
}

function removeOneRowOrColumn() 
{
    if(gameObjects.columns <= gameObjects.rows) 
    {
        gameObjects.rows--;
    } else 
    {
        gameObjects.column--;
    }
}

function addOneRowOrColumn() 
{
    gameObjects.numOfTrue -= 1;
    if(gameObjects.columns <= gameObjects.rows) 
    {
        gameObjects.columns++;
    } else 
    {
        gameObjects.rows++;
    }
}

function showTile(event) 
{
    gameObjects.numOfClicks++;
    let element = event.target.parentNode;
    element.style.transform = "rotateY(180deg)";
    let checkWrong = false;
    for (let i = 0; i < gameObjects.numOfTrue; i++) 
    {
        if (gameObjects.trueTiles[i] == element.parentNode.id)
            checkWrong = true;
    }
    if(gameObjects.successFlag && checkWrong == false) 
    {
        gameObjects.successFlag = false;
        removeOneRowOrColumn();
    }
    if (gameObjects.numOfClicks == gameObjects.numOfTrue)
    {
        enableClicks();
        setTimeout(newRound, 1000);
    }
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
        document.getElementById(gameObjects.trueTiles[i] + "-back").className = "tile-back-true";
    }
}

function enableClicks() 
{
    if (gameObjects.clickStatus == 0) 
    {
        for (let i = 0; i < gameObjects.numOfTile; i++) 
        {
        document.getElementById(i + "-front").setAttribute("onclick", "showTile(event)");
        }
        gameObjects.clickStatus = 1;
        gameObjects.numOfClicks = 0;
    } else 
    {
        for (let i = 0; i < gameObjects.numOfTile; i++) 
        {
        document.getElementById(i + "-front").setAttribute("onclick", "null");
        }
        gameObjects.clickStatus = 0;
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

function numOfTilesMin() 
{
    gameObjects.numOfTile = gameObjects.columns * gameObjects.rows;
    if (gameObjects.numOfTile < 25)
    {
        gameObjects.numOfTile = 25;
        gameObjects.columns = 5;
        gameObjects.rows = 5;
    }
}

function randomize() 
{
    let tileChart = [];
    gameObjects.tileBool = [];
    gameObjects.trueTiles = [];
    gameObjects.successFlag = true;
    for (let tileID = 0; tileID < gameObjects.numOfTile; tileID++) 
    {
        tileChart[tileID] = tileID;
        gameObjects.tileBool[tileID] = false;

    }
    for (let i = 0; i < gameObjects.numOfTrue; i++) 
    {
        let TTile = Math.trunc(Math.random() * (gameObjects.numOfTile - i));
        gameObjects.trueTiles[i] = tileChart[TTile];
        tileChart[TTile] = tileChart[gameObjects.numOfTile - i - 1];
        tileChart[gameObjects.numOfTile - i - 1] = gameObjects.trueTiles[i];
        gameObjects.tileBool[tileChart[TTile]] = true;
    }
}















