_.mixin({
    log: function rgtv_log(msg) {
        var msg = arguments.length ? Array.prototype.join.call(Array.prototype.map.call(arguments, argToString), '\n') : '';

        console.log(arguments.callee.caller.name + (msg ? ': ' + msg : ''));


        function argToString(arg) {
            return _.isString(arg) ? arg : JSON.stringify(arg);
        }
    }
});
