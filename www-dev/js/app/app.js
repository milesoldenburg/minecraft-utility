define(['jquery', 'backbone'], function($, Backbone){
	
    var currentView;
    
    var showView = function(_view){
        if (currentView && currentView.undelegateEvents) {
            currentView.undelegateEvents();
        }
        currentView = _view;
        currentView.delegateEvents();
        currentView.render();
    };
    
    return {
        'showView' : showView
    };
	
});