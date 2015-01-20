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