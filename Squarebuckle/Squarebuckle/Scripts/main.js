require(["jquery", "game", "worldMapRenderer"], function ($, Game, WorldMapRenderer) {
    $(function () {
        $("#new_map_btn").click(function () {
            var height = $("#height").val();
            var width = $("#width").val();

            console.log("POW!");
            var game = new Game(height, width);
            game.start().done(function() {
                var c=document.getElementById("world_map_canvas");
                var ctx=c.getContext("2d");
                var renderer = new WorldMapRenderer(ctx);

                renderer.renderMap(game.worldMap);
            });
        });
    });
});
