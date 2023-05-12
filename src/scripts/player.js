class Player {
    constructor(canvas, ctx) {
        this.canvas = canvas
        this.ctx = ctx;
        this.position = {
            x: 100,
            y: 100
        };
        this.velocity = {
            x: 0,
            y: 0
        };
        this.width = 30;
        this.height = 30;
        this.speed = 10;
        this.gravity = 1.5
        this.draw = this.draw.bind(this);
        this.type = 'CAT';
    }

    draw() { // use drawImage for sprites
        this.ctx.fillStyle = 'blue'
        this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (this.position.y + this.height + this.velocity.y <= this.canvas.height) {
            this.velocity.y += this.gravity;
        } else {
            this.velocity.y = 0;
        }
    }
}

export default Player;