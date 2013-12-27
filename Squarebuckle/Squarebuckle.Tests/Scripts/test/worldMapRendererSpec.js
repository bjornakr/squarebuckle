define([
    "worldMapRenderer",
    "test/worldMapRendererSpecHelper",
    "test/testMaps",
    "worldMapRendererFactory"],
    function(
        WorldMapRenderer,
        WorldMapRendererSpecHelper,
        TestMaps,
        WorldMapRendererFactory) {
    describe("World map renderer", function () {
        var canvas;
        var renderer;
        var helper;

        beforeEach(function() {
            canvas = {
                fillRect: function (x, y, width, height) { }
            };
            var mapOfTileTypeToColor = {};
            var factory = new WorldMapRendererFactory();
            renderer = factory.create(canvas, mapOfTileTypeToColor);
            helper = new WorldMapRendererSpecHelper();
        });

        it("should draw a tile from json", function() {
            // Given
            spyOn(canvas, "fillRect");

            // When
            renderer.renderMap(TestMaps.mapWithOneGrassTile);
            
            // Then
            helper.expectFillRectToBeCalledWith(canvas,
                [[0, 0, renderer.TILE_SIZE, renderer.TILE_SIZE]]
            );
        });

        it("should draw two horizontal tiles", function() {
            // Given
            spyOn(canvas, "fillRect");
            
            // When
            renderer.renderMap(TestMaps.mapWithGrassAndWaterOnOneRow);
            
            // Then
            helper.expectFillRectToBeCalledWith(canvas,
                [
                    [0, 0, renderer.TILE_SIZE, renderer.TILE_SIZE],
                    [renderer.TILE_SIZE, 0, renderer.TILE_SIZE, renderer.TILE_SIZE]
                ]);
        });

        it("should draw two vertical tiles", function() {
            // Given
            spyOn(canvas, "fillRect");

            // When
            renderer.renderMap(TestMaps.mapWithTwoVerticalTiles);
            
            // Then
            helper.expectFillRectToBeCalledWith(canvas,
                [
                    [0, 0, renderer.TILE_SIZE, renderer.TILE_SIZE],
                    [0, renderer.TILE_SIZE, renderer.TILE_SIZE, renderer.TILE_SIZE]
                ]);
        });

        it("should draw a map with height 3 and width 2", function() {
            // Given
            spyOn(canvas, "fillRect");
            var expectedFillRectArgs = [];

            for (var y = 0; y < 3; y++) {
                for (var x = 0; x < 2; x++) {
                    expectedFillRectArgs.push([
                        x * renderer.TILE_SIZE, y * renderer.TILE_SIZE,
                        renderer.TILE_SIZE, renderer.TILE_SIZE
                        ]);
                }
            }
            
            // When
            renderer.renderMap(TestMaps.mapWithWithHeight3AndWidth2);
            
            // Then
            helper.expectFillRectToBeCalledWith(canvas, expectedFillRectArgs);
        });

        it("should draw grass that is green", function() {
            var tileTypeToColorMap = {
                "Grass": "#00FF00"
            };
            helper.shouldDrawMapWithColor(TestMaps.mapWithOneGrassTile, tileTypeToColorMap,
                tileTypeToColorMap["Grass"]);
        });

        it("should draw water that is blue", function() {
            var tileTypeToColorMap = {
                "Water": "#0000FF"
            };
            helper.shouldDrawMapWithColor(TestMaps.mapWithOneWaterTile, tileTypeToColorMap,
                tileTypeToColorMap["Water"]);
        });

        it("should draw one green grass tile and one blue water tile", function() {
            // Given
            var factory = new WorldMapRendererFactory();
            var tileTypeToColorMap = {
                "Grass": "#00FF00",
                "Water": "#0000FF"
            };
            var renderer = factory.create(canvas, tileTypeToColorMap);

            var fillRectInvokeCount = 0;
            canvas.fillRect = function (x, y, width, height) {           
                // Then
                if (fillRectInvokeCount == 0) {
                    expect(canvas.fillStyle).toBe(tileTypeToColorMap["Grass"]);
                }
                else {
                    expect(canvas.fillStyle).toBe(tileTypeToColorMap["Water"]);
                }
                fillRectInvokeCount++;
            };

            // When
            renderer.renderMap(TestMaps.mapWithGrassAndWaterOnOneRow);

            // And then
            expect(fillRectInvokeCount).toBe(2);
        });

        it("should use black tile when tile type is not defined", function() {
            var tileTypeToColorMap = {};
            helper.shouldDrawMapWithColor(TestMaps.mapWithOneGrassTile, tileTypeToColorMap, "#000000");
        });
    });
});
