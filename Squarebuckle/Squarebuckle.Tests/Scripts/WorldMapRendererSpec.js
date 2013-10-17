/// <reference path="../../Squarebuckle/Scripts/worldRenderer.js" />
/// <reference path="../../Squarebuckle.Tests/Scripts/sinon/sinon-1.7.3.js" />

describe("World map renderer", function ()
{
    var canvasApi,
        mock,
        renderer;

    beforeEach(function() {
        canvasApi = {
            fillRect: function (x, y, width, height) { }
        };
        mock = sinon.mock(canvasApi);
        renderer = new WorldMapRenderer(canvasApi);
    });

    var mapWithOneTile = {
        "tiles": [
            [
                {
                    "type": "Grass"
                }
            ]
        ]
    };

    var mapWithTwoHorizontalTiles = {
        "tiles": [
            [
                {
                    "type": "Grass"
                },
                {
                    "type": "Grass"
                }
            ]
        ]
    };

    var mapWithTwoVerticalTiles = {
        "tiles": [
            [
                {
                    "type": "Grass"
                }
            ],
            [
                {
                    "type": "Grass"
                }
            ]
        ]
    };

    var mapWithWithHeight3AndWidth2 = {
        "tiles": [
            [ // Row 0
                {
                    "type": "Grass"
                },
                {
                    "type": "Grass"
                }
            ],
            [ // Row 1
                {
                    "type": "Grass"
                },
                {
                    "type": "Grass"
                }
            ],
            [ // Row 2
                {
                    "type": "Grass"
                },
                {
                    "type": "Grass"
                }
            ]
        ]
    };

    it("should draw a tile from json", function() {
        // Given
        mock.expects("fillRect").once().withExactArgs(0, 0, 10, 10);
        
        // When
        renderer.renderMap(mapWithOneTile);
        
        // Then
        mock.verify();
    });

    it("should draw two horizontal tiles", function() {
        // Given
        mock.expects("fillRect").once().withExactArgs(0, 0, 10, 10);
        mock.expects("fillRect").once().withExactArgs(10, 0, 10, 10);
        
        // When
        renderer.renderMap(mapWithTwoHorizontalTiles);
        
        // Then
        mock.verify();
    });

    it("should draw two vertical tiles", function() {
        // Given
        mock.expects("fillRect").once().withExactArgs(0, 0, 10, 10);
        mock.expects("fillRect").once().withExactArgs(0, 10, 10, 10);
        
        // When
        renderer.renderMap(mapWithTwoVerticalTiles);
        
        // Then
        mock.verify();
    });

    it("should draw a map with height 3 and width 2", function() {
        // Given
        mock.expects("fillRect").once().withExactArgs(0, 0, 10, 10); // Row 0
        mock.expects("fillRect").once().withExactArgs(10, 0, 10, 10); // Row 0

        mock.expects("fillRect").once().withExactArgs(0, 10, 10, 10); // Row 1
        mock.expects("fillRect").once().withExactArgs(10, 10, 10, 10); // Row 1

        mock.expects("fillRect").once().withExactArgs(0, 20, 10, 10); // Row 2
        mock.expects("fillRect").once().withExactArgs(10, 20, 10, 10); // Row 2
        
        // When
        renderer.renderMap(mapWithWithHeight3AndWidth2);
        
        // Then
        mock.verify();
    });

    

});
