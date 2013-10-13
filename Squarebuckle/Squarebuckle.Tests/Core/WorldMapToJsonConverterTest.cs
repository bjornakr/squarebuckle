using System;
using NUnit.Framework;
using Newtonsoft.Json.Linq;
using Squarebuckle.Core;

namespace Squarebuckle.Tests.Core
{
    public class WorldMapToJsonConverterTest
    {
        [Test]
        public void Map_With_Zero_Width_And_Height_Gives_Json_With_Zero_Tiles()
        {
            // Given
            var emptyMap = new WorldMap(0, 0);
            var mapConverter = new WorldMapToJsonConverter();

            // Then
            var expectedJson = new JObject(
                new JProperty("tiles", new JArray())
                );

            Assert.That(mapConverter.Convert(emptyMap), Is.EqualTo(expectedJson));
        }

        [Test]
        public void Map_With_Single_Grass_Tile_Gives_Correct_Json()
        {
            // Given
            var map = new WorldMap(1, 1);
            var mapConverter = new WorldMapToJsonConverter();

            // Then
            var row = new JArray(new object[] { new JObject(new JProperty("type", "Grass"))});
            var expectedJson = new JObject(
                new JProperty("tiles", new JArray(
                    new object[] { row }))
                );

            AssertThatActualIsExpected(mapConverter.Convert(map), expectedJson);

        }

        private void AssertThatActualIsExpected(JObject actual, JObject expected)
        {
            String expectedRealJson = expected.ToString();
            String actualRealJson = actual.ToString();

            Console.WriteLine("EXPECTED:");
            Console.WriteLine(expectedRealJson);
            Console.WriteLine("ACTUAL");
            Console.WriteLine(actualRealJson);

            // Assert.That(actual, Is.EqualTo(expected));
            Assert.That(JToken.DeepEquals(actual, expected));
        }

        [Test]
        public void Map_With_Two_Grass_Tile_Gives_Correct_Json()
        {
            // TODO: Refactor test.
            // Given
            var map = new WorldMap(1, 2);
            var mapConverter = new WorldMapToJsonConverter();

            // Then            
            var row1 = new JArray(new object[]
                                     {
                                          new JObject(new JProperty("type", "Grass")),
                                          new JObject(new JProperty("type", "Grass"))
                                      });


            //var row2 = new JArray(new object[]
            //                          {
            //                              new JObject(new JProperty("type", "Grass")),
            //                              new JObject(new JProperty("type", "Grass"))
            //                          });

            var grassTiles2 = new JArray(new JArray(new object[] { row1 }));


            var expectedJson = new JObject(new JProperty("tiles", grassTiles2));

            AssertThatActualIsExpected(mapConverter.Convert(map), expectedJson); // TODO: Make extension method.
        }
    }
}
