var rgtv = rgtv || {};

rgtv.MainMenu = Backbone.Collection.extend({
    model: Backbone.Model.extend({}),
    url: 'assets/json/mainMenu.json',
    select: function MainMenu_select(idx) {
        return true;
    },
    getSelected: function MainMenu_getSelected() {
        return 1;
    }
});

rgtv.MainMenuView = Backbone.View.extend({
    initialize: function () {
        _.bindAll(this, 'render');
        this.collection.bind('reset', this.render);

        this.template = _.template($('#mainMenuTemplate').html());
        this.itemTemplate = _.template($('#mainMenuItemTemplate').html());
    },
    events:{
        "click #showMeBtn":"showMeBtnClick"
    },
    render: function MainMenuView_render() {
        //if (!this.collection) return; // FIXME do initialize

        var itemsRendered = this.collection.map(function forEachModel(m) {
                return this.itemTemplate(m.toJSON());
            }, this).join('');

        this.$el.html(this.template({items: itemsRendered}));
        return this;
    },
    showMeBtnClick:function () {
        //app.headerView.search();
    }
});


