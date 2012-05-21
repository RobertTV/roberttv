require({
    paths: {
        //jQuery: 'vendor/jquery/jquery-loader',
        jQuery: 'vendor/zepto/zepto-loader',
        Underscore: 'vendor/underscore/underscore-loader',
        Backbone: 'vendor/backbone/backbone-loader',
        text: 'vendor/require/text-1.0.6',
        templates: '../assets/templates'
    }
}, [
    'jQuery',
    'Underscore'
], function ($, _) {

    require([
        'Backbone',
        'utils',
        'app'
    ], function (Backbone, Utils, App) {

        App.start();

    });

});

