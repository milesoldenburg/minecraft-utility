define(['jquery', 'backbone', 'text!templates/mapper/mapper.html'], function($, Backbone, MapperTemplate){

    var view = Backbone.View.extend({
        'el' : '.content',
        'events' : {
            'change select[name="zoom-level"]' : function(event){
                this.mapOptions.zoom = parseInt($(event.currentTarget).val(), 10);
                this.renderMap();
            },
            'keyup input[name="rows"]' : function(event){
                var newRows = parseInt($(event.currentTarget).val(), 10);
                
                if (this.mapOptions.centerRow > newRows) {
                    this.mapOptions.centerRow = newRows;
                }

                this.mapOptions.rows = newRows;
                
                $('.room table td').removeClass('selected');
                
                this.drawMap();
                this.renderMap();
            },
            'keyup input[name="columns"]' : function(event){
                var newCols = parseInt($(event.currentTarget).val(), 10);
                
                if (this.mapOptions.centerCol > newCols) {
                    this.mapOptions.centerCol = newCols;
                }
                
                this.mapOptions.columns = newCols;
                
                $('.room table td').removeClass('selected');
                
                this.drawMap();
                this.renderMap();
            },
            'keyup input[name="x"]' : function(event){
                this.mapOptions.x = this.closestMultiple(parseInt($(event.currentTarget).val(), 10));                
                $('.actual-x').html(this.mapOptions.x);
                this.renderMap();
            },
            'keyup input[name="z"]' : function(event){
                this.mapOptions.z = this.closestMultiple(parseInt($(event.currentTarget).val(), 10));
                $('.actual-z').html(this.mapOptions.z);
                this.renderMap();
            },
            'click .room table td' : function(event){
                event.preventDefault();
                
                // Store the cell
                var cell = $(event.currentTarget);
                
                // Add selected class and remove from all others
                $('.room table td').removeClass('selected');
                cell.addClass('selected');
                
                this.mapOptions.centerCol = parseInt(cell.attr('data-col'), 10);
                this.mapOptions.centerRow = parseInt(cell.parent().attr('data-row'), 10);
                
                this.renderMap();
            }
        },
        'render' : function(){
            this.$el.html(MapperTemplate);
            
            this.mapOptions = {
                'rows' : parseInt($('input[name="rows"]').val(), 10),
                'columns' : parseInt($('input[name="columns"]').val(), 10),
                'zoom' : parseInt($('select[name="zoom-level"]').val(), 10),
                'x' : parseInt($('input[name="x"]').val(), 10),
                'z' : parseInt($('input[name="z"]').val(), 10),
                'centerCol' : 1,
                'centerRow' : 1
            };
            
            this.drawMap();
            this.renderMap();
            
            return this;
        },
        'closestMultiple' : function(c)  {
            // Compute the closest multiple of 128
            var closestMultiple = Math.round(c / 128) * 128;
            if (closestMultiple == -0) {
                closestMultiple = 0;
            }
            
            return closestMultiple;
        },
        'drawMap' : function(){
            var table = '';
            for (var rowIndex = 1; rowIndex <= this.mapOptions.rows; rowIndex++) {
                table += '<tr data-row="' + rowIndex + '">';
                
                for (var colIndex = 1; colIndex <= this.mapOptions.columns; colIndex++) {
                    table += '<td data-col="' + colIndex + '"';
                    
                    if (colIndex == this.mapOptions.centerCol && rowIndex == this.mapOptions.centerRow) {
                        table += ' class="selected"';
                    }
                    
                    table += '></td>';
                }
                
                table += '</tr>';
            }
            
            $('.room table').html(table);
        },
        'renderMap' : function(){
            var self = this;
            
            $('.room table td').each(function(index, element){
                var col = parseInt($(this).attr('data-col'), 10);
                var row = parseInt($(this).parent().attr('data-row'), 10);
                
                var x = ((self.mapOptions.centerCol - col) * -self.mapOptions.zoom) + self.mapOptions.x;
                var z = ((self.mapOptions.centerRow - row) * -self.mapOptions.zoom) + self.mapOptions.z;
                
                $(this).html('[' + x + ', ' + z + ']'); 
            });
        }
    });

    return view;
    
});
