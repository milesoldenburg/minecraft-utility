define(['jquery', 'backbone', 'text!templates/modules.html'], function($, Backbone, ModulesTemplate){

    var view = Backbone.View.extend({
        'el' : '.content',
        'render' : function() {
            this.$el.html(ModulesTemplate);
            return this;
        }
    });

    return view;
    
});