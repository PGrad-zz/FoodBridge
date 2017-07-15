//login form
$(function() {
    $('#donor-login-form-link').click(function(e) {
    	//add the donor form
		$("#donor-login-form").delay(100).fadeIn(100);

		//fade out everything else
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$("#charity-login-form").fadeOut(100);
		$('#charity-login-form-link').removeClass('active');

		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
		$("#donor-login-form").fadeOut(100);
		$('#donor-login-form-link').removeClass('active');
		$("#charity-login-form").fadeOut(100);
		$('#charity-login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

	$("#charity-login-form-link").click(function(e) {
		//add the donor form
		$("#charity-login-form").delay(100).fadeIn(100);

		//fade out everything else
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$("#donor-login-form").fadeOut(100);
		$('#donor-login-form-link').removeClass('active');

		$(this).addClass('active');
		e.preventDefault();
	});
});