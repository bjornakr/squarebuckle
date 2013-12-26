define(["worldMapRenderer"], function(WorldMapRenderer) {
	var WorldMapRendererFactory = function() {

	};

	WorldMapRendererFactory.prototype.create = function() {
		return new WorldMapRenderer();
	};

	return WorldMapRendererFactory;
});