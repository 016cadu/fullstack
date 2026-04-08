const canvas = document.getElementById("exercicio1");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "white";
ctx.fillRect(0, 0, 400, 400);

ctx.beginPath();
ctx.moveTo(0, 200);
ctx.lineTo(400, 200);
ctx.strokeStyle = "green";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 0);
ctx.lineTo(400, 400);
ctx.strokeStyle = "blue";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 0);
ctx.lineTo(0, 400);
ctx.strokeStyle = "red";
ctx.stroke();

ctx.beginPath();
ctx.arc(100, 150, 15, 0, Math.PI * 2);
ctx.fillStyle = "yellow"
ctx.fill();

ctx.beginPath();
ctx.arc(300, 150, 15, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.arc(200, 200, 50, 0, Math.PI);
ctx.strokeStyle = "green";
ctx.stroke();

ctx.fillStyle = "red";
ctx.fillRect(0, 0, 20, 20);

ctx.fillStyle = "blue";
ctx.fillRect(380, 0, 20, 20);

ctx.fillStyle = "yellow";
ctx.fillRect(0, 380, 20, 20);

ctx.fillStyle = "green";
ctx.fillRect(380, 380, 20, 20);