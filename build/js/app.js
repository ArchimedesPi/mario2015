(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./scripts/app.js":[function(require,module,exports){
var Phaser = require('./phaser');


window.game = game = new Phaser.Game(400, 480, Phaser.AUTO, 'game');
game.state.add('Boot', require('./game/boot'));
game.state.add('Load', require('./game/load'));
//game.state.add(Game.Menu);

game.state.start('Boot');

},{"./game/boot":"/home/ubuntu/workspace/scripts/game/boot.js","./game/load":"/home/ubuntu/workspace/scripts/game/load.js","./phaser":"/home/ubuntu/workspace/scripts/phaser.js"}],"/home/ubuntu/workspace/scripts/game/boot.js":[function(require,module,exports){
module.exports = {
	preload: function () {
		game.stage.backgroundColor = '#a9a9a9';
		game.load.image('loading', 'images/loading.png');
        game.load.image('load_progress_bar', 'images/progress_bar_bg.png');
        game.load.image('load_progress_bar_dark', 'images/progress_bar_fg.png');
	},
	create: function() {
		game.state.start('Load');
	}
};
},{}],"/home/ubuntu/workspace/scripts/game/load.js":[function(require,module,exports){
module.exports = {
	loadingLabel: function () {
	    //Here we add a label to let the user know we are loading everything
        //This is the "Loading" phrase in pixel art
        //You can just as easily change it for your own art :)
        this.loading = game.add.sprite(game.world.centerX, game.world.centerY - 20, 'loading');
        this.loading.anchor.setTo(0.5, 0.5);
        //This is the bright blue bar that is hidden by the dark bar
        this.barBg = game.add.sprite(game.world.centerX, game.world.centerY + 40, 'load_progress_bar');
        this.barBg.anchor.setTo(0.5, 0.5);
        //This bar will get cropped by the setPreloadSprite function as the game loads!
        this.bar = game.add.sprite(game.world.centerX - 192, game.world.centerY + 40, 'load_progress_bar_dark');
        this.bar.anchor.setTo(0, 0.5);
        game.load.setPreloadSprite(this.bar);
	},
	preload: function () {
	    this.loadingLabel();
	    game.load.image('mario', 'images/MarioSMBW.png'); // testing loading
	},
	create: function () {
		//nothing
	}
};
},{}],"/home/ubuntu/workspace/scripts/phaser.js":[function(require,module,exports){
module.exports = window.Phaser;
},{}]},{},["./scripts/app.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY3JpcHRzL2FwcC5qcyIsInNjcmlwdHMvZ2FtZS9ib290LmpzIiwic2NyaXB0cy9nYW1lL2xvYWQuanMiLCJzY3JpcHRzL3BoYXNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFBoYXNlciA9IHJlcXVpcmUoJy4vcGhhc2VyJyk7XG5cblxud2luZG93LmdhbWUgPSBnYW1lID0gbmV3IFBoYXNlci5HYW1lKDQwMCwgNDgwLCBQaGFzZXIuQVVUTywgJ2dhbWUnKTtcbmdhbWUuc3RhdGUuYWRkKCdCb290JywgcmVxdWlyZSgnLi9nYW1lL2Jvb3QnKSk7XG5nYW1lLnN0YXRlLmFkZCgnTG9hZCcsIHJlcXVpcmUoJy4vZ2FtZS9sb2FkJykpO1xuLy9nYW1lLnN0YXRlLmFkZChHYW1lLk1lbnUpO1xuXG5nYW1lLnN0YXRlLnN0YXJ0KCdCb290Jyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0cHJlbG9hZDogZnVuY3Rpb24gKCkge1xuXHRcdGdhbWUuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gJyNhOWE5YTknO1xuXHRcdGdhbWUubG9hZC5pbWFnZSgnbG9hZGluZycsICdpbWFnZXMvbG9hZGluZy5wbmcnKTtcbiAgICAgICAgZ2FtZS5sb2FkLmltYWdlKCdsb2FkX3Byb2dyZXNzX2JhcicsICdpbWFnZXMvcHJvZ3Jlc3NfYmFyX2JnLnBuZycpO1xuICAgICAgICBnYW1lLmxvYWQuaW1hZ2UoJ2xvYWRfcHJvZ3Jlc3NfYmFyX2RhcmsnLCAnaW1hZ2VzL3Byb2dyZXNzX2Jhcl9mZy5wbmcnKTtcblx0fSxcblx0Y3JlYXRlOiBmdW5jdGlvbigpIHtcblx0XHRnYW1lLnN0YXRlLnN0YXJ0KCdMb2FkJyk7XG5cdH1cbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdGxvYWRpbmdMYWJlbDogZnVuY3Rpb24gKCkge1xuXHQgICAgLy9IZXJlIHdlIGFkZCBhIGxhYmVsIHRvIGxldCB0aGUgdXNlciBrbm93IHdlIGFyZSBsb2FkaW5nIGV2ZXJ5dGhpbmdcbiAgICAgICAgLy9UaGlzIGlzIHRoZSBcIkxvYWRpbmdcIiBwaHJhc2UgaW4gcGl4ZWwgYXJ0XG4gICAgICAgIC8vWW91IGNhbiBqdXN0IGFzIGVhc2lseSBjaGFuZ2UgaXQgZm9yIHlvdXIgb3duIGFydCA6KVxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBnYW1lLmFkZC5zcHJpdGUoZ2FtZS53b3JsZC5jZW50ZXJYLCBnYW1lLndvcmxkLmNlbnRlclkgLSAyMCwgJ2xvYWRpbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgICAgIC8vVGhpcyBpcyB0aGUgYnJpZ2h0IGJsdWUgYmFyIHRoYXQgaXMgaGlkZGVuIGJ5IHRoZSBkYXJrIGJhclxuICAgICAgICB0aGlzLmJhckJnID0gZ2FtZS5hZGQuc3ByaXRlKGdhbWUud29ybGQuY2VudGVyWCwgZ2FtZS53b3JsZC5jZW50ZXJZICsgNDAsICdsb2FkX3Byb2dyZXNzX2JhcicpO1xuICAgICAgICB0aGlzLmJhckJnLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgICAgIC8vVGhpcyBiYXIgd2lsbCBnZXQgY3JvcHBlZCBieSB0aGUgc2V0UHJlbG9hZFNwcml0ZSBmdW5jdGlvbiBhcyB0aGUgZ2FtZSBsb2FkcyFcbiAgICAgICAgdGhpcy5iYXIgPSBnYW1lLmFkZC5zcHJpdGUoZ2FtZS53b3JsZC5jZW50ZXJYIC0gMTkyLCBnYW1lLndvcmxkLmNlbnRlclkgKyA0MCwgJ2xvYWRfcHJvZ3Jlc3NfYmFyX2RhcmsnKTtcbiAgICAgICAgdGhpcy5iYXIuYW5jaG9yLnNldFRvKDAsIDAuNSk7XG4gICAgICAgIGdhbWUubG9hZC5zZXRQcmVsb2FkU3ByaXRlKHRoaXMuYmFyKTtcblx0fSxcblx0cHJlbG9hZDogZnVuY3Rpb24gKCkge1xuXHQgICAgdGhpcy5sb2FkaW5nTGFiZWwoKTtcblx0ICAgIGdhbWUubG9hZC5pbWFnZSgnbWFyaW8nLCAnaW1hZ2VzL01hcmlvU01CVy5wbmcnKTsgLy8gdGVzdGluZyBsb2FkaW5nXG5cdH0sXG5cdGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdC8vbm90aGluZ1xuXHR9XG59OyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LlBoYXNlcjsiXX0=
