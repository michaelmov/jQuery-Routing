/* Sammy JS router module */
// var app = Sammy('#container', function() {
//     // define a 'get' route that will be triggered at '#/path'
//     this.get('#/about', function() {
//         // this context is a Sammy.EventContext
//         this.$element() // $('#main')
//             .load('views/about.html');
//     });
//     this.get('#/', function() {
//         // this context is a Sammy.EventContext
//         this.$element() // $('#main')
//             .load('views/home.html');
//     });
// });



/* Manual router module */
var router = (function() {
    var container = $('#container');
    
    $(window).on('hashchange', function() {
        loadPage(window.location.hash);
    })

    function loadPage(route) {
        switch (route) {
            case '#/about':
                container.load('views/about.html');
                break;
            default:
                container.load('views/home.html');
                break;
        }
    }

    function init() {
        if(window.location.hash) {
            router.loadPage(window.location.hash);
        } else {
            router.loadPage('#/');
        }
    }

    return {
        loadPage: loadPage,
        init: init
    }
})();