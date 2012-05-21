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
                var m1 = new Menu({id: 'testMenu1'}),
                    m1View = new MenuView({menu: m1, title: 'test menu 1', addClassNames: 'vertical lime'}),
                    m2 = new Menu({id: 'testMenu2'}),
                    m2View = new MenuView({menu: m1});

                m1.fetch();
                m2.fetch();
                this.$el.html(this.template());

                this.$el.append(m1View.render().$el);
                //this.$el.append(m2View.render().$el);

                _.log();
                return this;
            }
        });

    return TvView;

});
