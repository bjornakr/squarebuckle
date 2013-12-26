define(["jquery"], function($) {
    var Game = function(height, width) {
            this._height = height;
            this._width = width;
        };

    Game.URL_FETCHMAP = "WorldMap/FetchMap";

    Object.defineProperty(Game.prototype, "worldMap", {
        get: function() {
            return this._worldMap;
        },
        set: function(value) {
            this._worldMap = value;
        }
    });

    Object.defineProperty(Game.prototype, "mapOfTileTypeToColor", {
        get: function() {
            return this._mapOfTileTypeToColor;
        },
        set: function(value) {
            this._mapOfTileTypeToColor = value;
        }
    });

    Game.prototype.start = function() {
        var _this = this;
        var postBackPromise = new $.Deferred();

        $.post(Game.URL_FETCHMAP,
            {
                height: _this._height,
                width: _this._width
            }
        ).done(function (response) {
            _this.worldMap = response.worldMap; //["worldMap"];
            _this.mapOfTileTypeToColor = response.mapOfTileTypeToColor;
            postBackPromise.resolve();
        });

        return postBackPromise;
    }

    return Game;
});
