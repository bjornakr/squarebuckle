var Game = (function () {

    var Game = function(config) {
        this.config = config;
    };

    Game.prototype.start = function () {
        this.config.$.post("WorldMap/Fetch", function (response) {
            //console.log("RETURN data: nothing");
        });
    };

    Game.prototype.getMap = function () {
        return "json map";
    };

    return Game;
})();