import Game from './scripts/game';

document.addEventListener('DOMContentLoaded', () => {
    console.log("Hello World")
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1024;
    canvas.height = 576;
    
    let game = new Game(ctx, canvas);
    game.init();
    game.animate();

});