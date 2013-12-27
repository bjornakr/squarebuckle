var tests = Object.keys(window.__karma__.files).filter(function (file) {
      return /Spec\.js$/.test(file);
});

for (file in window.__karma__.files) {
	console.log(file);
}

requirejs.config({
    // Karma serves files from '/base'
    // baseUrl: '/base/src',
    baseUrl: '/base/Squarebuckle/Scripts/src',

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start,
    
    paths: {
    	"jquery": "../lib/jquery-2.0.3",
        "test": "../../../Squarebuckle.Tests/Scripts/test"
    },

    // shim: {
    // 	"sinon": {
    // 		exports: "sinon"
    // 	}
    // }

});