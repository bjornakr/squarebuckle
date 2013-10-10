using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using Squarebuckle.Core;
using Newtonsoft.Json;
using System.Linq;
using System.Linq.Expressions;

namespace Squarebuckle.Tests.Core
{
    [TestFixture]
    class WorldMapTest
    {
        private WorldMap _emptyMap;

        [SetUp]
        public void Setup()
        {
            _emptyMap = new WorldMap(0, 0);
       
        }

        [Test]
        public void Map_With_Zero_Width_And_Height_Gives_Empty_Json()
        {
            // When
            string worldMapAsJson = _emptyMap.ToJson();

            // Then
            Assert.That(worldMapAsJson, Is.Empty);
        }

        // Given
        // When
        // Then

        // TODO:
        // - worldmap has tiles
        // - worldmap has correct number of tiles according to dimensions
        // - each tile has a coordinate, and is of a specific type (tree, sand, water, etc)

        [Test]
        public void Map_With_Zero_Width_And_Height_Has_Zero_Tiles()
        {
            // When
            int tileCount = _emptyMap.TileCount;

            // Then
            Assert.That(tileCount, Is.EqualTo(0));
        }

        [Test]
        public void Can_Instantiate_Map_With_Dimensions()
        {
            Assert.That(new WorldMap(100, 100), Is.Not.Null);
        }

        [Test]
        public void New_Map_Contains_Grass_Only()
        {
            // Given
            var newMap = new WorldMap(20, 30);

            // When
            Tile[,] tiles = newMap.Tiles;

            // Then
            foreach(Tile tile in tiles)
            {
                Assert.That(tile.Type, Is.EqualTo(Tile.Types.Grass));
            }
        }

    }
}
