// JavaScript Document

var backup_set;

window.onload = function(){
	 window.location.hash = '#home';
	 check_hash();
};
 
$(window).on('hashchange', function() {
       
	 var previous_hash = old_hash.split('#');
	     check_hash(previous_hash[1]); 
});

function backup(){
	
	  
	  window.backup_set = true;
	  history.back();
}
 
function check_hash(previous_hash){
    this.previous_hash = previous_hash;
     var hash = window.location.hash;
 
	if(this.previous_hash === 'undefined'){
		  
	}else if(window.backup_set === true){
	
		$('#'+this.previous_hash+'_main_content').hide('slide', {direction: 'right'}, 400,function(){
	 
	      $(hash+'_main_content').show('slide', {direction: 'left'}, 400);
		 });
		
		window.backup_set = false;
	
	}else{
		 
		$('#'+this.previous_hash+'_main_content').hide('slide', {direction: 'left'}, 40,function(){
	 
	      $(hash+'_main_content').show('slide', {direction: 'right'}, 400);
		 });
		 
	}
	var old_hash =  location.href;
	 window.old_hash = old_hash;
}


function number_verify(input, id){
   var RegExp = /^-?(\d)+(((\.*){1}(\d))|(\.*){0})| .?  $/;
   var result = RegExp.test(input);
     this.id = id;
  if(result === true){
	  
		  
  } else if(result === false){
	  
	document.getElementById(this.id).value = '';
  }

}

// Closure
(function(){

	/**
	 * Decimal adjustment of a number.
	 *
	 * @param	{String}	type	The type of adjustment.
	 * @param	{Number}	value	The number.
	 * @param	{Integer}	exp		The exponent (the 10 logarithm of the adjustment base).
	 * @returns	{Number}			The adjusted value.
	 */
	function decimalAdjust(type, value, exp) {
		// If the exp is undefined or zero...
		if (typeof exp === 'undefined' || +exp === 0) {
			return Math[type](value);
		}
		value = +value;
		exp = +exp;
		// If the value is not a number or the exp is not an integer...
		if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
			return NaN;
		}
		// Shift
		value = value.toString().split('e');
		value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
		// Shift back
		value = value.toString().split('e');
		return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
	}

	// Decimal round
	if (!Math.round10) {
		Math.round10 = function(value, exp) {
			return decimalAdjust('round', value, exp);
		};
	}
	// Decimal floor
	if (!Math.floor10) {
		Math.floor10 = function(value, exp) {
			return decimalAdjust('floor', value, exp);
		};
	}
	// Decimal ceil
	if (!Math.ceil10) {
		Math.ceil10 = function(value, exp) {
			return decimalAdjust('ceil', value, exp);
		};
	}

})();

function calculate_square(){
	 var squareHeight = $('#squareHeight').val();
	 var squareHeightUnit = $('#squareHeightVal').val();
	 var squareWidth =   $('#squareWidth').val();
	  var squareWidthUnit = $('#squareWidthVal').val();
	 var squareDepth =   $('#squareDepth').val();
	  var squareDepthUnit = $('#squareDepthVal').val();
       
	squareHeight =  returnUnitInYards(squareHeight, squareHeightUnit); 
	squareWidth =  returnUnitInYards(squareWidth, squareWidthUnit);
	squareDepth =  returnUnitInYards(squareDepth, squareDepthUnit);
     	var answer = squareHeight*squareWidth*squareDepth;
            var answerwaste = (squareHeight*squareWidth*squareDepth)*1.1
	     var theResult = (answer).toFixed(2);
	       var theResultwaste = Math.round(answerwaste*2)/2;
	$('#calcsquare_result').html('The exact quantity is&nbsp&nbsp'+theResult+' yd<sup>3</sup><br><br>Due to waste & spillage,<br> consider ordering&nbsp'+theResultwaste+' yd<sup>3</sup>');
}

