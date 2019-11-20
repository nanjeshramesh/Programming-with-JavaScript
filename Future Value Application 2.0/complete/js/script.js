/*eslint-env browser*/

//GLOBAL VARIABLES
var monthlyRate;
var months;
var futureValue;
var monthlyInterest;
var rate;
var investment;
var years;
var i;
var output;
var calculate;

//GET DOM ELEMENTS
investment =    window.document.getElementById("investment");
rate =          window.document.getElementById("interest");
years =         window.document.getElementById("years");
output =        window.document.getElementById("futurevalue");
calculate =     window.document.getElementById("calculate");

//CALCULATE THE FUTURE VALUE
function calculateInvestment(investment, rate, years) {
    "use strict";
    monthlyRate =   rate / 12 / 100;
    months =        years * 12;
    futureValue =   0.0;
    
    for (i = 0; i <= months; i += 1) {
        futureValue +=      investment;
        monthlyInterest =   investment * monthlyRate;
        futureValue +=      monthlyInterest;
    }
    return futureValue;
}

//GET THE VALUES FROM THE DOM ELEMENTS, CALCULATE, AND DISPLAY RESULT
calculate.addEventListener("click", function () {
    "use strict";
    investment =    parseFloat(investment.value);
    rate =          parseFloat(rate.value);
    years =         parseInt(years.value, 10);
    
    futureValue =   calculateInvestment(investment, rate, years);
    
    output.innerHTML = "Future value: $" + Math.round(futureValue) + ".00";
});