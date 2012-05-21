define([
    'jQuery',
    'Underscore',
    'Backbone',
    'routers/EventDispatcher'
], function ($, _, Backbone, EventDispatcher) {

    var GenericView = Backbone.View.extend({
            globalEvents: {
                'keyUp': 'onKeyUp',
                'keyDown': 'onKeyDown',
                'keyLeft': 'onKeyLeft',
                'keyRight': 'onKeyRight',
                'keyOk': 'onKeyOk',
                'keyBack': 'onKeyBack'
            },
            onKeyUp: function GenericView_onKeyUp() {
                console.log('GenericView_onKeyUp');
            },
            onKeyDown: function GenericView_onKeyDown() {
                console.log('GenericView_onKeyDown');
            },
            onKeyLeft: function GenericView_onKeyLeft() {
                console.log('GenericView_onKeyLeft');
            },
            onKeyRight: function GenericView_onKeyRight() {
                console.log('GenericView_onKeyRight');
            },
            onKeyOk: function GenericView_onKeyOk() {
                console.log('GenericView_onKeyOk');
            },
            onKeyBack: function GenericView_onKeyBack() {
                console.log('GenericView_onKeyBack');
            },
            eventDispatcher: EventDispatcher,
            delegateEvents: function GenericView_delegateEvents(){
                Backbone.View.prototype.delegateEvents.call(this);
                for (var eventKey in this.globalEvents) {
                    var method = this.globalEvents[eventKey];

                    if (!_.isFunction(method)) method = this[method];
                    EventDispatcher.on(eventKey, _.bind(method, this)); // ???
                }
            }
        });

    return GenericView;

});







    // _.extend(rgtv.GenericView.prototype, RemoteLoggerMixin);
