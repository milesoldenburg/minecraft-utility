define(
[
    'jquery',
    'backbone',
    'app/app',
    'views/header',
    'views/modules',
    'views/calculator',
    'views/mapper',
    'views/portalplanner'
],
function(
    $,
    Backbone,
    App,
    HeaderView,
    ModulesView,
    CalculatorView,
    MapperView,
    PortalPlannerView
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
            },
            'portal-planner' : function(){
                if (typeof this.portalPlannerView === 'undefined') {
                    this.portalPlannerView = new PortalPlannerView();
                }
                App.showView(this.portalPlannerView);
            }
        }
    });

    return router;

});