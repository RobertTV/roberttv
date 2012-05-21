var rgtv = rgtv || {};

rgtv.GenericView = Backbone.View.extend({
    globalEvents : {},
    eventDispatcher: window.eventDispatcher,
    delegateEvents: function ExtView_delegateEvents(){
        Backbone.View.prototype.delegateEvents.call(this);
        for (var eventKey in this.globalEvents) {
            var method = this.globalEvents[eventKey];

            if (!_.isFunction(method)) method = this[method];
            this.eventDispatcher.on(eventKey, _.bind(method, this));
        }
    }
});

rgtv.MenuView = rgtv.GenericView.extend({
    initialize: function MenuView_initialize(options) {
        this.menu = options.menu;
        _.bindAll(this, 'render');
        this.menu.bind('reset', this.render);
        this.template = _.template($('#menuTemplate').html());
        this.itemTemplate = _.template($('#menuItemTemplate').html());

        this.menu.on('change', function () { alert('change')})


//        this.events = _.extend({}, this.genericEvents, this.events);
//        this.delegateEvents()


    },
    events: {
        'change': function () { alert('change')}
    },
    globalEvents:{
        'keyUp': 'onKeyUp',
        'keyDown': 'onKeyDown'
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
        var itemsRendered = this.menu.map(function forEachItem(item) {
                return this.itemTemplate(item.toJSON());
            }, this).join('');

        this.$el.html(this.template({items: itemsRendered, classes: 'vertical'}));
        return this;
    }
});





