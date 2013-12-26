define(["worldMapRendererFactory", "worldMapRenderer"], function(Factory, WorldMapRenderer) {
	describe("worldMapRendererFactory", function() {
		it("should create a WorldMapRenderer", function() {
			// Given
			var factory = new Factory();

			// When
			var renderer = factory.create();

			// Then
			expect(renderer instanceof WorldMapRenderer).toBeTruthy();
		});

		it("should configure renderer with correct tile types to colors", function() {
			// Given
			var factory = new Factory();
			var mapOfTileTypeToColor = {
				"Mud": "#234567",
				"Lava": "#FF1234"
			};

			// When
			var renderer = factory.create(mapOfTileTypeToColor);

			// Then
			expect(renderer.colorOf("Mud")).toBe(colorConfig["Mud"]);
			expect(renderer.colorOf("Lava")).toBe(colorConfig["Lava"]);
		});

		xit("should get a tile and color specification from the server", function() {
			// Given
			var colorConfig = {
				"Mud": "#234567",
				"Lava": "#FF1234"
			};

            server.respondWith(JSON.stringify(colorConfig));
			var factory = new Factory();

			// When
			var renderer = factory.create();
			server.respond();

			// Then
			expect(renderer.colorOf("Mud")).toBe(colorConfig["Mud"]);
			expect(renderer.colorOf("Lava")).toBe(colorConfig["Lava"]);
		});
	});
});