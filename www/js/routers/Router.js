define([
    'jQuery',
    'Underscore',
    'Backbone',
    'views/TvView'
], function($, _, Backbone, TvView) {

    var Router = Backbone.Router.extend({

            routes: {
                'tv/*params': 'tv',
                'tv': 'tv',
                'video/*params': 'video',
                'video': 'options',
                'options/*params': 'video',
                'options': 'options',
                '': 'tv'
            },
            initialize: function () {
//              this.mainMenu = new rgtv.MainMenu();
//              this.mainMenuView = new rgtv.MainMenuView({collection: this.mainMenu});
//              this.mainMenu.fetch();
//              $('body').append(this.mainMenuView.render().$el);

//                var tm = new rgtv.Menu([
//                      {'icon': 'icon-home', 'descr': 'tv'},
//                      {'icon': 'icon-th-list', 'descr': 'epg'},
//                      {'icon': 'icon-film', 'descr': 'video'},
//                      {'icon': 'icon-trophy', 'descr': 'game'},
//                      {'icon': 'icon-shopping-cart', 'descr': 'shop'},
//                      {'icon': 'icon-cog', 'descr': 'option'}
//                    ]),
//                    tmView = new rgtv.MenuView({menu: tm});
//
//              $('body').append(tmView.render().$el);
            },
            tv: function Router_tv(params) {
                var tvView = new TvView(paramsToHash(params));

                $('body').append(tvView.render().$el);
            },
            video: function Router_video(params) {
                var videoView = new VideoView(paramsToHash(params));

                videoView.show();
            },
            options: function Router_options(params) {
                var optionsView = new OptionsView(paramsToHash(params));

                optionsView.show();
            }
        }),
        start = function () {
            var router = new Router;

            Backbone.history.start();
        };


    return {
        start: start
    };


    function paramsToHash(params) {
        var clean = (params || '').replace(/[^a-zA-Z0-9\/=_-]/g,''),
            hash = {};

            clean.split('/').forEach(function forEachPair(pair) {
                var s = pair.split('=');
                if (s[0]) hash[s[0]] = s[1];
            });

        return hash;
    }
    // FIXME add test assert paramsToHash('a=1/bb=22/%^/=-') Object { a="1", bb="22"}
    // FIXME maybe add obj/arr handling #user/name.first=Robert/name.last=Germic/children=Peter|Laura

});


