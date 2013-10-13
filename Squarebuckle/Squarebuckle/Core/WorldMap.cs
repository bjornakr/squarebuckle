using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Squarebuckle.Core
{
    public class WorldMap
    {
        private readonly Tile[,] _tiles;

        public Tile this[int x, int y]
        {
            get
            {
                return _tiles[x, y];
            }
            set
            {
                _tiles[x, y] = value;
            }
        }

        public WorldMap(int height, int width)
        {
            _tiles = new Tile[height, width];
        }

        public int Height
        {
            get { return _tiles.GetLength(0); }
        }

        public int Width
        {
            get { return _tiles.GetLength(1); }
        }
    }
}
