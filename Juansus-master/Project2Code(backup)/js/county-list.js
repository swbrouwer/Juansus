$ (document).ready( function() { 
	$(".county-list").slideToggle(0);
		$(".county-button").removeClass("hidden");
			$(".county-button").addClass("shown");

		$(".county-exit").removeClass("shown");
			$(".county-exit").addClass("hidden");

	console.log("I'm ready!");

		$(".county-button").click(function(){

			

			$(".county-list").slideToggle(500);

			$(".county-exit").removeClass("hidden");
			$(".county-exit").addClass("shown");

			$(".county-button").removeClass("shown");
			$(".county-button").addClass("hidden");


		});


		$(".county-exit").click(function(){

			

			$(".county-list").slideToggle(500);

			$(".county-exit").removeClass("shown");
			$(".county-exit").addClass("hidden");

			$(".county-button").removeClass("hidden");
			$(".county-button").addClass("shown");


		});

	

		// $ (window).resize( function(){

		// 	var pageWidth = $(window).width();

		// 	console.log("Page width is " + pageWidth);
		

	

	

		
		// });
});