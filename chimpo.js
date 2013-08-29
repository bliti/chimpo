//requires Jquery 2.0

//Warning: HTML below is a temporary hack to test the Javascript. (:

var chimpoBar = '\<div style="' +

				'position: absolute;' + 
				'height: 40px;' +
				'top: 0;' + 
				'left: 0;' + 
				'width: 100%;' + 
				'z-index: 100;' +
				'display: inline;' +
				'background: red;' +
				'padding-left: 100px;' +
				'padding-top: 10px;">' + 
				
				'\<form id="chimpoBar" action="#" method="GET">' +

                '\<input type="email" required>'+
				
				'\<button type="submit" id="chimpoSubmit">Subscribe to my newsletter\</button>' +
				
				'\</form>' +

				'\</div>';



$(document).ready(function() {
	$('body').append(chimpoBar);
	
	$('#chimpoSubmit').click(function() {
		alert('hello');
		});
	});
	
	
	//TODO:
	// add validation
	// add ajax POST call
	// mailchimp specific data