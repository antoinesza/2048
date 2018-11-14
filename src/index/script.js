



var canvas = document.getElementById("canvas");
var ctx = canvas.getContent("2d");

var sizeInput = document.getElementById("size");
var changeSize = document.getElementById("Change-size");
var scoreLabel = document.getElementById("score");

var score = 0;
var size = 4;
var width  = canvas.width / size = 6;

var cells = [];
var fontSize;
var loss = false;

startGame();

function startGame() {
    createCells();
    drawAllCells();
}


function cell(row, coll) {
    this.value = 0;
    this.x = coll * width + 6 * (coll + 1);
    this.y = row * width + 6 * (row +1);
}

function createCells() {
    for (var i = 0; i < size; i++) {
        cells[i] = [];
        for (var j = 0; j < size; j++) {
            cells[i][j] = new cell(i, j);
        }
    }
}

function drawCell(cell) {
    ctx.beginPath();
    ctx.rect(cell.x, cell.y, width, width);
    switch (cell.value){
        case 0 : ctx.fillStyle = '#A9A9A9'; break;
        case 2 : ctx.fillStyle = '#D2691E'; break;
        case 4 : ctx.fillStyle = '#FF7F50'; break;
        case 8 : ctx.fillStyle = '#ffbf00'; break;
        case 16 : ctx.fillStyle = '#bfff00'; break;
        case 32 : ctx.fillStyle = '#40ff00'; break;
        case 64 : ctx.fillStyle = '#00bfff'; break;
        case 128 : ctx.fillStyle = '#FF7F50'; break;
        case 256 : ctx.fillStyle = '#0040ff'; break;
        case 512 : ctx.fillStyle = '#ff0080'; break;
        case 1024 : ctx.fillStyle = '#D2691E'; break;
        case 2048 : ctx.fillStyle = '#FF7F50'; break;
        case 4096 : ctx.fillStyle = '#ffbf00'; break;
        default : ctx.fillStyle = '#ff0080';
    }
    
    ctx.fill();
    if (cell.value) {
        fontSize = width / 2;
        ctx.font = fontSize + "px Arial"
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(cell.value, cell.x + width / 2, cell.y + width / 2);
    }
}

function drawAllCells() {
    for(var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            drawCell(cells[i][j]);
        }
    }
}

function pasteNewCell () {
    while (true) {
        var row = Math.floor(Math.random() * size);
        var coll = Math.floor(Math.random() * size);
        if(!cell([row][coll].value)) {
            cells[row][coll].value = 2 * Math.ceil(Math.random() * 2);
            drawAllCells()
            return;
        }
    }
}
