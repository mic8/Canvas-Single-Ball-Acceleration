var mover = new Mover();

function draw()
{
    ctx.save();
    ctx.restore();
    ctx.clearRect(0, 0, w, h);

    mover.update(mouseX, mouseY);
    mover.display();

    animationFrameId = requestAnimationFrame(draw);
}

canvas.addEventListener('mousemove', function(e)
{
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
});

window.onload = function()
{
    draw();
};