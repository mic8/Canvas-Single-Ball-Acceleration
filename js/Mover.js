function Mover()
{
    this.position = new Vector(w / 2, h / 2);
    this.velocity = new Vector(0, 0);

    this.acceleration = null;
    this.mouse = null;
    this.dir = null;
}

Mover.prototype.update = function(mouseX, mouseY)
{
    this.mouse = new Vector(mouseX, mouseY);
    this.dir = Vector.div(this.mouse, this.position);

    this.dir.normalize();
    this.dir.mult(0.1);

    this.acceleration = this.dir;

    this.velocity.add(this.acceleration);
    this.velocity.limit(topSpeed);

    this.position.add(this.velocity);
};

Mover.prototype.display = function()
{
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, gap, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
};