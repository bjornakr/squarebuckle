using System;
using System.Web.Script.Serialization;
using NUnit.Framework;
using Newtonsoft.Json.Linq;
using System.Web.Mvc;
using Squarebuckle.Controllers;

namespace Squarebuckle.Tests.Controllers
{
    public class WorldMapControllerTest
    {
        [Test]
        public void Fetch_Map_Returns_World_Map_With_Correct_Dimensions()
        {
            // Given
            var controller = new WorldMapController();

            // When
            ContentResult worldMapResult = controller.FetchMap(width: 10, height: 20);
            JObject worldMapAsJObject = JObject.Parse(worldMapResult.Content);
            JToken tiles;
            worldMapAsJObject.TryGetValue("tiles", out tiles);
            var tilesArray = (JArray)tiles;
            var row = (JArray)tilesArray.First;

            // Then
            Assert.That(tilesArray.Count, Is.EqualTo(20));
            Assert.That(row.Count, Is.EqualTo(10));
        }
    }
}
