var Phaser = require('./phaser');


window.game = game = new Phaser.Game(400, 480, Phaser.AUTO, 'game');
game.state.add('Boot', require('./game/boot'));
game.state.add('Load', require('./game/load'));
//game.state.add(Game.Menu);

game.state.start('Boot');
