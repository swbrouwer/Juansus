/*

	$ = get me jQuery
	$(select) = what we select
	$(select).ready() = when is select available?
*/

$ (document).ready( function() { 

		$(".exit").removeClass("shown");
			$(".exit").addClass("hidden");

	console.log("I'm ready!");

		$(".menu").click(function(){

			

			$("nav").slideToggle(500);

			$(".exit").removeClass("hidden");
			$(".exit").addClass("shown");

			$(".menu").removeClass("shown");
			$(".menu").addClass("hidden");


		});


		$(".exit").click(function(){

			

			$("nav").slideToggle(500);

			$(".exit").removeClass("shown");
			$(".exit").addClass("hidden");

			$(".menu").removeClass("hidden");
			$(".menu").addClass("shown");


		});

	

		$ (window).resize( function(){

			var pageWidth = $(window).width();

			console.log("Page width is " + pageWidth);
		

		if (pageWidth < 481) {


			$(".menu").removeClass("hidden");
			$(".menu").addClass("shown");

			$("nav").hide();
		}

	

		if  (pageWidth > 481) {
			$(".menu").removeClass("shown");
			$(".menu").addClass("hidden");

			$(".exit").removeClass("shown");
			$(".exit").addClass("hidden");

			// $("nav-toggle").hide();
			$("nav").show();

		}
		});
});