define(["tileType"], function(TileType) {
    var _this;

    var WorldMapRenderer = function(canvas) {
        _this = this;
        this.canvas = canvas;
        this.TILE_SIZE = 10;
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

    WorldMapRenderer.prototype.renderMap = function (jsonMap) {
        for (var y = 0; y < jsonMap.tiles.length; y++) {
            for (var x = 0; x < jsonMap.tiles[y].length; x++) {
                _renderTile(jsonMap, y, x);
            }
        }
    };

    var _renderTile = function(jsonMap, y, x) {
        _this.canvas.fillStyle = _this.blackColor;
        if (jsonMap.tiles[y][x].type === TileType.GRASS) {
            _this.canvas.fillStyle = _this.grassColor;
        }
        else if (jsonMap.tiles[y][x].type === TileType.WATER) {
            _this.canvas.fillStyle = _this.waterColor;
        }
        _this.canvas.fillRect(x * _this.TILE_SIZE, y * _this.TILE_SIZE,
            _this.TILE_SIZE, _this.TILE_SIZE);
    };

    return WorldMapRenderer;
});
