define([
    'jQuery',
    'Underscore',
    'Backbone'
], function ($, _, Backbone, tpl) {

    var MenuItem = Backbone.Model.extend({
            initialize: function MenuItem_initialize(options) {
                _.log(options);
            }
        }),
        Menu = Backbone.Collection.extend({
            model: MenuItem,
            initialize: function  Menu_initialize() {
                this.selected = 0;
            },
            select: function Menu_select(idx) {
                if (!this.canSelectIndex(idx)) return false;

                var oldIndex = this.selected,
                    oldItem = this.at(oldIndex),
                    newIndex = idx,
                    newItem = this.at(newIndex),
                    selectMessage = {
                        oldIndex: oldIndex,
                        oldItem: oldItem,
                        newIndex: newIndex,
                        newItem: newItem
                    };

                this.selected = idx;

                oldItem.set({selected: false});
                newItem.set({selected: true});

                oldItem.trigger('unselect', selectMessage);
                newItem.trigger('select', selectMessage);

                console.log('Menu selected:' + this.selected);

                return true;
            },
            getSelectedIndex: function Menu_getSelectedIndex() {
                return this.selected;
            },
            getSelectedItem: function Menu_getSelectedItem() {
                return this.at(this.selected);
            },
            canSelectIndex: function Menu_canSelectIndex(index) {
                var validIndex = 0 <= index && index < this.length && index !== this.selected,
                    newItem = validIndex && this.at(index);

                return newItem && !newItem.disabled;
            },
            selectNext: function Menu_selectNext() {
                return this.select(this.getSelectedIndex() + 1);
            },
            selectPrevious: function Menu_selectPrevious(idx) {
                return this.select(this.getSelectedIndex() - 1);
            }
        });

    return Menu;

});
