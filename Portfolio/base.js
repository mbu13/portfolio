  $(document).ready(function(){
    $('.parallax').parallax();

    $('#lang-2').hide();

    setInterval(
		function() {   
		    if ($('#lang-2').is(":hidden")) {
		    	$('#lang-1').hide();
		    	$('#lang-2').fadeIn();
		    } else {
		    	$('#lang-2').hide();
		    	$('#lang-1').fadeIn();
		    }
		},
		5000  /* 10000 ms = 10 sec */
	);

    $("#down-button").click(function() {
    	$('html,body').animate({
        	scrollTop: $(".first-element").offset().top},
        	'slow');
		});
  });