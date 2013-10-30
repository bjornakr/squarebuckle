describe("Game", function() {
	var server,
		game;

	beforeEach(function() {
        server = sinon.fakeServer.create();
        game = new Game();
	});

	afterEach(function() {
        server.restore();
	});

    it("should get world map from server", function() {
        // Given
        server.respondWith("json data");
        
		// When
        game.start();
        server.respond();
        
        // Then
        expect(game.worldMap).toBe("json data");
    });

    it("should get another world map from server", function() {
        // Given
        server.respondWith("some world map");
        
		// When
        game.start();
        server.respond();
        
        // Then
        expect(game.worldMap).toBe("some world map");
    });
});
