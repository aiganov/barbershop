$('.slider').slick({
	mobileFirst: true,
	infinite: false,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	variableWidth: true,
	centerMode: true,
  


	 responsive: [{

      breakpoint: 768,
      settings: {
		infinite: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		centerMode: false,
		variableWidth: false,
      }
      
    }, {

      breakpoint: 992,
      settings: {
          infinite: false,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  centerMode: false,
      	}

    }, {

      breakpoint: 1200,
      settings: {
          infinite: false,
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  centerMode: false,
      	}

    }, ]

});






