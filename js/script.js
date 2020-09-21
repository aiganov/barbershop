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


$('.gallery-slider').slick({
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
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  centerMode: false,

      	}

    }, {

      breakpoint: 1200,
      settings: {
          infinite: false,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  centerMode: false,
      	}

    }, ]

});

$('.brand-slider').slick({
	mobileFirst: true,
	infinite: true,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	variableWidth: true,
	centerMode: true,
  


	 responsive: [{

      breakpoint: 768,
      settings: {
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 2,
		centerMode: false,
      }
      
    }, {

      breakpoint: 992,
      settings: {
          infinite: true,
		  slidesToShow: 5,
		  slidesToScroll: 2,
		  centerMode: false,
      	}

    }, {

      breakpoint: 1200,
      settings: {
          infinite: true,
		  slidesToShow: 6,
		  slidesToScroll: 2,
		  centerMode: false,

      	}

    }, ]

});



$('.reviews-slider').slick({
	mobileFirst: true,
	infinite: true,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	variableWidth: true,
	centerMode: true,
    centerPadding: '30px',
  


	 responsive: [{

      breakpoint: 768,
      settings: {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
	    centerPadding: '30px',
      }
      
    }, {

      breakpoint: 992,
      settings: {
          infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  centerMode: true,
		  centerPadding: '30px',
      	}

    }, {

      breakpoint: 1200,
      settings: {
          infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  centerMode: true,
		  centerPadding: '40px',
      	}

    }, ]

});