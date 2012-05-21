define([
    'jQuery',
    'Underscore',
    'Backbone'
], function ($, _, Backbone) {

    var MenuItem = Backbone.Model.extend({
            defaults: {
                text: '[no text]',
                icon: '[no icon]',
                selected: false
            },
            initialize: function MenuItem_initialize(options) {
                //_.log(options);
            }
        });

    return MenuItem;

});
