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

// LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOK HEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEERE
// WHEN RETURNING NEXT TIME:
// testen over funker fint, men vi trenger en til test for å sjekke at onSuccessCallBack gjør det riktige,
// som er å sette innholdet fra $.post -responsen.

// AAah nei nå vet jeg det.. vi mocker onSuccessCallBack og sjekker at den er kjørt...? eller blir det å teste for mye internals?