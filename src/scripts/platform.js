class Platform {
    constructor(x, y, canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.position = {
            x: x,
            y: y
        };
        this.width = 200;
        this.height = 20;
    };

    draw() {
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    };
};

export default Platform;