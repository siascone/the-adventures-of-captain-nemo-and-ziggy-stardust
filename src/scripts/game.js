import Player from './player';

class Game {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas
        this.animate = this.animate.bind(this);
        this.player = new Player(this.canvas, this.ctx)
        this.keys = {
            right: {
                pressed: false
            },
            left: {
                pressed: false
            }
        }
        this.bindKeys = this.bindKeys.bind(this);
        this.bindKeys();
    }

    animate() {
        requestAnimationFrame(this.animate);
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.player.update();

        if (this.keys.right.pressed && this.player.position.x < 400) {
            this.player.velocity.x = this.player.speed;
        } else if (this.keys.left.pressed && this.player.position.x > 100) {
            this.player.velocity.x = -this.player.speed;
        } else {
            this.player.velocity.x = 0;


        }
    }

    bindKeys() {
        window.addEventListener('keydown', ({ keyCode }) => {
            switch(keyCode) {
                case 87: // up
                    this.player.velocity.y -= 25;
                    break; 
                case 65: // left
                    this.keys.left.pressed = true;
                    break;
                case 83: // down
                    
                    break;
                case 68: // right
                    this.keys.right.pressed = true;
                    break;

            }
        })

        window.addEventListener('keyup', ({ keyCode }) => {
            switch (keyCode) {
                case 87: // up

                    break;
                case 65: // left
                    this.keys.left.pressed = false;
                    break;
                case 83: // down

                    break;
                case 68: // right
                    this.keys.right.pressed = false;
                    break;

            }
        })
    }
}

export default Game;