(function (root, $) {
    var SurveyView = function() {
    };

    function createResponderForEatsQuestion() {
        $("#eats-superawesome [name='eats-superawesome']").change(
            function () {
                toggleConsumptionDetails.call(this);
            }
        );
    }

    function toggleConsumptionDetails() {
        if ($(this).val() === 'yes') {
            $(".consuming-details").show();
        } else {
            $(".consuming-details").hide();
        }
    }

    function createResponderForAmountConsumed() {
        $("input[name='amount-consumed-response']").change(
            function () {
                showGoodCustomerMessage.call(this);
            }
        );
    }

    function showGoodCustomerMessage() {
        if ($(this).val() > 5) {
            $('#amount-consumed p').show();
        } else {
            $('#amount-consumed p').hide();
        }
    }

    function createResponderForYearsConsumed() {
        $("input[name='years-consumed-response']").change(
            function () {
                showLoyalCustomerMessage.call(this);
            }
        );
    }

    function showLoyalCustomerMessage() {
        if ($(this).val() > 3) {
            $('#years-consumed p').show();
        } else {
            $('#years-consumed p').hide();
        }
    }

    function createResponderForCuttingBack() {
        $("input[name='will-cut-back']").change(
            function () {
                showWhyCutBackDetails.call(this);
            }
        );
    }

    function showWhyCutBackDetails() {
        if ($(this).val() === 'yes') {
            $(".why-cut-back").show();
        } else {
            $(".why-cut-back").hide();
        }
    }

    SurveyView.prototype.init = function() {
        createResponderForEatsQuestion();
        createResponderForAmountConsumed();
        createResponderForCuttingBack();
        createResponderForYearsConsumed();
    };

    root.SurveyView = SurveyView;
})(window, jQuery);




