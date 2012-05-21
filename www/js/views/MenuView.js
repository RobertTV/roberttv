define([
    'jQuery',
    'Underscore',
    'Backbone',
    'views/GenericView',
    'views/MenuItemView',
    'text!templates/MenuView.html'
], function ($, _, Backbone, GenericView, MenuItemView, tpl) {

    var MenuView = GenericView.extend({
            events: _.extend({}, GenericView.prototype.globalEvents),
            template: _.template(tpl),
            className: 'menuView',
            initialize: function MenuView_initialize(options) {
                this.menu = options.menu || [];
                this.title = options.title || '';
                this.$el.addClass(options.addClassNames || '');

//                this.itemViews = [];
//                this.menu.forEach(function forEachItem(item) {
//                    this.itemViews.push(new MenuItemView());
//                }, this);
//
//                _.bindAll(this, 'render');

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

                this.$el.html(this.template({title: this.title}));
                this.itemViews.forEach(function forEachView(itemView) {
                    $('ul').append(itemView.render().$el);
                }, this);

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


















































