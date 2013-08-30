//Prototype version. Currently works all right. Going to prettify now. ^_^

//requires Jquery 2.0

//Warning: HTML below is a temporary hack to test the Javascript. (:

var chimpoBar = '<div style="' +

				'position: absolute;' + 
				'height: 40px;' +
				'top: 0;' + 
				'left: 0;' + 
				'width: 100%;' + 
				'z-index: 100;' +
				'display: inline;' +
				'background: red;' +
				'padding-left: 100px;' +
				'padding-top: 10px;" id="chimpoBar" ">' + 
			
				'<form class="chimpoForm" id="chimpoForm" action="http://github.us7.list-manage1.com/subscribe/post" method="POST">' +
				 ' <input type="hidden" name="u" value="fab15eaf19084212d78240d70">' +
				 ' <input type="hidden" name="id" value="6b08a63dfd">' +
				 ' <input class="input" type="email" value="" name="MERGE0" placeholder="Your Email Address" required>' +
				 ' <input type="submit" value="Send" name="submit" id="mc-embedded-subscribe">' +
				 '</form>' +

				'</div>';


var chimpoError = '<div id="chimpoError" style="width:100%;height:50px;background:yellow;position:absolute;top:0;left:0;display:inline;">'+
                  'There was an error processing your newsletter signup. Please reload and try again.' +
                  '</div>';

var chimpoSuccess = '<div id="chimpoSuccess" style="width:100%;height:50px;background:blue;position:absolute;top:0;left:0;display:inline;">Thankyou</div>';


$(document).ready(function() {
	$('body').append(chimpoBar);
	
	$('#chimpoForm').submit(function(e) {
	  var $this = $(this);
	  $.ajax({
	      type: "POST", // GET & url for json slightly different
	      url: "http://github.us7.list-manage1.com/subscribe/post-json?c=?",
	      data: $this.serialize(),
	      dataType    : 'json',
	      contentType: "application/json; charset=utf-8",
	      error       : function(err) { alert("There was an error processing your newsletter signup. Please reload and try again."); },
	      success     : function(data) {
	          if (data.result != "success") {
				  $('#chimpoBar').slideUp('slow');
				  $('body').append(chimpoError).show();
			  
			  } else {
				  $('#chimpoBar').slideUp('slow');
				  $('body').append(chimpoSuccess).show();
	          }
	      }
	  });
	  return false;
	});
	});
	
	
	//TODO:
	// fix html and css. Make it POP!
	// add validation * Basics done. Need to improve.
	// add ajax POST call * DONE
	// mailchimp specific data * DONE