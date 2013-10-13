using System;
using NUnit.Framework;
using Squarebuckle.Core;

namespace Squarebuckle.Tests.Core
{
    public class TileTest
    {
        [Test]
        public void To_String_Gives_Type_Of_Tile()
        {
            // Given
            var tile = new Tile(Tile.Types.Forest);

            // Then
            Assert.That(tile.ToString(), Is.EqualTo("Forest"));
        }
    }
}
