define(["mylib", "sinon"], function(mylib, sinon) {
	describe("blah", function() {
		it("should have name", function() {
			expect(mylib.name).toBe("super library");
		});
	});
});

