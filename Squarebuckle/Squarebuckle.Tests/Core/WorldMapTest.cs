using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using Squarebuckle.Core;
using Newtonsoft.Json;
using System.Linq.Expressions;

namespace Squarebuckle.Tests.Core
{
    [TestFixture]
    class WorldMapTest
    {
        [Test]
        public void Height_And_Width_Of_Map_Is_Zero_When_Initialized_With_Zero()
        {
            // Given
            var emptyMap = new WorldMap(height: 0, width: 0);
            
            // Then
            Assert.That(emptyMap.Height, Is.EqualTo(0));
            Assert.That(emptyMap.Width, Is.EqualTo(0));
        }

        [Test]
        public void Height_And_Width_Of_Map_Are_As_Initialized()
        {
            // Given
            var map = new WorldMap(height: 100, width: 200);

            // Then
            Assert.That(map.Height, Is.EqualTo(100));
            Assert.That(map.Width, Is.EqualTo(200));
        }

        [Test]
        public void Can_Set_Tile()
        {
            // Given
            var newMap = new WorldMap(20, 30);
            var forestTile = new Tile(Tile.Types.Forest);

            // When
            newMap[10, 20] = forestTile;

            // Then
            Assert.That(newMap[10, 20], Is.EqualTo(forestTile));
        }

        [Test]
        public void Can_Set_Multiple_Tiles()
        {
            // Given
            var newMap = new WorldMap(10, 40);
            var waterTile = new Tile(Tile.Types.Water);
            var forestTile = new Tile(Tile.Types.Forest);

            // When
            newMap[0, 0] = waterTile;
            newMap[9, 39] = forestTile;

            // Then
            Assert.That(newMap[0, 0], Is.EqualTo(waterTile));
            Assert.That(newMap[9, 39], Is.EqualTo(forestTile));
        }
    }
}
