var WorldMapRenderer = (function () {
    var WorldMapRenderer = function(canvas) {
        this.canvas = canvas;
    };

    WorldMapRenderer.prototype.renderMap = function (json) {
        console.log("json from server: " + json);
        for (var y = 0; y < json.tiles.length; y++) {
            for (var x = 0; x < json.tiles[y].length; x++) {
                this.canvas.fillRect(x * 10, y * 10, 10, 10);
            }
        }
    };

    return WorldMapRenderer;
})();