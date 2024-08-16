let currMoletile;
let currPlanttile;
let score=0;
let gameover=false;

window.onload=function() {
    setGame();
}

function setGame(){
    if(gameover==true){
        return;
    }
    for(let i=0;i<9;i++){
        let tile=document.createElement('div');
        tile.id=i.toString();
        tile.addEventListener('click',selectTile);
        tile=document.getElementById('board').appendChild(tile);
    }

    let reset=document.getElementById('resetbtn');
    reset.addEventListener('click',resetGame);
    setInterval(setMole,900);
    setInterval(setPlant,1500);
}

function getRandomtile(){
    let num=Math.floor(Math.random() * 9);
    return num.toString();
}


function setMole(){
    if(gameover==true){
        return;
    }
    if(currMoletile){
        currMoletile.innerHTML="";
    }
   

    let mole=document.createElement("img");
    mole.src="./monty-mole.png";
    let num = getRandomtile();
    if (currPlanttile && currPlanttile.id == num) {
        return;
    }
    currMoletile=document.getElementById(num);
    currMoletile.appendChild(mole);
}

function setPlant(){
    if(gameover==true){
        return;
    }
    if(currPlanttile){
        currPlanttile.innerHTML="";
    }

    let plant=document.createElement("img");
    plant.src="./piranha-plant.png";
    let num = getRandomtile();
    if (currMoletile && currMoletile.id == num) {
        return;
    }
    currPlanttile=document.getElementById(num);
    currPlanttile.appendChild(plant);
}

function selectTile(){
    if(this==currMoletile){
        score+=10;
        document.getElementById('score').innerHTML="Score:"+""+score.toString();
    }
    if(this==currPlanttile){
        document.getElementById('score').innerHTML="GAME OVER"+"->"+ "Score:"+""+score.toString();
        gameover=true;
    }
}

function resetGame(){
    gameover=false;
    document.getElementById('score').innerHTML="0"
}