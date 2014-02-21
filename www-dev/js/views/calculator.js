define(['jqueryui', 'backbone', 'mustache', 'text!templates/calculator/calculator.html', 'text!data/recipes.json', 'text!templates/calculator/item.html'], function($, Backbone, Mustache, CalculatorTemplate, RecipeData, ItemFormTemplate){
    
    var recipes;
    var materialTotals = {};
    var baseTotals = {};
    var itemIndex = 0;
    var recipeDropdown = [];
    
    var lookupMaterials = function(recipe, needed){
        if (typeof recipes[recipe] !== 'undefined') {
            if (typeof recipes[recipe]['materials'] !== 'undefined') {
                for (var material in recipes[recipe]['materials']) {
                    var produces = recipes[recipe]['produces'];
                    var count = recipes[recipe]['materials'][material] * Math.ceil(needed / produces);
                
                    if (recipes[material]) {
                        lookupMaterials(material, count);
                    } else {
                        if (material in materialTotals) {
                            materialTotals[material] += count;
                        } else {
                            materialTotals[material] = count;
                        }
                    }             
                }
            }
        } else {
            var n = Number(needed);
        
            if (typeof materialTotals[recipe] === 'undefined') {
                materialTotals[recipe] = n;
            } else {
                materialTotals[recipe] += n;
            }
        }
    };
    
    var addItemInput = function(){
        // Increase the item inex
        itemIndex++;
    
        // Append the input to the form
        $('form .items').append(Mustache.render(ItemFormTemplate, itemIndex));
    
        // Assign the autocomplete to every item input
         // Set up autocomplete
        $('form input.recipe').autocomplete({
            source : recipeDropdown
        });
    };

    var view = Backbone.View.extend({
        'el' : '.content',
        'events' : {
            'submit form' : 'processSubmit',
            'click a.submit' : 'processSubmit',
            'click a.add-item' : function(event){
                // Prevent link from submitting
                event.preventDefault();
        
                // Add new item input
                addItemInput();
            },
            'click a.reset' : function(event){
                // Prevent link from submitting
                event.preventDefault();
        
                // Clear items div
                $('.items').empty();
                
                // Clear errors div
                $('.errors').empty();
                $('.errors').hide();
                
                // Clear results div
                $('.initial-materials-results').empty();
                $('.final-materials-results').empty();
        
                // Reset index
                itemIndex = 0;
        
                // Set up first input
                addItemInput();
            },
            'click a.recipe-remove' : function(event){
                // Prevent link from submitting
                event.preventDefault();
        
                // Remove the div that was clicked on
                $('.recipe-container-' + $(event.currentTarget).attr('data-index')).remove();
            }
        },
        'initialize' : function(){
            recipes = JSON.parse(RecipeData)
            
            // Parse recipe list into autocomplete friendly object
            $.each(recipes, function(index, value){
                var recipeObject = {
                    label : index,
                    value : index
                };
                recipeDropdown.push(recipeObject);
            });
        
            // Set up first input
            addItemInput();
        },
        'render' : function(){
            this.$el.html(Mustache.render(CalculatorTemplate, null));
            return this;
        },
        'processSubmit' : function(event){
            // Prevent it from doing the normal post
            event.preventDefault();
            
            var self = this;
    
            // Reset totals
            baseTotals = {};
            materialTotals = {};
    
            // Clear errors
            $('.errors').empty();
            $('.errors').hide();
    
            // Go through each input and create the base totals object
            $('input.recipe').each(function(index, element){
                var recipe = $.trim($(element).val());
                var needed = $.trim($(element).nextAll('input').val());
                var error = false;
        
                if (isNaN(needed)) {
                    error = true;
                    $('.errors').append('<em>' + needed + '</em> is not a valid number.<br/>');
                }
        
                if (recipe == '') {
                    error = true;
                    $('.errors').append('Recipe cannot be blank.<br/>');
                } else if (typeof recipes[recipe] === 'undefined') {
                    error = true;
                    $('.errors').append('<em>' + recipe + '</em> is not a valid recipe.<br/>');
                }
        
                if (!error) {
                    for (var material in recipes[recipe]['materials']) {
                        var n = Number(recipes[recipe]['materials'][material]) * needed;

                        if (typeof baseTotals[material] === 'undefined') {
                            baseTotals[material] = n;
                        } else {
                            baseTotals[material] += n;
                        }
                    }
                } else {
                    $('.errors').show();
                }
            });
    
            // Clear out the materials div and arrays
            $('.initial-materials-results').empty();
            $('.final-materials-results').empty();

            debugger
            // Print initial totals and compute
            $.each(baseTotals, function(index, value){
                // Print totals
                $('.initial-materials-results').append(value + ' x ' + index + '<br/>');
        
                // Compute for final totals
                lookupMaterials(index, value);
            });
    
            // Print final totals
            $.each(materialTotals, function(index, value){
                $('.final-materials-results').append(value + ' x ' + index + '<br/>');
            });
        }
    });

    return view;
    
});