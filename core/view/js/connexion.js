$(document).ready(function() {
	$("#panel-connexion li.params").hide();
	$("#panel-connexion li.selected").next("li.params").show();
	verticalAlignCenter();
	
	$("#panel-connexion li.user").click(function() {
		if($(this).next("li").css('display') == 'none') {
			$(this).parent().find("li.params").hide();
			$(this).parent().find("li.user").removeClass("selected");
			$(this).addClass("selected");
			$(this).fadeIn();
			$(this).next("li").fadeIn();
			$("#panel-connexion input").val('');
			$("#panel-connexion input").next("span.run-connexion").removeClass("run-connexion-link");
			verticalAlignCenter();
		}
	});
	
	$("#panel-connexion input.password").bind('keyup focusin focusout', function() {
		if($(this).val() != '')
			$(this).next("span.run-connexion").addClass("run-connexion-link");
		else {
			$(this).next("span.run-connexion").removeClass("run-connexion-link");
		}
	});
	
	$("#panel-connexion input").click(function() {
		$(this).val('');
		if($(this).hasClass("password"))
			$(this).next("span.run-connexion").removeClass("run-connexion-link");
	});
	
	$(window).bind('resize', function() { verticalAlignCenter(); });
	
	setTimeout(function(){ 
		$("body").removeClass("init", 1000);
	}, 500);
	setTimeout(function(){ 
		$("#background").removeClass("init", 500);
	}, 1500);
});

function verticalAlignCenter() {
	$(".vertical-align-center").each(function() {
		var $elem = $(this);
		var elemHeight = $elem.height();
		if (elemHeight == 0)	// perhap's an element is no loaded
			return;
		var $container = $elem.parent();
		var marginTop = Math.floor(($container.height() - elemHeight) / 2);
		if (marginTop > 0)
			$elem.css("margin-top", marginTop);
	});
}
