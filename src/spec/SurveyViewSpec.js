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
        var details = $('<div class="consuming-details" hidden="true"/>').appendTo(container);
        details.append($('<div id="amount-consumed"><input type="text" name="amount-consumed-response"><p hidden="true">Thanks for being a great customer!</p></div>'));
        details.append($('<div id="years-consumed"><input type="text" name="years-consumed-response"><p hidden="true">Thanks for being so loyal!</p></div>'));
        details.append($('<div id="cut-back"><input type="RADIO" name="will-cut-back" value="yes"><input type="RADIO" name="will-cut-back" value="no"><div class="why-cut-back" hidden="true"></div>'))

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
        var consumingDetails = container.find(".consuming-details");  //$(".consuming-details", container)
        expect(consumingDetails.is(":visible")).toBe(false);
    });

    it('thanks a great customer if eat more than 5 per week', function() {
        $(".consuming-details").show();
        $('input[name="amount-consumed-response"]').val(6).change();
        var message = container.find('#amount-consumed p');
        expect(message.is(":visible")).toBe(true);

    });

    it('does not thank customer if eats 5 or less per week', function() {
        $(".consuming-details").show();
        $('input[name="amount-consumed-response"]').val(5).change();
        var message = container.find('#amount-consumed p');
        expect(message.is(":visible")).toBe(false);

    });

    it('hides good customer message if amount is changed from > 5 to less', function() {
        $(".consuming-details").show();
        $('input[name="amount-consumed-response"]').val(6).change();
        $('input[name="amount-consumed-response"]').val(5).change();
        var message = container.find('#amount-consumed p');
        expect(message.is(":visible")).toBe(false);
    });

    it('shows loyal message if years eating is greater than 3', function() {
        $(".consuming-details").show();
        $('input[name="years-consumed-response"]').val(4).change();
        var message = container.find('#years-consumed p');
        expect(message.is(":visible")).toBe(true);
    });

    it('does not show loyal message if years eating is 3 or less', function() {
        $(".consuming-details").show();
        $('input[name="years-consumed-response"]').val(3).change();
        var message = container.find('#years-consumed p');
        expect(message.is(":visible")).toBe(false);
    });

    it('hides loyal message if years eating changes from greater than 3 to 3 or less', function() {
        $(".consuming-details").show();
        $('input[name="years-consumed-response"]').val(4).change();
        $('input[name="years-consumed-response"]').val(2).change();
        var message = container.find('#years-consumed p');
        expect(message.is(":visible")).toBe(false);
    });

    it('shows "why cutting back" question if user says will try to cut back', function() {
        $(".consuming-details").show();
        $('input[name="will-cut-back"][value="yes"]:radio').click();
        var details = container.find('.why-cut-back');
        expect(details.is(":visible")).toBe(true);
    });

    it('hides "why cutting back" question if user says will not try to cut back', function() {
        $(".consuming-details").show();
        $('input[name="will-cut-back"][value="no"]:radio').click();
        var details = container.find('.why-cut-back');
        expect(details.is(":visible")).toBe(false);
    });


//    it('adds to the display when buttons are pressed', function() {
//	    container.find('#btn1').click();
//	    var displayText = container.find('.display').val();
//	    expect(displayText).toBe('1');
//    });

});
