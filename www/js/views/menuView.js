var rgtv = rgtv || {};

rgtv.MenuView = rgtv.GenericView.extend({
    events: _.extend({}, rgtv.GenericView.prototype.globalEvents),
    initialize: function MenuView_initialize(options) {
        this.menu = options.menu;
        this.itemViews = [];
        _.bindAll(this, 'render');

        this.menu.bind('reset', this.render, this);
        this.menu.bind('select', this.onSelect, this);

        this.template = _.template($('#menuTemplate').html());

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
            return new rgtv.MenuItemView({model: item});
        }, this);

        this.$el.html(this.template({classes: 'vertical'}));
        this.itemViews.forEach(function forEachView(itemView) {
//            this.$el.append(itemView.render().$el);
        });

        return this;
    },
    onSelect: function MenuView_onSelect(msg) {
        _.log('halo: ' + JSON.stringify(msg));
    }
});


rgtv.MenuItemView = Backbone.View.extend({
    initialize: function MenuItemView_initialize(options) {
        _.bindAll(this, 'render');
        this.template = _.template($('#menuItemTemplate').html());
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
});