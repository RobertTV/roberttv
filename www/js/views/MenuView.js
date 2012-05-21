define([
    'jQuery',
    'Underscore',
    'Backbone',
    'views/GenericView',
    'text!templates/MenuView.html',
    'text!templates/MenuItemView.html'
], function ($, _, Backbone, GenericView, tpl, itemTpl) {

    var MenuItemView = Backbone.View.extend({
            template: _.template(itemTpl),
            initialize: function MenuItemView_initialize(options) {
                _.bindAll(this, 'render');
                this.model.bind('select', this.onSelect, this);
            },
            render: function MenuItemView_render() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },
            onSelect: function MenuItemView_onSelect(msg) {
                this.$el.addClass('selected');
                _.log('halo halo: ' + JSON.stringify(msg));
            }
        }),
        MenuView = GenericView.extend({
            events: _.extend({}, GenericView.prototype.globalEvents),
            template: _.template(tpl),
            className: 'MenuView',
            initialize: function MenuView_initialize(options) {
                this.menu = options.menu;
                this.itemViews = [];
                _.bindAll(this, 'render');

                this.menu.bind('reset', this.render, this);
                this.menu.bind('select', this.onSelect, this);

        //        this.menu.on('change', function () { alert('change')})
            },
            onKeyUp: function MenuView_onKeyUp() {
                console.log('MenuView_onKeyUp');
                this.menu.selectPrevious();
            },
            onKeyDown: function MenuView_onKeyDown() {
                console.log('MenuView_onKeyDown');
                this.menu.selectNext();
            },
            render: function MenuView_render() {
                this.itemViews = this.menu.map(function forEachItem(item) {
                    return new MenuItemView({model: item});
                }, this);

                this.$el.html(this.template({classes: 'vertical'}));
                this.itemViews.forEach(function forEachView(itemView) {
                    this.$el.append(itemView.render().$el);
                });

                return this;
            },
            onSelect: function MenuView_onSelect(msg) {
                _.log('halo: ' + JSON.stringify(msg));
            }
        });

    return MenuView;

});



















































/*

var menu = new Menu([
        {text: 'security', onActivate: securityMenu.open},
        {text: 'channel order', onActivate: channelOrderMenu.open},
        {text: 'channel lists', onActivate: channelListMenu.open},
    ]),
    securityMenu = new Menu([
        {text: 'parental pin', onActivate: security.changeParentalPin},
        {text: 'purchase pin', onActivate: security.changePurchasePin}
    ]);
    channelOrderMenu = new Menu([
        {text: 'Factory order', onActivate: channelOrder.setFactoryOrder},
        {text: 'Manual order', onActivate: channelOrder.setManualOrder},

    ]),
    channelListMenu = new Menu([
         {text: 'Factory order', onActivate: channelOrder.setFactoryOrder},
         {text: 'Manual order', onActivate: channelOrder.setManualOrder},
    ]);



menu.open();

*/


















































