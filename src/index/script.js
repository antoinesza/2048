



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

function  drawCell(cell) {
    ctx.beginPath();
    ctx.rect(cell.x, cell.y, width, width);

    switch (cell.value) {
        case 0 : ctx.fillStyle = "#FF0000"; break;
        case 2 : ctx.fillStyle = "#FF0033"; break;
        case 4 : ctx.fillStyle = "#FF00A6"; break;
        case 8 : ctx.fillStyle = "#DE00FF"; break;
        case 16 : ctx.fillStyle = "#6F00FF"; break;
        case 32 : ctx.fillStyle = "#003CFF"; break;
        case 64 : ctx.fillStyle = "#00EBFF"; break;
        case 128 : ctx.fillStyle = "#00FF8D"; break;
        case 256 : ctx.fillStyle = "#00FF22"; break;
        case 512 : ctx.fillStyle = "#7CFF00"; break;
        case 1024 : ctx.fillStyle = "#F7FF00"; break;
        case 2048 : ctx.fillStyle = "#FF7C00"; break;
        case 4096 : ctx.fillStyle = "#FF2F00"; break;
        default : ctx.fillStyle = "FFFFFF";
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