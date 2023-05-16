import Player from './player';
import Platform from './platform';
import GenericObject from './genericObject';

import background from '../images/TACNAZS-background1.png';
import hills from '../images/TACNAZS_hills.png'
import platform from '../images/platform-long2.png';
import platformSmall from '../images/platform-small.png';
import platformTall from '../images/platform-tall1.png';
import platformMedium from '../images/platform-medium.png';
import platformXSmall from '../images/platform-xsmall.png';
// import mountain from '../images/mountain.png';

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
        this.background = [];
       
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

        if (this.background.length > 0) {
            this.background = [];
        }

        this.genericObjects = [
            new GenericObject(this.ctx, this.canvas, -2, -1, this.createImage(hills))
            // new GenericObject(this.ctx, this.canvas, -2, this.canvas.height - 450, this.createImage(mountain)),
            // new GenericObject(this.ctx, this.canvas, 200, this.canvas.height - 450, this.createImage(mountain)),
            // new GenericObject(this.ctx, this.canvas, 200*3, this.canvas.height - 450, this.createImage(mountain)),
            // new GenericObject(this.ctx, this.canvas, 1200, this.canvas.height - 450, this.createImage(mountain)),
            // new GenericObject(this.ctx, this.canvas, -2, this.canvas.height - 450, this.createImage(mountain)),
        ]

        this.background = [
            new GenericObject(this.ctx, this.canvas, -2, -1, this.createImage(background)),
        ]
        // this.genericObjects.forEach(genericObject => genericObject.draw())
    }

    makePlatforms() { // TODO make this a level class creation

        if (this.platforms.length > 0) {
            this.platforms = []
        }

        this.platforms = [
            // talls
            new Platform(580 * 2.5 + 96, this.canvas.height - 100 - 227, this.canvas, this.ctx, this.createImage(platformTall)),
            new Platform(580 * 5 - 5 + 159, this.canvas.height - 50 - 227, this.canvas, this.ctx, this.createImage(platformTall)),

            // shorts
            new Platform(0, this.canvas.height - 124, this.canvas, this.ctx, this.createImage(platform)),
            new Platform(580 - 2, this.canvas.height - 124, this.canvas, this.ctx, this.createImage(platform)),
            new Platform(580 * 2 - 3 + 100, this.canvas.height - 124, this.canvas, this.ctx, this.createImage(platform)),
            new Platform(580 * 3 - 4 + 450, this.canvas.height - 124, this.canvas, this.ctx, this.createImage(platform)),
            new Platform(580 * 4 - 5 + 450, this.canvas.height - 124, this.canvas, this.ctx, this.createImage(platform)),
            new Platform(580 * 5 - 6 + 850, this.canvas.height - 124, this.canvas, this.ctx, this.createImage(platform)),
            new Platform(580 * 7 - 6 + 1050, this.canvas.height - 124, this.canvas, this.ctx, this.createImage(platform)),
            new Platform(580 * 8 - 7 + 1050, this.canvas.height - 124, this.canvas, this.ctx, this.createImage(platform)),

            // smalls
            new Platform(580 * 5 - 6 + 1050, this.canvas.height - 350, this.canvas, this.ctx, this.createImage(platformSmall)),
            new Platform(580 * 5 - 6 + 1550, this.canvas.height - 270, this.canvas, this.ctx, this.createImage(platformSmall)),
            new Platform(580 * 13 - 7 + 1000, this.canvas.height - 124, this.canvas, this.ctx, this.createImage(platform)),

            // mediums
            new Platform(580 * 10 - 7 + 1050, this.canvas.height - 324, this.canvas, this.ctx, this.createImage(platformMedium)),
            new Platform(580 * 10 - 7 + 2000, this.canvas.height - 400, this.canvas, this.ctx, this.createImage(platformMedium)),

            // xsmalls
            new Platform(580 * 9 - 7 + 1050 + 100, this.canvas.height - 224, this.canvas, this.ctx, this.createImage(platformXSmall)),
            new Platform(580 * 9 - 7 + 1050 + 300, this.canvas.height - 424, this.canvas, this.ctx, this.createImage(platformXSmall)),
            new Platform(580 * 10 - 7 + 1050 + 650, this.canvas.height - 200, this.canvas, this.ctx, this.createImage(platformXSmall)),

            // new Platform(580 * 6 - 7, this.canvas.height - 124, this.canvas, this.ctx, this.createImage(platform)),
            // new Platform(580 * 7 - 8, this.canvas.height - 124, this.canvas, this.ctx, this.createImage(platform)),
            // new Platform(580 * 8 - 9, this.canvas.height - 124, this.canvas, this.ctx, this.createImage(platform)),
            // new Platform(580 * 9 - 10, this.canvas.height - 124, this.canvas, this.ctx, this.createImage(platform))
        ];

        // this.platforms.forEach(platform => platform.draw())
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
        if (this.scrollOffSet > 11500) {
            // alert('you win')
            console.log('you win!')
        }
    }

    animate() {
        requestAnimationFrame(this.animate);
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.background.forEach(obj => obj.draw());
        this.genericObjects.forEach(obj => obj.draw());
        this.platforms.forEach(platform => platform.draw());
        this.player.update();

        if (
            (this.keys.right.pressed && this.player.position.x < 400) || 
            (this.keys.right.pressed && this.scrollOffSet >= 19300 && this.player.position.x < (1024 - this.player.width))
        ) {
            this.player.velocity.x = this.player.speed;
        }  else if (
            (this.keys.left.pressed && this.player.position.x > 100) || 
            (this.keys.left.pressed && this.scrollOffSet === 0 && this.player.position.x > 0)
        ) {
            this.player.velocity.x = -this.player.speed;
        } else {
            this.player.velocity.x = 0;

            if (this.keys.right.pressed && this.scrollOffSet <= 19250) {
                this.scrollOffSet += this.player.speed;
                this.platforms.forEach(platform => {
                    platform.position.x -= this.player.speed;
                });
                
                this.genericObjects.forEach(object => {
                    object.position.x -= this.player.speed * .55
                })

                this.background.forEach(object => {
                    object.position.x -= this.player.speed * .25
                })
            } else if (this.keys.left.pressed && this.scrollOffSet > 0) {
                this.scrollOffSet -= this.player.speed;
                this.platforms.forEach(platform => {
                    platform.position.x += this.player.speed;
                });

                this.genericObjects.forEach(obj => {
                    obj.position.x += this.player.speed * .55
                });

                this.background.forEach(object => {
                    object.position.x += this.player.speed * .25
                });
            }
        }

        // TODO Setup paralax scroll

        console.log(`Scroll Offset: ${this.scrollOffSet}, Player Position: ${this.player.position.x}`)

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