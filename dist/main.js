/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log(\"Hello World\");\n  const canvas = document.querySelector('canvas');\n  const ctx = canvas.getContext('2d');\n  canvas.width = 1024;\n  canvas.height = 576;\n  let game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, canvas);\n  game.animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBa0M7QUFFbENDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0VBQzFCLE1BQU1DLE1BQU0sR0FBR0osUUFBUSxDQUFDSyxhQUFhLENBQUMsUUFBUSxDQUFDO0VBQy9DLE1BQU1DLEdBQUcsR0FBR0YsTUFBTSxDQUFDRyxVQUFVLENBQUMsSUFBSSxDQUFDO0VBQ25DSCxNQUFNLENBQUNJLEtBQUssR0FBRyxJQUFJO0VBQ25CSixNQUFNLENBQUNLLE1BQU0sR0FBRyxHQUFHO0VBRW5CLElBQUlDLElBQUksR0FBRyxJQUFJWCxxREFBSSxDQUFDTyxHQUFHLEVBQUVGLE1BQU0sQ0FBQztFQUNoQ00sSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQztBQUVsQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGUtYWR2ZW50dXJlcy1vZi1jYXB0YWluLW5lbW8tYW5kLXppZ2d5LXN0YXJkdXN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiSGVsbG8gV29ybGRcIilcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjYW52YXMud2lkdGggPSAxMDI0O1xuICAgIGNhbnZhcy5oZWlnaHQgPSA1NzY7XG4gICAgXG4gICAgbGV0IGdhbWUgPSBuZXcgR2FtZShjdHgsIGNhbnZhcyk7XG4gICAgZ2FtZS5hbmltYXRlKCk7XG5cbn0pOyJdLCJuYW1lcyI6WyJHYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImNhbnZhcyIsInF1ZXJ5U2VsZWN0b3IiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJnYW1lIiwiYW5pbWF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\n\nclass Game {\n  constructor(ctx, canvas) {\n    this.ctx = ctx;\n    this.canvas = canvas;\n    this.animate = this.animate.bind(this);\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.canvas, this.ctx);\n    this.keys = {\n      right: {\n        pressed: false\n      },\n      left: {\n        pressed: false\n      }\n    };\n    this.bindKeys = this.bindKeys.bind(this);\n    this.bindKeys();\n  }\n  animate() {\n    requestAnimationFrame(this.animate);\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    this.player.update();\n    if (this.keys.right.pressed && this.player.position.x < 400) {\n      this.player.velocity.x = this.player.speed;\n    } else if (this.keys.left.pressed && this.player.position.x > 100) {\n      this.player.velocity.x = -this.player.speed;\n    } else {\n      this.player.velocity.x = 0;\n    }\n  }\n  bindKeys() {\n    window.addEventListener('keydown', _ref => {\n      let {\n        keyCode\n      } = _ref;\n      switch (keyCode) {\n        case 87:\n          // up\n          this.player.velocity.y -= 25;\n          break;\n        case 65:\n          // left\n          this.keys.left.pressed = true;\n          break;\n        case 83:\n          // down\n\n          break;\n        case 68:\n          // right\n          this.keys.right.pressed = true;\n          break;\n      }\n    });\n    window.addEventListener('keyup', _ref2 => {\n      let {\n        keyCode\n      } = _ref2;\n      switch (keyCode) {\n        case 87:\n          // up\n\n          break;\n        case 65:\n          // left\n          this.keys.left.pressed = false;\n          break;\n        case 83:\n          // down\n\n          break;\n        case 68:\n          // right\n          this.keys.right.pressed = false;\n          break;\n      }\n    });\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtNQUN6QyxRQUFRRixPQUFPO1FBQ1gsS0FBSyxFQUFFO1VBQUU7O1VBRUw7UUFDSixLQUFLLEVBQUU7VUFBRTtVQUNMLElBQUksQ0FBQ2xCLElBQUksQ0FBQ0csSUFBSSxDQUFDRCxPQUFPLEdBQUcsS0FBSztVQUM5QjtRQUNKLEtBQUssRUFBRTtVQUFFOztVQUVMO1FBQ0osS0FBSyxFQUFFO1VBQUU7VUFDTCxJQUFJLENBQUNGLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLEdBQUcsS0FBSztVQUMvQjtNQUVSO0lBQ0osQ0FBQyxDQUFDO0VBQ047QUFDSjtBQUVBLCtEQUFlVCxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlLWFkdmVudHVyZXMtb2YtY2FwdGFpbi1uZW1vLWFuZC16aWdneS1zdGFyZHVzdC8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcblxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5jYW52YXMsIHRoaXMuY3R4KVxuICAgICAgICB0aGlzLmtleXMgPSB7XG4gICAgICAgICAgICByaWdodDoge1xuICAgICAgICAgICAgICAgIHByZXNzZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVmdDoge1xuICAgICAgICAgICAgICAgIHByZXNzZWQ6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iaW5kS2V5cyA9IHRoaXMuYmluZEtleXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5iaW5kS2V5cygpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIHRoaXMucGxheWVyLnVwZGF0ZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLmtleXMucmlnaHQucHJlc3NlZCAmJiB0aGlzLnBsYXllci5wb3NpdGlvbi54IDwgNDAwKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci52ZWxvY2l0eS54ID0gdGhpcy5wbGF5ZXIuc3BlZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5rZXlzLmxlZnQucHJlc3NlZCAmJiB0aGlzLnBsYXllci5wb3NpdGlvbi54ID4gMTAwKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci52ZWxvY2l0eS54ID0gLXRoaXMucGxheWVyLnNwZWVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIudmVsb2NpdHkueCA9IDA7XG5cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZEtleXMoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKHsga2V5Q29kZSB9KSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2goa2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgODc6IC8vIHVwXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnZlbG9jaXR5LnkgLT0gMjU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrOyBcbiAgICAgICAgICAgICAgICBjYXNlIDY1OiAvLyBsZWZ0XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5cy5sZWZ0LnByZXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDgzOiAvLyBkb3duXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDY4OiAvLyByaWdodFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleXMucmlnaHQucHJlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKHsga2V5Q29kZSB9KSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDg3OiAvLyB1cFxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNjU6IC8vIGxlZnRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlzLmxlZnQucHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDgzOiAvLyBkb3duXG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA2ODogLy8gcmlnaHRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlzLnJpZ2h0LnByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7Il0sIm5hbWVzIjpbIlBsYXllciIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsImN0eCIsImNhbnZhcyIsImFuaW1hdGUiLCJiaW5kIiwicGxheWVyIiwia2V5cyIsInJpZ2h0IiwicHJlc3NlZCIsImxlZnQiLCJiaW5kS2V5cyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJ1cGRhdGUiLCJwb3NpdGlvbiIsIngiLCJ2ZWxvY2l0eSIsInNwZWVkIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9yZWYiLCJrZXlDb2RlIiwieSIsIl9yZWYyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Player {\n  constructor(canvas, ctx) {\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.position = {\n      x: 100,\n      y: 100\n    };\n    this.velocity = {\n      x: 0,\n      y: 0\n    };\n    this.width = 30;\n    this.height = 30;\n    this.speed = 10;\n    this.gravity = 1.5;\n    this.draw = this.draw.bind(this);\n    this.type = 'CAT';\n  }\n  draw() {\n    // use drawImage for sprites\n    this.ctx.fillStyle = 'blue';\n    this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);\n  }\n  update() {\n    this.draw();\n    this.position.x += this.velocity.x;\n    this.position.y += this.velocity.y;\n    if (this.position.y + this.height + this.velocity.y <= this.canvas.height) {\n      this.velocity.y += this.gravity;\n    } else {\n      this.velocity.y = 0;\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLE1BQU0sQ0FBQztFQUNUQyxXQUFXQSxDQUFDQyxNQUFNLEVBQUVDLEdBQUcsRUFBRTtJQUNyQixJQUFJLENBQUNELE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHO01BQ1pDLENBQUMsRUFBRSxHQUFHO01BQ05DLENBQUMsRUFBRTtJQUNQLENBQUM7SUFDRCxJQUFJLENBQUNDLFFBQVEsR0FBRztNQUNaRixDQUFDLEVBQUUsQ0FBQztNQUNKQyxDQUFDLEVBQUU7SUFDUCxDQUFDO0lBQ0QsSUFBSSxDQUFDRSxLQUFLLEdBQUcsRUFBRTtJQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7SUFDaEIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsRUFBRTtJQUNmLElBQUksQ0FBQ0MsT0FBTyxHQUFHLEdBQUc7SUFDbEIsSUFBSSxDQUFDQyxJQUFJLEdBQUcsSUFBSSxDQUFDQSxJQUFJLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDaEMsSUFBSSxDQUFDQyxJQUFJLEdBQUcsS0FBSztFQUNyQjtFQUVBRixJQUFJQSxDQUFBLEVBQUc7SUFBRTtJQUNMLElBQUksQ0FBQ1QsR0FBRyxDQUFDWSxTQUFTLEdBQUcsTUFBTTtJQUMzQixJQUFJLENBQUNaLEdBQUcsQ0FBQ2EsUUFBUSxDQUFDLElBQUksQ0FBQ1osUUFBUSxDQUFDQyxDQUFDLEVBQUUsSUFBSSxDQUFDRCxRQUFRLENBQUNFLENBQUMsRUFBRSxJQUFJLENBQUNFLEtBQUssRUFBRSxJQUFJLENBQUNDLE1BQU0sQ0FBQztFQUNoRjtFQUVBUSxNQUFNQSxDQUFBLEVBQUc7SUFDTCxJQUFJLENBQUNMLElBQUksQ0FBQyxDQUFDO0lBQ1gsSUFBSSxDQUFDUixRQUFRLENBQUNDLENBQUMsSUFBSSxJQUFJLENBQUNFLFFBQVEsQ0FBQ0YsQ0FBQztJQUNsQyxJQUFJLENBQUNELFFBQVEsQ0FBQ0UsQ0FBQyxJQUFJLElBQUksQ0FBQ0MsUUFBUSxDQUFDRCxDQUFDO0lBRWxDLElBQUksSUFBSSxDQUFDRixRQUFRLENBQUNFLENBQUMsR0FBRyxJQUFJLENBQUNHLE1BQU0sR0FBRyxJQUFJLENBQUNGLFFBQVEsQ0FBQ0QsQ0FBQyxJQUFJLElBQUksQ0FBQ0osTUFBTSxDQUFDTyxNQUFNLEVBQUU7TUFDdkUsSUFBSSxDQUFDRixRQUFRLENBQUNELENBQUMsSUFBSSxJQUFJLENBQUNLLE9BQU87SUFDbkMsQ0FBQyxNQUFNO01BQ0gsSUFBSSxDQUFDSixRQUFRLENBQUNELENBQUMsR0FBRyxDQUFDO0lBQ3ZCO0VBQ0o7QUFDSjtBQUVBLCtEQUFlTixNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlLWFkdmVudHVyZXMtb2YtY2FwdGFpbi1uZW1vLWFuZC16aWdneS1zdGFyZHVzdC8uL3NyYy9zY3JpcHRzL3BsYXllci5qcz82NDcxIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiAxMDAsXG4gICAgICAgICAgICB5OiAxMDBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMud2lkdGggPSAzMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAzMDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDEwO1xuICAgICAgICB0aGlzLmdyYXZpdHkgPSAxLjVcbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdDQVQnO1xuICAgIH1cblxuICAgIGRyYXcoKSB7IC8vIHVzZSBkcmF3SW1hZ2UgZm9yIHNwcml0ZXNcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ2JsdWUnXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuZHJhdygpXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5Lng7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnZlbG9jaXR5Lnk7XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0ICsgdGhpcy52ZWxvY2l0eS55IDw9IHRoaXMuY2FudmFzLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ICs9IHRoaXMuZ3Jhdml0eTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiXSwibmFtZXMiOlsiUGxheWVyIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJjdHgiLCJwb3NpdGlvbiIsIngiLCJ5IiwidmVsb2NpdHkiLCJ3aWR0aCIsImhlaWdodCIsInNwZWVkIiwiZ3Jhdml0eSIsImRyYXciLCJiaW5kIiwidHlwZSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidXBkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGUtYWR2ZW50dXJlcy1vZi1jYXB0YWluLW5lbW8tYW5kLXppZ2d5LXN0YXJkdXN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;