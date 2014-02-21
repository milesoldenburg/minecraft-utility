({
    appDir : '.',
    baseUrl : 'js/lib',
    dir : '../www',
    optimizeCss : 'standard',
    inlineText: true,
    removeCombined : true,
    modules : [
        {
            name: '../main'
        }
    ],
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
})