function calculate_triangle(){
	 var triangleHeight = $('#triangleHeight').val();
	 var triangleHeightUnit = $('#triangleHeightVal').val();
	 var triangleWidth =   $('#triangleWidth').val();
	  var triangleWidthUnit = $('#triangleWidthVal').val();
	 var triangleDepth =   $('#triangleDepth').val();
	  var triangleDepthUnit = $('#triangleDepthVal').val();
   triangleHeight = returnUnitInYards(triangleHeight, triangleHeightUnit);
        triangleWidth = returnUnitInYards(triangleWidth, triangleWidthUnit);
        triangleDepth = returnUnitInYards(triangleDepth, triangleDepthUnit);
        
   var answer = (triangleHeight * triangleWidth * triangleDepth) / 2;
        var answerwaste = ((triangleHeight * triangleWidth * triangleDepth) / 2) * 1.1;
    var theResult = (answer).toFixed(2);
	   var theResultwaste = Math.round(answerwaste*2)/2;
    $('#calctriangle_result').html('The exact quantity is&nbsp&nbsp'+theResult+' yd<sup>3</sup><br><br>Due to waste & spillage,<br> consider ordering&nbsp'+theResultwaste+' yd<sup>3</sup>');
}
 
function calculate_slope(){
	
	 var slopeHeight = $('#slopeHeight').val();
	 var slopeHeightUnit = $('#slopeHeightVal').val();
	 var slopeWidth =   $('#slopeWidth').val();
	  var slopeWidthUnit = $('#slopeWidthVal').val();
	 var slopeDepth =   $('#slopeDepth').val();
	  var slopeDepthUnit = $('#slopeDepthVal').val();
	  var slopeDense =   $('#slopeDense').val();
	  var slopeDenseUnit = $('#slopeDenseVal').val();
	
	slopeHeight =  returnUnitInYards(slopeHeight, slopeHeightUnit); 
	slopeWidth =  returnUnitInYards(slopeWidth, slopeWidthUnit);
	slopeDepth =  returnUnitInYards(slopeDepth, slopeDepthUnit);
    slopeDense =  returnUnitInYards(slopeDense, slopeDepthUnit);
     
	var answer = (slopeDepth + slopeDense) / 2 * slopeWidth * slopeHeight;
        var answerwaste = ((slopeDepth + slopeDense) / 2 * slopeWidth * slopeHeight) * 1.1;
    var theResult = (answer).toFixed(2);
	   var theResultwaste = Math.round(answerwaste*2)/2;    
    $('#calcslope_result').html('The exact quantity is&nbsp&nbsp'+theResult+' yd<sup>3</sup><br><br>Due to waste & spillage,<br> consider ordering&nbsp'+theResultwaste+' yd<sup>3</sup>');
}
   
function calculate_circle() {
	 var circleHeight = $('#circleHeight').val();
	 var circleHeightUnit = $('#circleHeightVal').val();
	 var circleWidth =   $('#circleWidth').val();
	  var circleWidthUnit = $('#circleWidthVal').val();
 
	
	circleHeight =  returnUnitInYards(circleHeight, circleHeightUnit); 
	circleWidth =  returnUnitInYards(circleWidth, circleWidthUnit);
	
	var answer = circleHeight * circleHeight * circleWidth * 3.14285714285714;
        var answerwaste = (circleHeight * circleHeight * circleWidth * 3.14285714285714) * 1.1;
    var theResult = (answer).toFixed(2);
       var theResultwaste = Math.round(answerwaste*2)/2;    
    $('#calccircle_result').html('The exact quantity is&nbsp&nbsp'+theResult+' yd<sup>3</sup><br><br>Due to waste & spillage,<br> consider ordering&nbsp'+theResultwaste+' yd<sup>3</sup>');
}
        
