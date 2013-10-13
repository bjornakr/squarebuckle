using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Squarebuckle.Core
{
    public class Tile
    {
        public enum Types
        {
            Grass,
            Forest,
            Water
        }

        private readonly Types _type;

        public Tile(Types type)
        {
            _type = type;
        }

        public Types Type
        {
            get { return _type; }
        }

        public override String ToString()
        {
            return _type.ToString();
        }
    }
}
