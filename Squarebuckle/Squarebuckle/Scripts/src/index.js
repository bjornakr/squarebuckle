console.log("ZIP!");


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

            console.log("Calling get on game.worldMap");
            console.log(game.worldMap);
            renderer.renderMap(game.worldMap);



            // TEST
            // var factory = new WorldMapRendererFactory();
            // var renderer = factory.create();
            // renderer.renderMap(game.mapOfTileTypeToColor, game.worldMap);
        });
    });
});

