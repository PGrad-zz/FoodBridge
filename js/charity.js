/*function fadeIn(i, elements, duration, callback){
            if(i >= elements.length)
                $.isFunction(callback) && callback();
            else
                elements.eq(i).fadeIn(duration, function(){
                   fadeIn(i+1, elements, duration, callback);
            });
        }

fadeIn(0, $('ul li'), 250)
*/
$(document).ready(function() {
	var testBlob = "                    <li>\
                        <div class=\"panel panel-default posting\">\
                            <div class=\"panel-body\">\
                                <span class='col-md-8'>\
                                    <p class='post-name'>Burritos and Tamales</p>\
                                    <p class='post-donor'> Zynga </p>\
                                    <p>40 half burritos</p>\
                                    <div class='post-description'>about 2/3 of them are vegetarian and...</div>\
                                </span>\
                                <span class='col-md-4'>\
                                    <br>\
                                     <p class='post-contact'> Contact at: </p>\
                                     <br>\
                                </span>\
                            </div>\
                        </div>\
                    </li>"
    var added = 0;
    var tempInterval = setInterval(function() {
    	$("#post-container").append(testBlob);
    	added++;
    	if (added > 10) {
    		clearInterval(tempInterval);
    	}
    }, 50)
})