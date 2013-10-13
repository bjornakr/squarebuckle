using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json.Linq;

namespace Squarebuckle.Core
{
    public class WorldMapToJsonConverter
    {
        public JObject Convert(WorldMap map)
        {
            var rows = new object[map.Height];

            for (int y = 0; y < map.Height; y++ )
            {
                var rowTiles = new object[map.Width];

                for (int x = 0; x < map.Width; x++)
                {
                    rowTiles[x] = new JObject(
                        new JProperty("type", "Grass")
                        );
                }
                var row = new JArray(rowTiles);
                rows[y] = row;
            }


            var baseObject = new JObject(
                new JProperty("tiles", rows)
                );


            return baseObject;



            //    if (map.Height == 0 && map.Width == 0)
            //    {
            //        return new JObject();
            //    }

            //return new JObject(
            //    new JProperty("tiles", new JArray(
            //        new JObject(
            //            new JProperty("type", "Grass")
            //            )
            //        ))
            //    );
        }
    }
}
