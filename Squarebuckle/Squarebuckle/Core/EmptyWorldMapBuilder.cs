using System;
namespace Squarebuckle.Core
{
    public class EmptyWorldMapBuilder
    {
        // TODO: Use uint
        public WorldMap Build(int height, int width)
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
