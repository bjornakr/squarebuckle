using System;
using NUnit.Framework;
using Squarebuckle.Core;

namespace Squarebuckle.Tests.Core
{
    public class EmptyWorldMapBuilderTest
    {

        [Test]
        public void New_Map_Contains_Grass_Only()
        {
            // Given
            WorldMap newMap = new WorldMapBuilder().Build(30, 40);

            // Then
            for (int x = 0; x < newMap.Height; x++)
            {
                for (int y = 0; y < newMap.Width; y++)
                {
                    Assert.That(newMap[x, y].Type, Is.EqualTo(Tile.Types.Grass));
                }
            }
        }
    }
}
