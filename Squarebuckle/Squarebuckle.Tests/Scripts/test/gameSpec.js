define(["game", "test/gameSpecHelper"], function(Game, GameSpecHelper) {
    describe("Game", function() {
        var helper;

        beforeEach(function() {
            helper = new GameSpecHelper();
        });

        afterEach(function() {
        });

        it("should get world map and config from server", function() {
            var mapAndConfig = {
                mapOfTileTypeToColor: { "Test": 1 },
                worldMap: { "Test": 2 }
            };
            helper.shouldGetWorldMapAndConfigFromServer(mapAndConfig);
        });

        it("should get another world map and config from server", function() {
            var mapAndConfig = {
                mapOfTileTypeToColor: { "Test": "Testdata xxx" },
                worldMap: { "Test": "Testdata yyy" }
            };
            helper.shouldGetWorldMapAndConfigFromServer(mapAndConfig);
        });

        it("should get world map from server with correct dimensions", function() {
            helper.shouldGetWorldMapFromServerWithCorrectDimensions(40, 50);
        });

        it("should get another world map from server with correct dimensions", function() {
            helper.shouldGetWorldMapFromServerWithCorrectDimensions(90, 10);
        });

        it("start should use a promise", function() {
            // Given
            var mapAndConfig = {
                mapOfTileTypeToColor: { "Test": 1 },
                worldMap: { "Test": 2 }
            };
            var deferred = new $.Deferred();
            spyOn($, "post").andReturn(deferred);
            var game = new Game(90, 10);
            var functionWasCalled = false;

            // When
            game.start().done(function() {
                functionWasCalled = true;
            });
            deferred.resolve(mapAndConfig);

            // Then
            expect(functionWasCalled).toBeTruthy();
        });
    });
});
