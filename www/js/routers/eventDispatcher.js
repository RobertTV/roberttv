define([
    'jQuery',
    'Underscore',
    'Backbone'
], function ($, _, Backbone) {

    var eventDispatcher = _.extend({}, Backbone.Events);

    $(document).on('keyup', 'body', dispatchKeyEvent);
    _.log();

    return eventDispatcher;


    function dispatchKeyEvent(ev) {
        var keyEvent = codeToKey(ev);

        if (keyEvent) eventDispatcher.trigger(keyEvent);
    }
    function codeToKey(ev) {
        var code = ev.keyIdentifier || ev.keyCode,
            isCtrl = ev.ctrlKey,
            key = null;

        if (code == 'Up' || code == 38) {
            key = 'keyUp';
        } else if (code == 'Down' || code == 40) {
            key = 'keyDown';
        } else if (code == 'Left' || code == 37) {
            key = 'keyLeft';
        } else if (code == 'Right' || code == 39) {
            key = 'keyRight';
        } else if (code == 'Ok' || code == 13) {
            key = isCtrl ? 'keyAltOk' : 'keyOk';
        } else if (code == 'BrowserBack' || code == 8 || code == 27) {
            key = 'keyBack';
        } else {
            //console.log('codeToKey: no action for ' + code);
        }
        if (key) {
            ev.stopPropagation();
            ev.preventDefault();
        }
        return key;
    }

});
