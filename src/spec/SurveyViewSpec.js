describe('Survey view', function() {
    var container, surveyView;
    
    beforeEach(function() {
	    container = $('<div/>');
	    container.addClass('survey');

	    //container.append($("<div class='display'></div>"));
	    //container.append($("<button id='btn0'>0</button>"));
        container.appendTo(document.body);
        container.append($(
            '<div id="eats-superawesome"><input type="RADIO" name="eats-superawesome" value="yes">Yes</input><input type="RADIO" name="eats-superawesome" value="no">No</input></div>'
        ));
        container.append($('<div class="consuming-details" hidden="true"/>'));

	    surveyView = new SurveyView();
	    surveyView.init('.survey');
    });

    afterEach(function() {
	    container.remove();
    });

    it('loads consumption details hidden, just initial question showing', function() {
        var consumingDetails = container.find(".consuming-details");
        expect(consumingDetails.is(":visible")).toBe(false);
    });

    it('shows the survey details if user selects yes to initial question', function() {
        $('input[value="yes"]:radio').click();
        var consumingDetails = container.find(".consuming-details");
        expect(consumingDetails.is(":visible")).toBe(true);
    });

    it('hides the survey details if user changes to no', function() {
        $('input[value="yes"]:radio').click();
        $('input[value="no"]:radio').click();
        var consumingDetails = container.find(".consuming-details");
        expect(consumingDetails.is(":visible")).toBe(false);
    });

//    it('adds to the display when buttons are pressed', function() {
//	    container.find('#btn1').click();
//	    var displayText = container.find('.display').val();
//	    expect(displayText).toBe('1');
//    });

});
