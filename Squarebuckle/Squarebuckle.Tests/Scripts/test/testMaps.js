define(["tileType"], function(TileType) {
    return {
        mapWithOneTile: {
            "tiles": [
                [
                    {
                        "type": TileType.GRASS
                    }
                ]
            ]
        },
        mapWithOneWaterTile: {
            "tiles": [
                [
                    {
                        "type": TileType.WATER
                    }
                ]
            ]
        },
        mapWithCustomTile: {
            "tiles": [
                [
                    {
                        "type": "CustomTile"
                    }
                ]
            ]
        },
        mapWithGrassAndWaterOnOneRow: {
            "tiles": [
                [
                    {
                        "type": TileType.GRASS
                    },
                    {
                        "type": TileType.WATER
                    }
                ]
            ]
        },
        mapWithTwoVerticalTiles: {
            "tiles": [
                [
                    {
                        "type": TileType.GRASS
                    }
                ],
                [
                    {
                        "type": TileType.GRASS
                    }
                ]
            ]
        },
        mapWithWithHeight3AndWidth2: {
            "tiles": [
                [ // Row 0
                    {
                        "type": TileType.GRASS
                    },
                    {
                        "type": TileType.GRASS
                    }
                ],
                [ // Row 1
                    {
                        "type": TileType.GRASS
                    },
                    {
                        "type": TileType.GRASS
                    }
                ],
                [ // Row 2
                    {
                        "type": TileType.GRASS
                    },
                    {
                        "type": TileType.GRASS
                    }
                ]
            ]
        },
        mapWithUndefinedTile: {
            "tiles": [
                [
                    {
                        "type": "undefinedTileType"
                    }
                ]
            ]
        }
    };
});
