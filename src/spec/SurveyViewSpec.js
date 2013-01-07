describe('Survey view', function() {
    var container, surveyView;
    
    beforeEach(function() {
	    container = $('<body/>');
	    container.addClass('survey');

	    container.append($("<div class='display'></div>"));
	    container.append($("<button id='btn0'>0</button>"));
    	container.append($("<button id='btn1'>1</button>"));
	    container.append($("<button id='btn2'>2</button>"));
	    container.append($("<button id='btnperiod'>.</button>"));
	    container.append($("<button id='btnclear' class='clear'>C</button>"));

	    var surveyView = new SurveyView();
	    surveyView.init('.survey');
    });

    afterEach(function() {
	    container.remove();
    });

    it('adds to the display when buttons are pressed', function() {
	    container.find('#btn1').click();
	    var displayText = container.find('.display').val();
	    expect(displayText).toBe('1');
    });

});
