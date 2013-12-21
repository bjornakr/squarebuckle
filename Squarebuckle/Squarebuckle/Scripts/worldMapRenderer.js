var WorldMapRenderer = (function () {
    var WorldMapRenderer = function(canvas) {
        this.canvas = canvas;
    };

    WorldMapRenderer.prototype.renderMap = function (json) { // TODO: Rename json to something better (jsonMap)
        this.canvas.fillStyle = "#00FF00";
        if (json.tiles[0][0].type === "Water") {
            this.canvas.fillStyle = "#0000FF";
        }

        for (var y = 0; y < json.tiles.length; y++) {
            for (var x = 0; x < json.tiles[y].length; x++) {
                this.canvas.fillRect(x * 10, y * 10, 10, 10);
            }
        }

    };

    return WorldMapRenderer;
})();