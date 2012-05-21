define([
    'jQuery',
    'Underscore',
    'Backbone',
    'models/MenuItem',
    'text!templates/MenuItemView.html'
], function ($, _, Backbone, MenuItem, tpl) {

    var MenuItemView = Backbone.View.extend({
            tagName: 'li',
            model: MenuItem,
            template: _.template(tpl),
            initialize: function MenuItemView_initialize(options) {
                _.bindAll(this, 'render');
                this.model.bind('change:selected', this.onSelect, this);
            },
            render: function MenuItemView_render() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },
            onSelect: function MenuItemView_onSelect(msg) {
                this.$el.toggleClass('selected', this.get('selected'));
                _.log(JSON.stringify(msg));
            }
        });

    return MenuItemView;

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


















































