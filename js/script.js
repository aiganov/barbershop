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

$('.team-slider').slick({
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









/* Фильтр рубрик в Новостях */

var removeRubrics = true;
$(".filter-label-rubrics").click(function () {
	$(".filter-label-rubrics").toggleClass('filter-label-toggle');
    $(".filter-list-rubrics").toggleClass('filter-list-toggle');
    removeRubrics = false;
});

$(".filter-list-rubrics").click(function() {
    removeRubrics = false;
});

$("html").click(function () {
    if (removeRubrics) {
        $(".filter-list-rubrics").removeClass('filter-list-toggle');
        $(".filter-label-rubrics").removeClass('filter-label-toggle');
    }
    removeRubrics = true;
});

/* Фильтр месяц в Новостях */

var removeMonth = true;
$(".filter-label-month").click(function () {
	$(".filter-label-month").toggleClass('filter-label-toggle');
    $(".filter-list-month").toggleClass('filter-list-toggle');
    removeMonth = false;
});

$(".filter-list-month").click(function() {
    removeMonth = false;
});

$("html").click(function () {
    if (removeMonth) {
        $(".filter-list-month").removeClass('filter-list-toggle');
        $(".filter-label-month").removeClass('filter-label-toggle');
    }
    removeMonth = true;
});


/* Фильтр год в Новостях */

var removeYear = true;
$(".filter-label-year").click(function () {
	$(".filter-label-year").toggleClass('filter-label-toggle');
    $(".filter-list-year").toggleClass('filter-list-toggle');
    removeYear = false;
});

$(".filter-list-year").click(function() {
    removeYear = false;
});

$("html").click(function () {
    if (removeYear) {
        $(".filter-list-year").removeClass('filter-list-toggle');
        $(".filter-label-year").removeClass('filter-label-toggle');
    }
    removeYear = true;
});