function calculate_tube(){
	var tubeInside = $('#tubeInside').val();
	 var tubeInsideUnit = $('#tubeInsideVal').val();
	 var tubeOutside = $('#tubeOutside').val();
	 var tubeOutsideUnit = $('#tubeOutsideVal').val();
	 var tubeDepth = $('#tubeDepth').val();
	 var tubeDepthUnit = $('#tubeDepthVal').val();
 
	
        tubeOutside = returnUnitInYards(tubeOutside, tubeOutsideUnit);
        tubeInside = returnUnitInYards(tubeInside, tubeInsideUnit);
        tubeDepth = returnUnitInYards(tubeDepth, tubeDepthUnit);
       
		
	  var answer = 3.14285714285714 * tubeDepth * ((tubeOutside * tubeOutside) - (tubeInside * tubeInside));
        var answerwaste = (3.14285714285714 * tubeDepth * ((tubeOutside * tubeOutside) - (tubeInside * tubeInside))) * 1.1;
      var theResult = (answer).toFixed(2);
	      var theResultwaste = Math.round(answerwaste*2)/2;
	$('#calctube_result').html('The exact quantity is&nbsp&nbsp'+theResult+' yd<sup>3</sup><br><br>Due to waste & spillage,<br> consider ordering&nbsp'+theResultwaste+' yd<sup>3</sup>');
}
   
function calculate_block(){
	 var blockHeight = $('#blockHeight').val();
	 var blockHeightUnit = $('#blockHeightVal').val();
	 var blockLength =   $('#blockLength').val();
	 var blockLengthUnit = $('#blockLengthVal').val();
         var blocksize = $('#blocksizeVal').val();
         var reinf = $('#reinf').val();
         	       
	blockHeight =  returnUnitInFeet(blockHeight, blockHeightUnit); 
	blockLength =  returnUnitInFeet(blockLength, blockLengthUnit);
                              
            var answer = (blockHeight * blockLength) * 1.125;
	    var theResult = (answer).toFixed();
            
            var answer = (((blockHeight * blockLength) * 1.125) / 1000) *30;
	    var theResult1 = (answer).toFixed();
            
            var answer = ((blockHeight * blockLength) * 1.125) / 250;
	    var theResult2 = (answer).toFixed(2);
            
            var answer = (blockHeight * blockLength) / reinf;
	    var theResult3 = (answer).toFixed();
      
      
	$('#blockcalculator_result').html(theResult+' &nbsp; Blocks');
        $('#mortarcalculator_result').html(theResult1+' &nbsp; Mortar Bags');
        $('#sandcalculator_result').html(theResult2+' &nbsp; Tons of Sand');
        $('#reinfcalculator_result').html(theResult3+' Pcs Reinforcing');
} 

function calculate_squareagg(){
	 var squareaggHeight = $('#squareaggHeight').val();
	 var squareaggHeightUnit = $('#squareaggHeightVal').val();
	 var squareaggWidth =   $('#squareaggWidth').val();
	 var squareaggWidthUnit = $('#squareaggWidthVal').val();
	 var squareaggDepth =   $('#squareaggDepth').val();
	 var squareaggDepthUnit = $('#squareaggDepthVal').val();
         var squareaggtype = $('#squareaggtype').val();
         
	squareaggHeight =  returnUnitInYards(squareaggHeight, squareaggHeightUnit); 
	squareaggWidth =  returnUnitInYards(squareaggWidth, squareaggWidthUnit);
	squareaggDepth =  returnUnitInYards(squareaggDepth, squareaggDepthUnit);
     	
    var answer = (squareaggHeight*squareaggWidth*squareaggDepth);
	     var theResult = (answer).toFixed(2);    
    
    var answerTons = (squareaggHeight*squareaggWidth*squareaggDepth) * squareaggtype;
	     var theResultTons = (answerTons).toFixed(2);
	 
	$('#calcaggsquareyds_result').html('You will need&nbsp&nbsp'+theResult+' yd<sup>3</sup>');
    $('#calcaggsquaretons_result').html('or&nbsp&nbsp'+theResultTons+' Tons');
}

