describe("Game", function() {
	var server;

	beforeEach(function() {
        server = sinon.fakeServer.create();
	});

	afterEach(function() {
        server.restore();
	});

    it("should get world map from server", function() {
        // Given
        var game = new Game(40, 50);

        // TODO: // "json data"->should be json, not a string, to reflect the actual server's response
        server.respondWith("json data"); 
        
		// When
        game.start(function() { });
        server.respond();
        
        // Then
        expect(game.worldMap).toBe("json data");
    });

    it("should get another world map from server", function() {
        // Given
        var game = new Game(40, 50);

        // TODO "some world map" ->should be json, not a string, to reflect the actual server's response
        server.respondWith("some world map");
        
		// When
        game.start(function() { });
        server.respond();
        
        // Then
        expect(game.worldMap).toBe("some world map");
    });

    it("should get world map from server with correct dimensions", function() {
        // Given
        var game = new Game(40, 50);
        _spyOnJQueryPost();

        // When
        game.start(function() { });

        // Then
        _expectJQueryPostToHaveBeenCalledWithHeightAndWidth(40, 50);
    });

    var _spyOnJQueryPost = function() {
        server.respondWith("{ someProperty: 'some world map, but that is irrelevant for this test' }");
        sinon.spy(jQuery, "post");
    };

    var _expectJQueryPostToHaveBeenCalledWithHeightAndWidth = function(height, width) {
        var spyCall = jQuery.post.getCall(0);
        expect(spyCall.args[1]).toEqual(
        {
            height: height,
            width: width
        });
        jQuery.post.restore();
    };

    it("should get another world map from server with correct dimensions", function() {
        // Given
        var game = new Game(90, 10);
        _spyOnJQueryPost();

        // When
        game.start(function() { });

        // Then
        _expectJQueryPostToHaveBeenCalledWithHeightAndWidth(90, 10);
    });

    it("start should use a promise", function() {
        // Given
        server.respondWith("{ someProperty: 'some world map, but that is irrelevant for this test' }");
        var game = new Game(90, 10);
        var functionWasCalled = false;

        // When
        game.start().done(function() {
            functionWasCalled = true;
        });
        server.respond();

        // Then
        expect(functionWasCalled).toBeTruthy();
    });
});
