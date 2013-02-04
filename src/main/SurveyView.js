var SurveyView = function() {
};

SurveyView.prototype.init = function() {
    $("input[name='eats-superawesome']",$('#eats-superawesome')).change(
        function(e)
        {
            toggleConsumptionDetails.call(this);
        }
    );

//    var wrapper = $();

//    $("button").click(function() {
//        $("div").hide();
//    });

//    $("#consuming-details").hide();
//    var display = wrapper.find('.display');
//    
//    wrapper.find('button').click(function(ev) {
//	    var buttonText = $(ev.currentTarget).text();
//	    var oldValue = display.val();
//	    var newValue = oldValue;
//	    if (oldValue.indexOf('.') === -1 || buttonText !== '.') {
//	        newValue = oldValue + buttonText;
//	    }
//	    while (newValue.length > 1 && newValue.indexOf('0') == 0) {
//    	    if (newValue.length > 2 || buttonText !== '.') {
//		    newValue = newValue.substring(1);
//	        } else {
//		        break;
//	        }
//	    }
//	    display.val(newValue);
//    });
//    
//    wrapper.find('button.clear').click(function(ev) {
//	    display.val('0');
//    });

};

window.SurveyView = SurveyView;

function toggleConsumptionDetails() {
    if ($(this).val() === 'yes') {
        $(".consuming-details").show();
    } else {
        $(".consuming-details").hide();
    }
}

