import spriteRunRight from '../images/cat-run-right.png';
import spriteRunLeft from '../images/cat-run-left.png';
import spriteStandRight from '../images/cat-stand-right.png'
import spriteStandLeft from '../images/cat-stand-left.png'

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
        this.width = 64;
        this.height = 64;
        this.speed = 10;
        this.gravity = 1.5
        this.draw = this.draw.bind(this);
        this.type = 'CAT';
        this.frames = 0;
        this.sprites = {
            run: {
                right: this.createImage(spriteRunRight),
                left: this.createImage(spriteRunLeft),
                cropWidth: 64,
                width: 64
            },
            stand: {
                right: this.createImage(spriteStandRight),
                left: this.createImage(spriteStandLeft),
                cropWidth: 64,
                width: 64
            }
        }

        this.currentSprite = this.sprites.stand.right;
        this.currentCropWidth = 64

        this.createImage = this.createImage.bind(this);
    }

    createImage(imgSrc) {
        let image = new Image();
        image.src = imgSrc;
        return image
    }

    draw() { // use drawImage for sprites
        // this.ctx.fillStyle = 'blue'
        // this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        this.ctx.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            64,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    update() {

        this.frames += 1

        if (this.frames > 8 && (this.currentSprite === this.sprites.stand.right || 
            this.currentSprite === this.sprites.stand.left ||
            this.currentSprite === this.sprites.run.right ||
            this.currentSprite === this.sprites.run.left)) {
            this.frames = 0
        }

        this.draw()
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (this.position.y + this.height + this.velocity.y <= this.canvas.height) {
            this.velocity.y += this.gravity;
        } else {
            // this.velocity.y = 0;
        }
    }
}

export default Player;