let canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
let canvasDIM = {
	width: 400,
	height: 600,
};

let paddleDim = {
	width: 50,
	height: 10,
};

// Canvas
canvas.width = canvasDIM.width;
canvas.height = canvasDIM.height;
canvas.style.border = `2px solid #fff`;

// Rectangle
context.fillStyle = 'black'; //NOTE: fillStyle should stay on top of the rect.
context.fillRect(0, 0, 400, 600); //(x, y, width, height).

// Paddle Top
context.fillStyle = 'white'; //NOTE: fillstyle should stay on top of the rect.
context.fillRect(175, 10, paddleDim.width, paddleDim.height); //(x, y, width, height).

// Paddle Bottom
context.fillStyle = 'white'; //NOTE: fillstyle should stay on top of the rect.
context.fillRect(175, canvasDIM.height - 20, paddleDim.width, paddleDim.height); //(x, y, width, height).

// Center Line
context.beginPath();
context.strokeStyle = 'white';
context.setLineDash([6]);
context.moveTo(0, canvasDIM.height / 2);
context.lineTo(canvasDIM.width, canvasDIM.height / 2);
context.stroke();

// Circle Ball
context.beginPath();
context.arc(canvasDIM.width / 2, canvasDIM.height / 2, 10, 2 * Math.PI, false); //(x, y, radius, startAngle, endAngle [,anticlockwise]);
context.fillStyle = 'white';
context.fill();

// Players Scores
context.font = '32px Arial';
context.fillText(10, 20, canvasDIM.height / 2 - 30);
context.fillText(10, 20, canvasDIM.height / 2 + 50);
