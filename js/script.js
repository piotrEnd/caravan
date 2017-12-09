$('.scroll--header').on('click', function () {
	$('body, html').animate({
		scrollTop: $('.feature-box').offset().top
	}, 1000)
});

$('.scroll--features, .btn').on('click', function () {
	$('body, html').animate({
		scrollTop: $('.kontakt-box').offset().top - 1
	}, 1250)
});

$('.scroll--kontakt').on('click', function () {
	$('body, html').animate({
		scrollTop: $('header').offset().top - 1
	}, 1500)
});


 var map = new GMaps({
 	div: '.kontakt-box__map',
 	  lat: 48.466419,
 	  lng: 10.285300,
 	  zoom: 13
   });
  
   map.addMarker({
 	lat: 48.466419, 
 	lng: 10.285300,
 	title: 'Wohnwagen Service Hammerschmidt',
 	  infoWindow: {
 		  content: '<p>Wohnwagen Service Hammerschmidt</p>'
 	  }
   });

