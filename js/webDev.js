$(document).ready(function() {
	var web = ['#w', '#e', '#b'];
	var applications = ['#a', '#p1', '#p2', '#l1', '#i1', '#c', '#a2', '#t', '#i2', '#o1', '#n', '#s'];
	var developer = ["#d", "#e2", "#v", "#e3", "#l2", "#o2", "#p3", "#e4", "#r"];

	 // make web developer appear.
      $('#w, #e, #b, #a, #p1, #p2, #l1, #i1, #c, #a2, #t, #i2, #o1, #n, #s, #d, #e2, #v, #e3, #l2, #o2, #p3, #e4, #r').addClass('webDev');
// w e b      
      $('#w').html('W');
      $('#e').html('E');
      $('#b').html('B');

//  a p1   p2   l1   i1   c   a2   t   i2   o1   n   s
      $('#a').html('A');
      $('#p1').html('P');
      $('#p2').html('P');
      $('#l1').html('L');
      $('#i1').html('I');
      $('#c').html('C');
      $('#a2').html('A');
      $('#t').html('T');
      $('#i2').html('I');
      $('#o1').html('O');
      $('#n').html('N');
      $('#s').html('S');
	// line up "applications" in middle of screen"
var dmar = -330;
	for (var i = 0; i < applications.length-1; i++) {
		var dmar = dmar + 30;
		$(applications[i]).css("margin-left", dmar + "px");
	};    
	  $("#s").css("margin-left", "10px");

// d   e2   v   e3   ls   o2  p3 e4 r
      $('#d').html('D');
      $('#e2').html('E');
      $('#v').html('V');
      $('#e3').html('E');
      $('#l2').html('L');
      $('#o2').html('O');
      $('#p3').html('P');
      $('#e4').html('E');
      $('#r').html('R');
// line up "developer" in middle of page
	var dmar = -400;
	for (var i = 0; i < developer.length; i++) {
		var dmar = dmar + 30;
		$(developer[i]).css("margin-left", dmar + "px");
	};

// make "web" appear and move it to final location
	 $('#w, #e, #b').fadeIn(2000, function() {
  		var rightTravel = 258;
	  	var topTravel = -220;
	  	for (var i = 0; i < web.length; i++) {
	  		$(web[i]).animate({
	  			fontSize: 80,
	  			top: topTravel,
	  			right: rightTravel
	  		});
	  		rightTravel = rightTravel - 30;
	  	};
	// make "applications" appear and move to final location
	  $('#a, #p1, #p2, #l1, #i1, #c, #a2, #t, #i2, #o1, #n, #s').fadeIn(2000, function() {
	  	var rightTravel = 141;
	  	var topTravel = 180;
	  	for (var i = 0; i < applications.length; i++) {
	  		$(applications[i]).animate({
	  			fontSize: 80,
	  			top: topTravel,
	  			right: rightTravel
	  		});
	  		rightTravel = rightTravel - 30;
	  		// topTravel = topTravel + 80;
	  	};
	  	// make "developer" appear and move to final location
		  $('#d, #e2, #v, #e3, #l2, #o2, #p3, #e4, #r').fadeIn(2000, function() {
		  	var rightTravel = 60;
		  	var topTravel = -300;
		  	for (var i = 0; i < developer.length; i++) {
		  		$(developer[i]).animate({
		  			fontSize: 80,
		  			top: topTravel,
		  			right: rightTravel
		  		});
		  		rightTravel = rightTravel + 30;
		  		topTravel = topTravel + 80;
		  	}
		  	$('#e2').fadeOut();
		  	$('#lightning').html('<img src="images/Redlightning.gif" alt=""/>');
	  	});
	  });
  });
      $('.webDev').css("position", "relative"); // put everything to relative so it will move with the tabs.


});

