  $(document).ready(function(){
  	$('.parallax').parallax();

  	$('#lang-2').hide();

  	$('#copyright-year').text((new Date()).getFullYear());

  	var introViewed = false;
  	var timelineViewed = false;
  	var skillsViewed = false;

    // Set age
    var dob = new Date("1996-04-01");
    var today = new Date();
    var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
    $('#age').text(age);

    /*setInterval(
		function() {   
		    if ($('#lang-2').is(":hidden")) {
		    	$('#lang-1').hide();
		    	$('#lang-2').fadeIn();
		    } else {
		    	$('#lang-2').hide();
		    	$('#lang-1').fadeIn();
		    }
		},
		5000
		);*/

		$("#down-button").click(function() {
			$('html,body').animate({
				scrollTop: $("#first-element").offset().top - 100},
				'slow');
		});

		$(".intro").each(function() {

			$(this).waypoint(function() {
				if (!introViewed) {
					introViewed = true;
					var cols = $(".col");
					cols.each(function(indx){
						$(this).delay(indx * 200).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
					});
				}
			}, {
				triggerOnce: true,
				offset: '50%'
			});
		});

		$(".timeline").each(function() {

			$(this).waypoint(function() {
				if (!timelineViewed) {
					timelineViewed = true;
					var companies = $(".circle-img-left");
					companies.each(function(indx){
						$(this).delay(indx * 200).fadeIn(750);
					});
				}
			}, {
				triggerOnce: true,
				offset: '50%'
			});
		});

		$(".skills").each(function() {

			$(this).waypoint(function() {
				if (!skillsViewed) {
					skillsViewed = true;
					var progressBar = $(".determinate");
					progressBar.each(function(indx){
						$(this).animate({"width": $(this).attr("value") + "%"}, 750);
					});
				}
			}, {
				triggerOnce: true,
				offset: '50%'
			});
		});
	});