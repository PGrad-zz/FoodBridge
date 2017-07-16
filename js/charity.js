function fadeIn(i, elements, duration, callback){
            if(i >= elements.length)
                $.isFunction(callback) && callback();
            else
                elements.eq(i).fadeIn(duration, function(){
                   fadeIn(i+1, elements, duration, callback);
            });        
        }

fadeIn(0, $('ul li'), 250, function(){console.log("animation finished!");});