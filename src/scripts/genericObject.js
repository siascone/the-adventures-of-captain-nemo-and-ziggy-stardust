
class GenericObject {
    constructor(ctx, canvas, x, y, image) {
        this.position = {
            x: x,
            y: y
        };
        this.ctx = ctx;
        this.canvas = canvas;
        this.image = image;
        this.height = canvas.height;
        this.width = canvas.width;
    }

    draw() {
        this.ctx.drawImage(this.image, this.position.x, this.position.y);
    };

}

export default GenericObject;