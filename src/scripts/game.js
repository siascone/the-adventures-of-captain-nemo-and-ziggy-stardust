import Player from './player';
import Platform from './platform';

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
        };
        this.scrollOffSet = 0;
        this.platforms = []; // TODO make a level class that handles platforms
        this.genericObjects = [];
       
        this.bindKeys = this.bindKeys.bind(this);
        this.makePlatforms = this.makePlatforms.bind(this);
        this.platformCollision = this.platformCollision.bind(this);
        this.floorHit = this.floorHit.bind(this);
        this.win = this.win.bind(this);
        this.resetKeys = this.resetKeys.bind(this);

        this.bindKeys();
    }

    makePlatforms() { // TODO make this a level class creation

        if (this.platforms.length > 0) {
            this.platforms = [];
        }

        let platform1 = new Platform(200, 300, this.canvas, this.ctx);
        let platform2 = new Platform(500, 400, this.canvas, this.ctx);
        let platform3 = new Platform(700, 350, this.canvas, this.ctx);
        let platform4 = new Platform(1000, 350, this.canvas, this.ctx);
        let platform5 = new Platform(1200, 250, this.canvas, this.ctx);
        let platform6 = new Platform(100, (this.canvas.height - 20), this.canvas, this.ctx);

        this.platforms.push(platform1, platform2, platform3, platform4, platform5, platform6);
    }

    platformCollision() {
        this.platforms.forEach(platform => {
            if (this.player.position.y + this.player.height <= platform.position.y &&
                this.player.position.y + this.player.height + this.player.velocity.y >= platform.position.y &&
                this.player.position.x + this.player.width >= platform.position.x &&
                this.player.position.x <= platform.position.x + platform.width
                ) {
                    this.player.velocity.y = 0;
                };
        });
    };

    floorHit() {
        if (this.player.position.y >= this.canvas.height) {
           this.init();
        }
    }

    resetKeys() {
        this.keys = {
            right: {
                pressed: false
            },
            left: {
                pressed: false
            }
        };
    }

    init() {
        this.player = new Player(this.canvas, this.ctx);
        this.makePlatforms();
        this.resetKeys();
        this.scrollOffSet = 0;
    }

    win() {
        if (this.scrollOffSet > 2000) {
            console.log('you win!')
        }
    }

    animate() {
        requestAnimationFrame(this.animate);
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.platforms.forEach(platform => platform.draw());
        this.player.update();

        if (this.keys.right.pressed && this.player.position.x < 400) {
            this.player.velocity.x = this.player.speed;
        } else if (this.keys.left.pressed && this.player.position.x > 100) {
            this.player.velocity.x = -this.player.speed;
        } else {
            this.player.velocity.x = 0;

            if (this.keys.right.pressed) {
                this.scrollOffSet += this.player.speed;
                this.platforms.forEach(platform => {
                    platform.position.x -= this.player.speed;
                });
            } else if (this.keys.left.pressed) {
                this.scrollOffSet -= this.player.speed;
                this.platforms.forEach(platform => {
                    platform.position.x += this.player.speed;
                });
            }
        }

        this.platformCollision();

        this.floorHit();

        this.win();
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