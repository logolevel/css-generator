'use strict'

var rangeInput =  document.getElementById('range-input'),
    rangeView =  document.getElementById('range-view'),
    rangeOutput =  document.getElementById('range-output');

rangeInput.addEventListener('input', function() {
    var rangeValue = this.value;

    rangeView.style.borderRadius = `${rangeValue}%`;

    rangeOutput.innerHTML = 
`webkit-border-radius: ${rangeValue}%;
border-radius: ${rangeValue}%;`;
});
