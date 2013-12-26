define(["game"], function(Game) {

    var GameSpecHelper = function() {
    };

    Object.prototype.shouldGetWorldMapAndConfigFromServer = function(mapAndConfig) {
        var postBackPromise = new $.Deferred();

        // Given
        var game = new Game(40, 50);
        spyOn($, "ajax").andReturn(postBackPromise);
        
        // When
        game.start();
        postBackPromise.resolve(mapAndConfig);
        
        // Then
        expect(game.mapOfTileTypeToColor).toBe(mapAndConfig.mapOfTileTypeToColor);
        expect(game.worldMap).toBe(mapAndConfig.worldMap);
    };

    Object.prototype.shouldGetWorldMapFromServerWithCorrectDimensions = function(height, width) {
        // Given
        var game = new Game(height, width);
        spyOn($, "post").andReturn(new $.Deferred());

        // When
        game.start();

        // Then
        expect($.post).toHaveBeenCalledWith(Game.URL_FETCHMAP,
            {
                height: height,
                width: width
            });
    }

    Object.prototype.expectJQueryPostToHaveBeenCalledWithHeightAndWidth = function(height, width) {
        expect($.post).toHaveBeenCalledWith(Game.URL_FETCHMAP,
            {
                height: height,
                width: width
            });
    }

    return GameSpecHelper;
});