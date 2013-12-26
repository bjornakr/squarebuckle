define(["tileType"], function(TileType) {
    var _this;
    var _tileTypeToColor = {};

    var WorldMapRenderer = function(canvas) {
        _this = this;
        this.canvas = canvas;
        this.TILE_SIZE = 10;

        _tileTypeToColor[TileType.GRASS] = this.grassColor;
        _tileTypeToColor[TileType.WATER] = this.waterColor;
    };

    Object.defineProperty(WorldMapRenderer.prototype, "grassColor", {
        get: function() {
            return "#00FF00";
        }
    });

    Object.defineProperty(WorldMapRenderer.prototype, "waterColor", {
        get: function() {
            return "#0000FF";
        }
    });

    Object.defineProperty(WorldMapRenderer.prototype, "blackColor", {
        get: function() {
            return "#000000";
        }
    });

    WorldMapRenderer.prototype.mapTileTypeToColor = function (tileType, color) {
        _tileTypeToColor[tileType] = color;
    };

    WorldMapRenderer.prototype.colorOf = function (tileType) {
        return _tileTypeToColor[tileType];
    };

    WorldMapRenderer.prototype.renderMap = function (jsonMap) {
        for (var y = 0; y < jsonMap.tiles.length; y++) {
            for (var x = 0; x < jsonMap.tiles[y].length; x++) {
                _renderTile(jsonMap.tiles[y][x].type, y, x);
            }
        }
    };

    var _renderTile = function(tileType, y, x) {
        _setFillStyle(tileType);
        _this.canvas.fillRect(x * _this.TILE_SIZE, y * _this.TILE_SIZE,
            _this.TILE_SIZE, _this.TILE_SIZE);
    };

    var _setFillStyle = function(tileType) {
        var color = _tileTypeToColor[tileType];
        if (typeof(color) === 'undefined') {
            color = _this.blackColor;
        }
        _this.canvas.fillStyle = color;
    }

    return WorldMapRenderer;
});