function calculate_slopeagg(){
	
	 var slopeaggHeight = $('#slopeaggHeight').val();
	 var slopeaggHeightUnit = $('#slopeaggHeightVal').val();
	 var slopeaggWidth =   $('#slopeaggWidth').val();
	 var slopeaggWidthUnit = $('#slopeaggWidthVal').val();
	 var slopeaggDepth =   $('#slopeaggDepth').val();
	 var slopeaggDepthUnit = $('#slopeaggDepthVal').val();
	 var slopeaggDense =   $('#slopeaggDense').val();
	 var slopeaggDenseUnit = $('#slopeaggDenseVal').val();
	 var slopeaggtype = $('#slopeaggtype').val();
        
	slopeaggHeight =  returnUnitInYards(slopeaggHeight, slopeaggHeightUnit); 
	slopeaggWidth =  returnUnitInYards(slopeaggWidth, slopeaggWidthUnit);
	slopeaggDepth =  returnUnitInYards(slopeaggDepth, slopeaggDepthUnit);
        slopeaggDense =  returnUnitInYards(slopeaggDense, slopeaggDepthUnit);
     
            var answer = ((slopeaggDepth + slopeaggDense) / 2 * slopeaggWidth * slopeaggHeight);
            var theResult = (answer).toFixed(2);
            
            var answer = ((slopeaggDepth + slopeaggDense) / 2 * slopeaggWidth * slopeaggHeight) * slopeaggtype;
            var theResultTons = (answer).toFixed(2);
	
        $('#calcaggslopeyds_result').html('You will need&nbsp&nbsp'+theResult+' yd<sup>3</sup>');
    $('#calcaggslopetons_result').html('or&nbsp&nbsp'+theResultTons+' Tons');
}

function calculate_circleagg() {
	 var circleaggHeight = $('#circleaggHeight').val();
	 var circleaggHeightUnit = $('#circleaggHeightVal').val();
	 var circleaggWidth =   $('#circleaggWidth').val();
	 var circleaggWidthUnit = $('#circleaggWidthVal').val();
         var circleaggtype = $('#circleaggtype').val();
	
	circleaggHeight =  returnUnitInYards(circleaggHeight, circleaggHeightUnit); 
	circleaggWidth =  returnUnitInYards(circleaggWidth, circleaggWidthUnit);

     
	
	var answer = (circleaggHeight * circleaggHeight * circleaggWidth * 3.14285714285714);
            var theResult = (answer).toFixed(2);
            
            var answer = (circleaggHeight * circleaggHeight * circleaggWidth * 3.14285714285714) * circleaggtype;
            var theResultTons = (answer).toFixed(2);
	
        $('#calcaggcircleyds_result').html('You will need&nbsp&nbsp'+theResult+' yd<sup>3</sup>');
    $('#calcaggcircletons_result').html('or&nbsp&nbsp'+theResultTons+' Tons');
}
        
function calculate_tubeagg(){
	 var tubeaggInside = $('#tubeaggInside').val();
	 var tubeaggInsideUnit = $('#tubeaggInsideVal').val();
	 var tubeaggOutside = $('#tubeaggOutside').val();
	 var tubeaggOutsideUnit = $('#tubeaggOutsideVal').val();
	 var tubeaggDepth = $('#tubeaggDepth').val();
	 var tubeaggDepthUnit = $('#tubeaggDepthVal').val();
         var tubeaggtype = $('#tubeaggtype').val();
	
        tubeaggOutside = returnUnitInYards(tubeaggOutside, tubeaggOutsideUnit);
        tubeaggInside = returnUnitInYards(tubeaggInside, tubeaggInsideUnit);
        tubeaggDepth = returnUnitInYards(tubeaggDepth, tubeaggDepthUnit);
       
		
	  var answer = (3.14285714285714 * tubeaggDepth * ((tubeaggOutside * tubeaggOutside) - (tubeaggInside * tubeaggInside)));
            var theResult = (answer).toFixed(2);
            
            var answer = (3.14285714285714 * tubeaggDepth * ((tubeaggOutside * tubeaggOutside) - (tubeaggInside * tubeaggInside))) * tubeaggtype;
            var theResultTons = (answer).toFixed(2);
	 
	$('#calcaggtubeyds_result').html('You will need&nbsp&nbsp'+theResult+' yd<sup>3</sup>');
    $('#calcaggtubetons_result').html('or&nbsp&nbsp'+theResultTons+' Tons');	
	
}

