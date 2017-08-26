var router = (function () {
    var $container;

    /**
     * @param  {string} route
     */
    function loadPage(route) {
        switch (route) {
            case '#/about':
                $container.load('views/about.html');
                break;
            default:
                $container.load('views/home.html');
                break;
        }
    }
    
    /**
     * @param  {string} container
     */
    function init(container) {
        $container = $(container);

        if (window.location.hash) {
            loadPage(window.location.hash);
        } else {
            loadPage('#/');
        }

        $(window).on('hashchange', function () {
            loadPage(window.location.hash);
        });
    }

    return {
        init: init
    }
})();