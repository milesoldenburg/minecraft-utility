define(['jquery', 'backbone', 'text!templates/portal-planner/portal-planner.html'], function($, Backbone, PortalPlannerTemplate){

    var view = Backbone.View.extend({
        'el' : '.content',
        'events' : {
            'keyup input' : function(event){
                var overworldX = parseInt($('input[name="overworld-x"]').val(), 10);
                var overworldY = parseInt($('input[name="overworld-y"]').val(), 10);
                var overworldZ = parseInt($('input[name="overworld-z"]').val(), 10);
                var netherX = parseInt($('input[name="nether-x"]').val(), 10);
                var netherY = parseInt($('input[name="nether-y"]').val(), 10);
                var netherZ = parseInt($('input[name="nether-z"]').val(), 10);
                
                console.log(overworldX, overworldY, overworldZ, netherX, netherY, netherZ);
                
                if ($(event.currentTarget).attr('data-world') === 'overworld') {
                    // an overworld coordinate was changed
                    // compute nether coords
                    var newNetherX, newNetherY, newNetherZ;
					
					newNetherX = Math.floor(overworldX/8);
					newNetherY = Math.floor(overworldY);
					newNetherZ = Math.floor(overworldZ/8);
                    
                    $('input[name="nether-x"]').val(newNetherX);
                    $('input[name="nether-y"]').val(newNetherY);
                    $('input[name="nether-z"]').val(newNetherZ);
                } else {
                    // a nether coordinate was changed
                    // compute overworld coords
                    var newOverworldX, newOverworldY, newOverworldZ;
					
					newOverworldX = Math.floor(netherX*8);
					newOverworldY = Math.floor(netherY);
					newOverworldZ = Math.floor(netherZ*8);
                    
                    $('input[name="overworld-x"]').val(newOverworldX);
                    $('input[name="overworld-y"]').val(newOverworldY);
                    $('input[name="overworld-z"]').val(newOverworldZ);
                }
            }
        },
        'render' : function(){
            this.$el.html(PortalPlannerTemplate);
            return this;
        }
    });

    return view;
    
});
