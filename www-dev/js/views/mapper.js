define(['jquery', 'backbone', 'text!templates/mapper/mapper.html'], function($, Backbone, MapperTemplate){

    var view = Backbone.View.extend({
        'el' : '.content',
        'events' : {
            'click a.submit' : function(event){
                event.preventDefault();
                
                var x = $('input[name="x"]').val();
                var z = $('input[name="z"]').val();
                var zoom = $('select[name="zoom-level"]').val();
                var rows = $('input[name="rows"]').val();
                var columns = $('input[name="columns"]').val();
                
                console.log(x, z, zoom, rows, columns);
                
            }
        },
        'render' : function() {
            this.$el.html(MapperTemplate);
            return this;
        }
    });

    return view;
    
});