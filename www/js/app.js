/**
 * TODO
 **/

define([
    'jQuery',
    'Underscore',
    'Backbone',
    'routers/EventDispatcher',
    'routers/Router',
], function ($, _, Backbone, EventDispatcher, Router) {

    var app = (function () {
            return {
                start: function appStart() {

                    _.log();
                    window.rgtv = window.rgtv || {
                        eventDispatcher: EventDispatcher
                    };
                    Router.start();
                }
            };

        })();


    return app;

});
