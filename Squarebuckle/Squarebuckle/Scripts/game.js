var Game = (function() {
    var Game = function(height, width) {
        this._height = height;
        this._width = width;
    };

    Object.defineProperty(Game.prototype, "worldMap", {
        get: function() {
            return this._worldMap;
        },
        set: function(value) {
            this._worldMap = value;
        }
    });

    Game.prototype.start = function(doneCallBack) { // TODO: Implement as promise.
        var _this = this;
        $.post("WorldMap/FetchMap",
            {
                height: _this._height,
                width: _this._width
            }
        ).done(function (response) {
            _this.worldMap = response;
            doneCallBack();
        });
    }

    return Game;
})();
