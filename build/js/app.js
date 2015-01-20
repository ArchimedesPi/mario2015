(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./scripts/app.js":[function(require,module,exports){
var Phaser = require('./phaser');

var Game = {};
Game.Boot = require('./game/boot');
Game.Load = require('./game/load');

var game = new Phaser.Game(800, 890, Phaser.AUTO, 'game');
game.state.add('Boot', Game.Boot);
game.state.add('Load', Game.Load);
//game.state.add(Game.Menu);

game.state.start('Boot');

},{"./game/boot":"/home/ubuntu/workspace/scripts/game/boot.js","./game/load":"/home/ubuntu/workspace/scripts/game/load.js","./phaser":"/home/ubuntu/workspace/scripts/phaser.js"}],"/home/ubuntu/workspace/scripts/game/boot.js":[function(require,module,exports){
module.exports = function (game) {};
module.exports.prototype = {
	preload: function () {
		this.game.stage.backgroundColor = '#fff';
	},
	create: function() {
		this.game.state.start('Load');
	}
};
},{}],"/home/ubuntu/workspace/scripts/game/load.js":[function(require,module,exports){
module.exports = function (game) {};
module.exports.prototype = {
	preload: function () {
        //nothing
	},
	create: function () {
		//nothing
	}
};
},{}],"/home/ubuntu/workspace/scripts/phaser.js":[function(require,module,exports){
module.exports = window.Phaser;
},{}]},{},["./scripts/app.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY3JpcHRzL2FwcC5qcyIsInNjcmlwdHMvZ2FtZS9ib290LmpzIiwic2NyaXB0cy9nYW1lL2xvYWQuanMiLCJzY3JpcHRzL3BoYXNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFBoYXNlciA9IHJlcXVpcmUoJy4vcGhhc2VyJyk7XG5cbnZhciBHYW1lID0ge307XG5HYW1lLkJvb3QgPSByZXF1aXJlKCcuL2dhbWUvYm9vdCcpO1xuR2FtZS5Mb2FkID0gcmVxdWlyZSgnLi9nYW1lL2xvYWQnKTtcblxudmFyIGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoODAwLCA4OTAsIFBoYXNlci5BVVRPLCAnZ2FtZScpO1xuZ2FtZS5zdGF0ZS5hZGQoJ0Jvb3QnLCBHYW1lLkJvb3QpO1xuZ2FtZS5zdGF0ZS5hZGQoJ0xvYWQnLCBHYW1lLkxvYWQpO1xuLy9nYW1lLnN0YXRlLmFkZChHYW1lLk1lbnUpO1xuXG5nYW1lLnN0YXRlLnN0YXJ0KCdCb290Jyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChnYW1lKSB7fTtcbm1vZHVsZS5leHBvcnRzLnByb3RvdHlwZSA9IHtcblx0cHJlbG9hZDogZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuZ2FtZS5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZic7XG5cdH0sXG5cdGNyZWF0ZTogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdMb2FkJyk7XG5cdH1cbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZ2FtZSkge307XG5tb2R1bGUuZXhwb3J0cy5wcm90b3R5cGUgPSB7XG5cdHByZWxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9ub3RoaW5nXG5cdH0sXG5cdGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdC8vbm90aGluZ1xuXHR9XG59OyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LlBoYXNlcjsiXX0=
