define(["worldMapRenderer"], function(WorldMapRenderer) {
	var WorldMapRendererFactory = function() {

	};

	WorldMapRendererFactory.prototype.create = function(canvas, tileTypeToColorMap) {
		return new WorldMapRenderer(canvas, tileTypeToColorMap);
	};

	return WorldMapRendererFactory;
});