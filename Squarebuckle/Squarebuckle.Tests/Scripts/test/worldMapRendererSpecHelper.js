define(["worldMapRendererFactory"], function(WorldMapRendererFactory) {

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

	WorldMapRendererSpecHelper.prototype.expectFillRectToBeCalledWith = function(canvas, fillRectArgs) {
		for (var i = 0; i < fillRectArgs.length; i++) {
			expect(canvas.fillRect.calls[i].args).toEqual(fillRectArgs[i]);
		}
        expect(canvas.fillRect.callCount).toBe(fillRectArgs.length);
	}

	return WorldMapRendererSpecHelper;
});
