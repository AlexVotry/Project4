$(document).ready(function() {
  // change the tab heading appearance when mouseover
  $(".tab_item").mouseover(function() {
    $(this).css({fontSize: '1.3em', color: '#000',fontWeight: "bold"});
  }).mouseout(function() {
    $(this).css({fontSize: '1em', color: '#fff'});
  });
// guestbook validation
  $('#guestbook').validate({
    rules: {
      name: {
        required: true, 
        minlength: 2
      },
      email: { 
          required: true,
          email: true
      },
      found: {  // this is the name of the checkboxes
          required: true,
          minlength: 1
      }
    },
    messages: { // uses the "name in the input"
      name: "Please provide your name",
      email: "Please provide an accurate email address",
      found: "Please let me know how you found me"
    },
    // this is how to change the look of the error message
    errorPlacement: function(label, element) {
      label.insertBefore(element);
    },
  });

// accordion function for interest page
    $("#accordion").accordion({
      heightStyle: "content"
    });
});

// sliding tab over headers and moving the content
$(function() {
      var vertical = ($(".slide_content").height()) +40;
      var mar = ((vertical) * -1);
// make side borders same size as the content panel.
      $('#wrapper').css({marginTop: mar + "px", height: vertical + "px"});
});

// animate with color on About me page
    var cstate = true;
    var fstate = true;
    var pstate = true;
$(function() {
    $( "#pButton" ).click(function() {  //color animate for past
      $('#past').fadeToggle();
      if ( pstate ) {
        //first remove other sections.
          $( "#cEffect, #fEffect" ).animate({
          backgroundColor: "#000",
          width: 0,
          height: 0
        }, 1000 );
          // put their states back to true
          $('#current, #future').fadeOut();
          cstate = true;
          fstate = true;
          //animate past
        $( "#pEffect" ).animate({
          backgroundColor: "#006400",
          width: 1100,
          height: 500
        }, 1000 );
      } else {
        $( "#pEffect" ).animate({
          backgroundColor: "#000",
          width: 0,
          height: 0
        }, 1000 );
      }
      pstate = !pstate;
    });
  });
 $(function() { // color animate for current
    $( "#cButton" ).click(function() {
      $('#current').fadeIn();
      if ( cstate ) {
        // close past and future
          $( "#pEffect, #fEffect" ).animate({
          backgroundColor: "#000",
          width: 0,
          height: 0
        }, 1000 );
          // reset their states
          $('#past, #future').fadeOut();
          fstate = true;
          pstate = true;
          // animate current
        $( "#cEffect" ).animate({
          backgroundColor: "#191970",
          width: 1100,
          height: 500
        }, 1000 );
      } else {
        $( "#cEffect" ).animate({
          backgroundColor: "#000",
          width: 0,
          height: 0
        }, 1000 );
        $('#current').fadeOut();
      }
      cstate = !cstate;
    });
  });
 $(function() { // color animate for future
    $( "#fButton" ).click(function() {
      $('#future').fadeIn();
      if ( fstate ) {
        // close current and past
          $( "#cEffect, #pEffect" ).animate({
          backgroundColor: "#000",
          width: 0,
          height: 0
        }, 1000 );
          // reset current and past
          $('#past, #current').fadeOut();
          cstate = true;
          pstate = true;
          // animate future
        $( "#fEffect" ).animate({
          backgroundColor: "#663399",
          width: 1100,
          height: 500
        }, 1000 );
      } else {
        $( "#fEffect" ).animate({
          backgroundColor: "#000",
          width: 0,
          height: 0
        }, 1000 );
        $('#future').fadeOut();
      }
      fstate = !fstate;
    });  
  });
// content for bicycle disciplines.
    $(function() {
      $('.bicycle').click(
        function() {
        $('li', this).fadeToggle(1000);
      });
    });
    