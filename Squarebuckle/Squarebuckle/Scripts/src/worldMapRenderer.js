define(function() {
    var _this;
    var _tileTypeToColor = {};
    var _canvas;

    var WorldMapRenderer = function(canvas, tileTypeToColorMap) {
        _this = this;
        _canvas = canvas;
        _tileTypeToColor = tileTypeToColorMap;
        _this.TILE_SIZE = 10;
    };

    WorldMapRenderer.prototype.colorOf = function(tileType) {
        return _tileTypeToColor[tileType];
    };

    WorldMapRenderer.prototype.renderMap = function(jsonMap) {
        for (var y = 0; y < jsonMap.tiles.length; y++) {
            for (var x = 0; x < jsonMap.tiles[y].length; x++) {
                _renderTile(jsonMap.tiles[y][x].type, y, x);
            }
        }
    };

    var _renderTile = function(tileType, y, x) {
        _setFillStyle(tileType);
        _canvas.fillRect(x * _this.TILE_SIZE, y * _this.TILE_SIZE,
            _this.TILE_SIZE, _this.TILE_SIZE);
    };

    var _setFillStyle = function(tileType) {
        var color = _tileTypeToColor[tileType];
        if (typeof(color) === 'undefined') {
            color = "#000000";
        }
        _canvas.fillStyle = color;
    }

    return WorldMapRenderer;
});
