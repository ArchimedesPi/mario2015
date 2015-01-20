var Phaser = require('./phaser');

var Game = {};
Game.Boot = require('./game/boot');
Game.Load = require('./game/load');

var game = new Phaser.Game(400, 480, Phaser.AUTO, 'game');
game.state.add('Boot', Game.Boot);
game.state.add('Load', Game.Load);
//game.state.add(Game.Menu);

game.state.start('Boot');
