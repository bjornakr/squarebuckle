using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Squarebuckle.Core
{
    public class WorldMap
    {
        public WorldMap(int i, int i1)
        {
            
        }

        public int TileCount
        {
            get { return 0; }
        }

        public Tile[,] Tiles
        {
            get {
                var tiles = new Tile[0,0];
                return tiles;
            }
        }

        public string ToJson()
        {
            return "";
        }
    }
}
