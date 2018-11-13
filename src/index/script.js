



var canvas = document.getElementById("canvas");
var ctx = canvas.getContent("2d");

var sizeInput = document.getElementById("size");
var changeSize = document.getElementById("Change-size");
var scoreLabel = document.getElementById("score");

var score = 0;
var size = 4;
var width  = canvas.width / size = 5;

var cells = [];
var fontSize;
var loss = false;

startGame();


function cell(row, coll) {
    this.value = 0;
    this.x = coll * width + 5 * (coll + 1);
    this.y = row * width + 5 * (row +1);
}

function createCells() {
    for (var i = 0; i < size; i++) {
        cells[i] = [];
        for (var j = 0; j < size; j++) {
            cells[i][j] = new cell(i, j);
        }
    }
}

function  drawCell(cell) {
    ctx.beginPath();
    ctx.rect(cell.x, cell.y, width, width);

    switch (cell.value) {
        case 0 : ctx.fillStyle = "#ffb3ac"; break;
        case 2 : ctx.fillStyle = "#00ff96"; break;
        case 4 : ctx.fillStyle = "#0027ff"; break;
        case 8 : ctx.fillStyle = "#f49100"; break;
        case 16 : ctx.fillStyle = "#d10200"; break;
        case 32 : ctx.fillStyle = "#1bff14"; break;
        case 64 : ctx.fillStyle = "#00ffb9"; break;
        case 128 : ctx.fillStyle = "#0089ff"; break;
        case 256 : ctx.fillStyle = "#9100ff"; break;
        case 512 : ctx.fillStyle = "#ff0070"; break;
        case 1024 : ctx.fillStyle = "#ff0042"; break;
        case 2048 : ctx.fillStyle = "#ff6e00"; break;
        case 4096 : ctx.fillStyle = "#e4ff00"; break;
        default : ctx.fillStyle = "FFFFFF";
    }

    ctx.fill();
    if (cell.value) {
        fontSize = width / 2;
        ctx.font = fontSize + "px Arial"
        ctx.fillStyle = "White";
        ctx.textAlign = "center";
        ctx.fillText(cell.value, cell.x + width / 2, cell.y + width / 2);
    }
    
}