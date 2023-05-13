class Platform {
    constructor(x, y, canvas, ctx, image) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.position = {
            x: x,
            y: y
        };
        this.width = image.width;
        this.height = image.height;
        this.image = image;
    };

    draw() {   
        this.ctx.drawImage(this.image, this.position.x, this.position.y);
    };
};

export default Platform;