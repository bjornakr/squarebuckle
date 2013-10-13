using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Squarebuckle.Core;

namespace Squarebuckle.Tests.Core
{
    class EmptyWorldMapBuilder
    {
        internal WorldMap Build(int height, int width)
        {
            var worldMap = new WorldMap(height, width);
            for (int x = 0; x < height; x++)
            {
                for (int y = 0; y < width; y++)
                {
                    worldMap[x, y] = new Tile(Tile.Types.Grass);
                }
            }
            return worldMap;
        }
    }
}
