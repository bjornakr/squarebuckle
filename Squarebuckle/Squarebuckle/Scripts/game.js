var Game = (function() {
    var Game = function() {
    };

    Object.defineProperty(Game.prototype, "worldMap", {
        get: function() {
            return this._worldMap;
        },
        set: function(value) {
            this._worldMap = value;
        }
    });

    Game.prototype.start = function () {
        var _this = this;
        $.post("WorldMap/Fetch", function (response) {
            _this.worldMap = response;
        });
    }

    return Game;
})();
