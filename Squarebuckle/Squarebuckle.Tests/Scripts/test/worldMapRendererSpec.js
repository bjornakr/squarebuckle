/// <reference path="../../Squarebuckle/Scripts/worldRenderer.js" />
/// <reference path="../../Squarebuckle.Tests/Scripts/sinon/sinon-1.7.3.js" />
//   baseUrl: '/base/Squarebuckle/Scripts/src',
//        "sinon": "../../../Squarebuckle.Tests/Scripts/lib/sinon-1.7.3",

define(["sinon", "worldMapRenderer", "test/worldMapRendererSpecHelper", "test/testMaps"], 
    function(sinon, WorldMapRenderer, WorldMapRendererSpecHelper, TestMaps) {
    describe("World map renderer", function ()
    {
        var canvasApi,
            mock,
            renderer,
            helper;

        beforeEach(function() {
            canvasApi = {
                fillRect: function (x, y, width, height) { }
            };
            mock = sinon.mock(canvasApi);
            renderer = new WorldMapRenderer(canvasApi);
            helper = new WorldMapRendererSpecHelper(renderer, canvasApi);
        });

        it("should draw a tile from json", function() {
            // Given
            mock.expects("fillRect").once().withExactArgs(0, 0, renderer.TILE_SIZE, renderer.TILE_SIZE);
            
            // When
            renderer.renderMap(TestMaps.mapWithOneTile);
            
            // Then
            mock.verify();
        });

        it("should draw two horizontal tiles", function() {
            // Given
            mock.expects("fillRect").once().withExactArgs(0, 0, renderer.TILE_SIZE, renderer.TILE_SIZE);
            mock.expects("fillRect").once().withExactArgs(renderer.TILE_SIZE, 0,
                renderer.TILE_SIZE, renderer.TILE_SIZE);
            
            // When
            renderer.renderMap(TestMaps.mapWithGrassAndWaterOnOneRow);
            
            // Then
            mock.verify();
        });

        it("should draw two vertical tiles", function() {
            // Given
            mock.expects("fillRect").once().withExactArgs(0, 0, renderer.TILE_SIZE, renderer.TILE_SIZE);
            mock.expects("fillRect").once().withExactArgs(0, renderer.TILE_SIZE,
                renderer.TILE_SIZE, renderer.TILE_SIZE);
            
            // When
            renderer.renderMap(TestMaps.mapWithTwoVerticalTiles);
            
            // Then
            mock.verify();
        });

        it("should draw a map with height 3 and width 2", function() {
            // Given
            for (var y = 0; y < 3; y++) {
                for (var x = 0; x < 2; x++) {
                    mock.expects("fillRect").once().withExactArgs(
                        x * renderer.TILE_SIZE, y * renderer.TILE_SIZE,
                         renderer.TILE_SIZE, renderer.TILE_SIZE);
                }
            }
            
            // When
            renderer.renderMap(TestMaps.mapWithWithHeight3AndWidth2);
            
            // Then
            mock.verify();
        });

        it("should draw grass that is green", function() {
            helper.shouldDrawMapWithColor(TestMaps.mapWithOneTile, renderer.grassColor);
        });

        it("should draw water that is blue", function() {
            helper.shouldDrawMapWithColor(TestMaps.mapWithOneWaterTile, renderer.waterColor);
        });

        it("should draw one green grass tile and one blue water tile", function() {
            // Given
            var fillRectInvokeCount = 0;
            canvasApi.fillRect = function (x, y, width, height) {           
                // Then
                if (fillRectInvokeCount == 0) {
                    expect(canvasApi.fillStyle).toBe(renderer.grassColor);
                }
                else {
                    expect(canvasApi.fillStyle).toBe(renderer.waterColor);
                }
                fillRectInvokeCount++;
            };

            // When
            renderer.renderMap(TestMaps.mapWithGrassAndWaterOnOneRow);

            // And then
            expect(fillRectInvokeCount).toBe(2);
        });

        it("should use black tile when tile type is not defined", function() {
            helper.shouldDrawMapWithColor(TestMaps.mapWithUndefinedTile, renderer.blackColor);
        });
    });
});
