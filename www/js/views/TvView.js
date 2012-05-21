define([
    'jQuery',
    'Underscore',
    'Backbone',
    'collections/Menu',
    'views/MenuView',
    'text!templates/TvView.html'
], function ($, _, Backbone, Menu, MenuView, tpl) {

    var TvView = Backbone.View.extend({
            className: 'TvView',
            initialize: function TvView_initialize(options) {
                _.log();
            },
            template: _.template(tpl),
            render: function TvView_render() {
                var tm = new Menu([
                       {'icon': 'icon-home', 'descr': 'tv'},
                       {'icon': 'icon-th-list', 'descr': 'epg'},
                       {'icon': 'icon-film', 'descr': 'video'},
                       {'icon': 'icon-trophy', 'descr': 'game'},
                       {'icon': 'icon-shopping-cart', 'descr': 'shop'},
                       {'icon': 'icon-cog', 'descr': 'option'}
                   ]),
                   tmView = new MenuView({menu: tm});

                _.log();
                this.$el.html(this.template());
                this.$el.append(tmView.render().$el);
                return this;
            }
        });

    return TvView;

});
