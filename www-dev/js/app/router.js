define(
[
    'jquery',
    'backbone',
    'app/app',
    'views/header',
    'views/modules',
    'views/calculator',
    'views/mapper'
],
function(
    $,
    Backbone,
    App,
    HeaderView,
    ModulesView,
    CalculatorView,
    MapperView
){

    var router = Backbone.Router.extend({
        'initialize' : function(){
            new HeaderView().render();
        },
        'routes' : {
            '' : function(){
                if (typeof this.modulesView === 'undefined') {
                    this.modulesView = new ModulesView();
                }
                App.showView(this.modulesView);
            },
            'calculator' : function(){
                if (typeof this.calculatorView === 'undefined') {
                    this.calculatorView = new CalculatorView();
                }
                App.showView(this.calculatorView);
            },
            'mapper' : function(){
                if (typeof this.mapperView === 'undefined') {
                    this.mapperView = new MapperView();
                }
                App.showView(this.mapperView);
            }
        }
    });

    return router;

});