define(['jquery', 'backbone', 'text!templates/header.html'], function($, Backbone, HeaderTemplate){

    var view = Backbone.View.extend({
        'el' : '.header',
        'events' : {
            'click button#fw-treenavbutton' : function(event){
                event.preventDefault();
        
                // Remove/add open classes
                if ($(event.currentTarget).hasClass('open')) {
                    $(event.currentTarget).removeClass('open');
                    $('#fw-treenav').removeClass('open');
                } else {
                    $(event.currentTarget).addClass('open');
                    $('#fw-treenav').addClass('open');
                }
            },
            'click #treenav-primary a.maxwidth-small' : function(event){
                // Close the menus
                $('button#fw-treenavbutton').removeClass('open');
                $('#fw-treenav').removeClass('open');
            }
        },
        'render' : function() {
            this.$el.html(HeaderTemplate);
            return this;
        }
    });

    return view;
    
});