require.config({
    baseUrl : 'js/lib',
    paths : {
        app : '../app',
        backbone : 'backbone-min',
        data : '../data',
        jquery : 'jquery-1.10.2.min',
        jqueryui : 'jquery-ui-1.10.3.custom.min',
        models : '../models',
        templates : '../../templates',
        underscore : 'underscore-min',
        views : '../views'
    },
    shim : {
        'backbone' : {
            deps : ['underscore', 'jquery'],
            exports : 'Backbone'
        },
        'underscore' : {
            exports : '_'
        },
        'jqueryui' : {
            deps : ['jquery'],
            exports : '$'
        }
    },
    urlArgs : 'bust=' + (new Date()).getTime()
});

require(['backbone', 'app/router', 'jquery'], function(Backbone, Router, $){

    $(document).ready(function(){
        // Set up the router
        var router = new Router();

        // Start the history
        Backbone.history.start();
    });

});
