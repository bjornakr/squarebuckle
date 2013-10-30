console.log("ZIP!");


$(function () {
    $("#new_map_btn").click(function () {
        console.log("POW!");
        var game = new Game();
        game.start();
        
        var c=document.getElementById("world_map_canvas");
        var ctx=c.getContext("2d");
        var renderer = new WorldMapRenderer(ctx);

        renderer.renderMap(game.worldMap);

        // var width = $("width"); // rep for height

        
        // var g = new Game(new GameCanvas(ctx, width, height));
        // var g = new Game(ctx, width, height);
        // g.start(); // starter longpolling

        // var mapAsJson = game.generatemap(width, height);
		// var renderer = new WorldMapRenderer(ctx);
        // renderer.renderMap(mapAsJson);

        /*
        $.post("Main/SquareMeUp", function (data) {
            console.log("RETURN data: " + data);
            console.log(data);
            $("#whatever").text(data);
        });
        */
    });
});