function calculate_triangleagg(){
	 var triangleaggHeight = $('#triangleaggHeight').val();
	 var triangleaggHeightUnit = $('#triangleaggHeightVal').val();
	 var triangleaggWidth =   $('#triangleaggWidth').val();
	 var triangleaggWidthUnit = $('#triangleaggWidthVal').val();
	 var triangleaggDepth =   $('#triangleaggDepth').val();
	 var triangleaggDepthUnit = $('#triangleaggDepthVal').val();
         var triangleaggtype = $('#triangleaggtype').val();
         
        triangleaggHeight = returnUnitInYards(triangleaggHeight, triangleaggHeightUnit);
        triangleaggWidth = returnUnitInYards(triangleaggWidth, triangleaggWidthUnit);
        triangleaggDepth = returnUnitInYards(triangleaggDepth, triangleaggDepthUnit);

      var answer = ((triangleaggHeight * triangleaggWidth * triangleaggDepth) / 2);
        var theResult = (answer).toFixed(2);
        
    var answer = ((triangleaggHeight * triangleaggWidth * triangleaggDepth) / 2) * triangleaggtype;
        var theResultTons = (answer).toFixed(2);
        
       $('#calcaggtriangleyds_result').html('You will need&nbsp&nbsp'+theResult+' yd<sup>3</sup>');
    $('#calcaggtriangletons_result').html('or&nbsp&nbsp'+theResultTons+' Tons');
	
}

function returnUnitInFeet(theValue, theUnitType) {
    switch (theUnitType) {
        case "Inches":
            unitInFeet = 0.0833333;
            break;
        case "Miles":
            unitInFeet = 5280;
            break;
        case "Yards":
            unitInFeet = 3;
            break;
        case "Feet":
            unitInFeet = 1;
            break;
                        
        default:
            unitInFeet = 1;
            break;
    }

    return theValue * unitInFeet;
}

function returnUnitInYards(theValue, theUnitType) {
    switch (theUnitType) {
        case "Inches":
            unitInYards = 0.0277778;
            break;
        case "Miles":
            unitInYards = 1760;
            break;
        case "Yards":
            unitInYards = 1;
            break;
        case "Feet":
            unitInYards = 0.333333;
            break;
        
        default:
            unitInYards = 1;
            break;
    }

    return theValue * unitInYards;
}

function calculate_evapret(){
        var slabArea = $('#slabArea').val();
        
        var answer = slabArea / 2000;
        
    $('#evapretcalculator_result').html(answer+ ' Gallons');
}

function calculate_evap(){
	 var windSpeed = $('#windSpeed').val();
	 var airTemp = $('#airTemp').val();
	 var concTemp =   $('#concTemp').val();
	 var airHumd = $('#airHumd').val();
	        
	var answer = (Math.pow(concTemp,2.5) - (airHumd/100 * Math.pow(airTemp, 2.5)) ) * (1 + 0.4 * windSpeed) * .000001;
            if(answer < 0) answer = 0;
        var theResult = (answer).toFixed(2);
	
if (theResult > 0.2)
     {
     $('#evapcalculator_result').html(theResult+' lbs/sq-ft/hr - Plastic shrinkage cracking is likely to occur.');
     document.getElementById("evappic").src = "pics/slab2.png";
     }
     else 
        if (theResult > 0.093) 
        {
          $('#evapcalculator_result').html(theResult+' lbs/sq-ft/hr - Plastic shrinkage cracking may occur.');
          document.getElementById("evappic").src = "pics/slab1.png";
        }
        else 
        {
           $('#evapcalculator_result').html(theResult+' lbs/sq-ft/hr');
           document.getElementById("evappic").src = "pics/slab.png";
        }
}
