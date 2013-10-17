describe("Game", function() {

	afterEach(function() {
		jQuery.post.restore();
	});

	it("should get a world map when starting a new game", function() {
		// Given
        jQueryApi = {
            "post": function (url, onSuccessCallBack) { }
        };
        jQueryMock = sinon.mock(jQueryApi);
        jQueryMock.expects("post").once().withArgs("WorldMap/Fetch");

		var config = { "$": jQueryApi };
		var game = new Game(config);

		sinon.stub(jQuery, "post").yieldsTo("success", "json map");

		// When
		game.start();

		// Then
        jQueryMock.verify();
		expect(game.getMap()).toBe("json map");
	});
});
