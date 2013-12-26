define(function() {
	var _renderer;
	var _canvasApi;

	var WorldMapRendererSpecHelper = function(renderer, canvasApi) {
		_renderer = renderer;
		_canvasApi = canvasApi;
	};

	WorldMapRendererSpecHelper.prototype.shouldDrawMapWithColor = function(map, color) {
    	// Given
	    _canvasApi.fillRect = function (x, y, width, height) {
	        // Then
	        expect(_canvasApi.fillStyle).toBe(color);
	    };

	    // When
	    _renderer.renderMap(map);
	};

	return WorldMapRendererSpecHelper;
});
