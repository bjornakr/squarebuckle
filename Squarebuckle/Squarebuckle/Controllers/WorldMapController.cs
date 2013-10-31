using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Mvc;
using Newtonsoft.Json.Linq;
using Squarebuckle.Core;

namespace Squarebuckle.Controllers
{
    public class WorldMapController : Controller
    {
        public ContentResult FetchMap(int width, int height) // TODO: Bytt om på width og height.
        {
            WorldMap worldMap = new EmptyWorldMapBuilder().Build(height, width);
            var jsonConverter = new WorldMapToJsonConverter();
            JObject worldMapAsJObject = jsonConverter.Convert(worldMap);
            string mapAsJson = worldMapAsJObject.ToString();
            //return new ContentResult { Conte = mapAsJson };
            return new ContentResult { Content = mapAsJson, ContentType = "application/json" };
        }
    }
}
