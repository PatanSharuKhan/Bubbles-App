let canvas = document.getElementById("canvas");
let reset = document.getElementById("resetBtn");
let ctx;

function drawCircle(x, y, r, sangle, eangle, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, r, sangle, eangle, eangle);
    ctx.stroke();
    ctx.fill();
}

function drawArrow(x1, y1, x2, y2, x3, y3, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.fill();
}

function drawRect(x, y, l, b, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, l, b);
}

function draw() {

    ctx.lineWidth = 5;
    drawCircle(50, 50, 40, 0, Math.PI * 2, "violet");
    drawCircle(50, 150, 40, 0, Math.PI * 2, "red");
    drawCircle(50, 250, 40, 0, Math.PI * 2, "green");
    drawCircle(50, 350, 40, 0, Math.PI * 2, "blue");

    drawArrow(270, 50, 300, 40, 300, 60, "black");
    drawArrow(270, 150, 300, 140, 300, 160, "black");
    drawArrow(270, 250, 300, 240, 300, 260, "black");
    drawArrow(270, 350, 300, 340, 300, 360, "black");

    drawRect(300, 45, 60, 10, "black");
    drawRect(300, 145, 60, 10, "black");
    drawRect(300, 245, 60, 10, "black");
    drawRect(300, 345, 60, 10, "black");

}
if (canvas.getContext) {
    ctx = canvas.getContext("2d");
    draw();
} else {
    console.log("Not supported");
}

canvas.addEventListener("click", function(event) {
    function getRadius(i) {
        let a = (((window.innerWidth - 408) / 2) + 50 - ((event.clientX))) ** 2;
        let b = (i - event.clientY) ** 2;
        let radius = (a + b) ** 0.5;
        return radius;
    }
    if (event.clientY <= 150) {
        let rad = getRadius(100);
        if (rad < 44) {
            drawCircle(50, 50, 40, 0, Math.PI * 2, "indigo");
            drawArrow(92, 50, 120, 40, 120, 60, "black");
            drawRect(120, 45, 60, 10, "black");
            ctx.clearRect(200, 20, canvas.width, 100);
        }
    } else if (event.clientY <= 250) {
        let rad = getRadius(200);
        if (rad < 44) {
            drawCircle(50, 150, 40, 0, Math.PI * 2, "orange");
            drawArrow(92, 150, 120, 140, 120, 160, "black");
            drawRect(120, 145, 60, 10, "black");
            ctx.clearRect(200, 120, canvas.width, 100);
        }
    } else if (event.clientY <= 350) {
        let rad = getRadius(300);
        if (rad < 44) {
            drawCircle(50, 250, 40, 0, Math.PI * 2, "lightgreen");
            drawArrow(92, 250, 120, 240, 120, 260, "black");
            drawRect(120, 245, 60, 10, "black");
            ctx.clearRect(200, 220, canvas.width, 100);
        }
    } else if (event.clientY <= 450) {
        let rad = getRadius(400);
        if (rad < 44) {
            drawCircle(50, 350, 40, 0, Math.PI * 2, "lightblue");
            drawArrow(92, 350, 120, 340, 120, 360, "black");
            drawRect(120, 345, 60, 10, "black");
            ctx.clearRect(200, 320, canvas.width, 100);
        }
    }
});

reset.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw();
});
