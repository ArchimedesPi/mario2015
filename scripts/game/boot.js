module.exports = function (game) {};
module.exports.prototype = {
	preload: function () {
		this.game.stage.backgroundColor = '#fff';
	},
	create: function() {
		this.game.state.start('Load');
	}
};