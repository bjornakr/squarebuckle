define(["worldMapRendererFactory"], function(WorldMapRendererFactory) {
	var _canvasApi;

	var WorldMapRendererSpecHelper = function() {
	}

	WorldMapRendererSpecHelper.prototype.shouldDrawMapWithColor = function(worldMap, tileTypeToColorMap, color) {
		// Given
		var factory = new WorldMapRendererFactory();
        var canvas = {};
        var renderer = factory.create(canvas, tileTypeToColorMap);

        canvas.fillRect = function (x, y, width, height) {
            // Then
            expect(canvas.fillStyle).toBe(color);
        };

        // When
        renderer.renderMap(worldMap);
	}

	return WorldMapRendererSpecHelper;
});
