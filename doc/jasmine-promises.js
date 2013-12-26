        xit("testing jquery jasmine with promise", function() {
            var postBackPromise = new $.Deferred();
            spyOn($, "ajax").andReturn(postBackPromise);
            var responseData = { "name": "arne" };
            postBackPromise.resolve(responseData);

            $.post("WorldMap/FetchMap",
                {
                    a: 3
                }
            ).done(function (response) {
                console.log("hurra2222 response was:");
                console.log(response);
            });

        });

        xit("simple promise demo", function() {
            var promise = new $.Deferred();

            promise.done(function() {
                console.log("server data is ready...");
            });

            promise.resolve();
        });


        xit("testing jquery jasmine", function() {
            spyOn($, "ajax").andCallFake(function(params) {
                console.log(params);
                var responseData = { "name": "arne" };
                params.success(responseData);
            });

            $.post("WorldMap/FetchMap",
                {
                    a: 3
                }, function(response) {
                    console.log("hurra response was:");
                    console.log(response);
                }
            );
        });
