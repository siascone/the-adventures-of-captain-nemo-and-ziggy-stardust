import Player from './player';
import Platform from './platform';
import GenericObject from './genericObject';

import background from '../images/background.png';
import hills from '../images/hills.png'
import platform from '../images/platform.png';
import platformSmallTall from '../images/platformSmallTall.png';

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
        this.createImage = this.createImage.bind(this);
        this.setBackdrop = this.setBackdrop.bind(this);

        this.bindKeys();
    }

    createImage(imgSrc) {
        let image = new Image();
        image.src = imgSrc;
        return image
    }

    setBackdrop() {
        if (this.genericObjects.length > 0) {
            this.genericObjects = []
        }

        this.genericObjects = [
            new GenericObject(this.ctx, this.canvas, -2, -1, this.createImage(background)),
            new GenericObject(this.ctx, this.canvas, -2, -1, this.createImage(hills))
        ]
        this.genericObjects.forEach(genericObject => genericObject.draw())
    }

    makePlatforms() { // TODO make this a level class creation

        if (this.platforms.length > 0) {
            this.platforms = []
        }

        this.platforms = [
            new Platform(0, this.canvas.height - 124, this.canvas, this.ctx, this.createImage(platform)),
            new Platform(580 - 2, this.canvas.height - 124, this.canvas, this.ctx, this.createImage(platform)),
            new Platform(580 * 2 - 3, this.canvas.height - 124, this.canvas, this.ctx, this.createImage(platform)),
            new Platform(580 * 3 - 4, this.canvas.height - 124, this.canvas, this.ctx, this.createImage(platform)),
            new Platform(580 * 4 - 5, this.canvas.height - 124, this.canvas, this.ctx, this.createImage(platform)),
            new Platform(580 * 5 - 6, this.canvas.height - 124, this.canvas, this.ctx, this.createImage(platform)),
            new Platform(580 * 6 - 7, this.canvas.height - 124, this.canvas, this.ctx, this.createImage(platform)),
            new Platform(580 * 7 - 8, this.canvas.height - 124, this.canvas, this.ctx, this.createImage(platform)),
            new Platform(580 * 8 - 9, this.canvas.height - 124, this.canvas, this.ctx, this.createImage(platform)),
            new Platform(580 * 9 - 10, this.canvas.height - 124, this.canvas, this.ctx, this.createImage(platform))
        ];

        this.platforms.forEach(platform => platform.draw())
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
        this.setBackdrop();
        this.makePlatforms();
        this.resetKeys();
        this.scrollOffSet = 0;
        this.player = new Player(this.canvas, this.ctx);
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
        this.setBackdrop();

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
                this.genericObjects.forEach(object => {
                    console.log(object)
                    object.position.x -= 6
                })
            } else if (this.keys.left.pressed) {
                this.scrollOffSet -= this.player.speed;
                this.platforms.forEach(platform => {
                    platform.position.x += this.player.speed;
                });
                this.genericObjects.forEach(obj => {
                    obj.position.x += 6
                })
            }
        }

        // TODO Setup paralax scroll

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