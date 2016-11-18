var canvas = document.getElementById('canvas'),
    w = canvas.width,
    h = canvas.height,
    ctx = canvas.getContext('2d');

var animationFrameId = -1,
    gap = 30,
    topSpeed = 8;

var mouseX = w / 2,
    mouseY = h / 2;