$(function() {

	//===============================================================
	//make background the size of the window=========================
	//===============================================================
	// function heightDetect() {
	// 		$("#header").css("height", $(window).height());
	// 		$("#section1").css("height", $(window).height());
	// 		$("#section2").css("height", $(window).height());
	// 		$("#contacts").css("height", $(window).height());
	// 		$("#section3").css("height", $(window).height());
	// 	};
	// 	heightDetect();
	// 	$(window).resize(function(){
	// 		heightDetect();
	// });

	//===============================================================
	//tabs===========================================================
	//===============================================================
	// https://jqueryui.com/tabs/
	$( "#tabs" ).tabs();

	//===============================================================
	//SVG Fallback===================================================
	//===============================================================
	// if(!Modernizr.svg) {
	// 	$("img[src*='svg']").attr("src", function() {
	// 		return $(this).attr("src").replace(".svg", ".png");
	// 	});
	// };

	//E-mail Ajax Send=========================================================
	//Documentation & Example: https://github.com/agragregra/uniMail
	// http://dimsemenov.com/plugins/magnific-popup/documentation.html
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$.magnificPopup.close();//close form
			}, 1000);
		});
		return false;
	});

	//===============================================================
	//Chrome Smooth Scroll===========================================
	//===============================================================

	// try {
	// 	$.browserSelector();
	// 	if($("html").hasClass("chrome")) {
	// 		$.smoothScroll();
	// 	}
	// } catch(err) {

	// };

	//prevent images from dragging===============================================
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	//===============================================================
  // carousel 2.0.0 beta 2.4========================================
  //===============================================================
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    // autoWidth: true,
    autoplay:false,
    // autoplay:true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    nav:true,
    navText: [
    '<img src="img/carousel/arrow-left.svg" alt="">',
    '<img src="img/carousel/arrow-right.svg" alt="">'
    ],
    dotsContainer: '#carousel-custom-dots',
    // navText: " ",
    fluidSpeed:600,
		autoplaySpeed: 600,
		navSpeed: 600,
		dotsSpeed: 600,
		dragEndSpeed: 600,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
	})
	//click event for custom pagination 
	var owl = $('.owl-carousel');
  $('.owl-dot').click(function () {
      owl.trigger('to.owl.carousel', [$(this).index(), 300]);
  });

  //===============================================================
  //Forms =========================================================
 	//===============================================================

  // masks --------------------------
	jQuery(function($) {
	  $("#phone").mask("(999) 999-99-99", {
	    placeholder: "(___) ___-__-__"
	  });
	});

	// form validation plugin--------------------
  $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();

	//===============================================================
  //Magnific popup=================================================
	//===============================================================

  //carousel details
  $('.pop_details').magnificPopup(
  	{
  		type:'inline',
  		midClick: true,
  		showCloseBtn: true,
  		enableEscapeKey: true,
  		// overflowY: "hidden",
  		callbacks: {
	    	open: function() {
	    	},
	    	close: function() {
	    	}
  		}
  	}
  );

  //===============================================================
	// smoothscroll to link =========================================
	//===============================================================
	// http://manos.malihu.gr/page-scroll-to-id/	

	$(".menu_wrapper li a").mPageScroll2id(
		{ 
			onComplete:function(){
				Waypoint.enableAll();
			}
		}
	);

	$(".logo_wrapper a").mPageScroll2id(
		{ 
			onComplete:function(){
				Waypoint.enableAll();
			}
		}
	);

  //===============================================================
  //Vegas dynamic background=======================================
  //===============================================================
	// http://vegas.jaysalvat.com/documentation/settings/
  // http://vegas.jaysalvat.com/documentation/transitions/

  // vegas initiation + options-------------------------
  $("body").vegas({
    
    slides: [
        { src: "img/header/bg_1.png" },
        { src: "img/section1/bg_2.png" },
        { src: "img/section2/bg_3.png" },
        { src: "img/footer/bg_4.png" },
         { src: "img/section3/bg_5.png" }
    ],

    // transition: [ 'fade', 'zoomOut', 'swirlLeft' ],
    // animation: 'kenburns',
    // animationDuration: 10000,
    timer: false, //Display/hide timer bar
    autoplay: false
    // overlay: 'libs/vegas/overlays/02.png'

    //callback function called when Vegas changes the slide
    // walk: function () {}
	});

  // change vegas bg on click----------------------------------
  // http://vegas.jaysalvat.com/documentation/methods/
  $('a[href$="#h2_header"]').on('click', function () {
  	Waypoint.disableAll();
  	$("body").vegas('options', 'transition', 'fade');
    $("body").vegas('jump', 0); 

    $(".menu_wrapper ul>li").removeClass("active");
	});
	$('a[href$="#h2_section1"]').on('click', function () {
		Waypoint.disableAll();
		$("body").vegas('options', 'transition', 'fade');
    $("body").vegas('jump', 1);

    $(".menu_wrapper ul>li").removeClass("active");
    $('.menu_wrapper li.li_section1').toggleClass('active');

	});
	$('a[href$="#h2_section2"]').on('click', function () {
		Waypoint.disableAll();
		$("body").vegas('options', 'transition', 'fade');
    $("body").vegas('jump', 2);

    $(".menu_wrapper ul>li").removeClass("active");
    $('.menu_wrapper li.li_section2').toggleClass('active');
	});
	$('a[href$="#h2_contacts"]').on('click', function () {
		Waypoint.disableAll();
		$("body").vegas('options', 'transition', 'fade');
    $("body").vegas('jump', 3);

    $(".menu_wrapper ul>li").removeClass("active");
    $('.menu_wrapper li.li_contacts').toggleClass('active');
	});	
	$('a[href$="#h2_section3"]').on('click', function () {
		Waypoint.disableAll();
		$("body").vegas('options', 'transition', 'fade');
    $("body").vegas('jump', 4);

    $(".menu_wrapper ul>li").removeClass("active");
    $('.menu_wrapper li.li_section3').toggleClass('active');
	});	

	//===============================================================
  //Waypoints =====================================================
  //===============================================================
  // http://imakewebthings.com/waypoints/guides/getting-started/
  // http://imakewebthings.com/waypoints/shortcuts/inview/#enter-option

	var inviewHeader = new Waypoint.Inview({
	  element: $('#header')[0],
	  enter: function(direction) {
	  	$("body").vegas('jump', 0);

	  	$(".menu_wrapper ul>li").removeClass("active");
	  },
	  entered: function(direction) {
	  },
	  exit: function(direction) {
	  },
	  exited: function(direction) {
	  }
	})

	var inviewSection1 = new Waypoint.Inview({
	  element: $('#section1')[0],
	  enter: function(direction) {
	  	$("body").vegas('jump', 1);

	  	$(".menu_wrapper ul>li").removeClass("active");
	  	$('.menu_wrapper li.li_section1').toggleClass('active');
	  },
	  entered: function(direction) {
	  	
	  },
	  exit: function(direction) {
	  	
	  },
	  exited: function(direction) {
	  	// $('.menu_wrapper li.li_section1').toggleClass('active');
	  }
	})

	var inviewSection2 = new Waypoint.Inview({
	  element: $('#section2')[0],
	  enter: function(direction) {
	  	$("body").vegas('jump', 2);

	  	$(".menu_wrapper ul>li").removeClass("active");
	  	$('.menu_wrapper li.li_section2').toggleClass('active');
	  },
	  entered: function(direction) {
	  	
	  },
	  exit: function(direction) {
	  	
	  },
	  exited: function(direction) {
	  	// $('.menu_wrapper li.li_section2').toggleClass('active');
	  }
	})

	var inviewContacts = new Waypoint.Inview({
	  element: $('#contacts')[0],
	  enter: function(direction) {
	  	$("body").vegas('jump', 3);

	  	$(".menu_wrapper ul>li").removeClass("active");
	  	$('.menu_wrapper li.li_contacts').toggleClass('active');
	  },
	  entered: function(direction) {
	  	
	  },
	  exit: function(direction) {
	  	
	  },
	  exited: function(direction) {
	  	// $('.menu_wrapper li.li_contacts').toggleClass('active');
	  }
	})

	var inviewContacts = new Waypoint.Inview({
	  element: $('#section3')[0],
	  enter: function(direction) {
	  	$("body").vegas('jump', 4);

	  	$(".menu_wrapper ul>li").removeClass("active");
	  	$('.menu_wrapper li.li_section3').toggleClass('active');
	  },
	  entered: function(direction) {
	  	
	  },
	  exit: function(direction) {

	  },
	  exited: function(direction) {
	  	// $('.menu_wrapper li.li_section3').toggleClass('active');
	  }
	})

	// waypoints check function-------------------------------
	// var inview = new Waypoint.Inview({
	//   element: $('#section1')[0],
	//   enter: function(direction) {
	//     $.notify('Enter triggered with direction ' + direction)
	//   },
	//   entered: function(direction) {
	//     $.notify('Entered triggered with direction ' + direction)
	//   },
	//   exit: function(direction) {
	//     $.notify('Exit triggered with direction ' + direction)
	//   },
	//   exited: function(direction) {
	//     $.notify('Exited triggered with direction ' + direction)
	//   }
	// })

	// makes button disabled until animaion is over

	//===============================================================
	//Replace all <img> with class svg with inline svg ==============
	//===============================================================
	function replaceSVG() {
		$('img.svg').each(function(){
	    var $img = jQuery(this);
	    var imgID = $img.attr('id');
	    var imgClass = $img.attr('class');
	    var imgURL = $img.attr('src');

	    $.get(imgURL, function(data) {
	        // Get the SVG tag, ignore the rest
	        var $svg = $(data).find('svg');

	        // Add replaced image's ID to the new SVG
	        if(typeof imgID !== 'undefined') {
	            $svg = $svg.attr('id', imgID);
	        }
	        // Add replaced image's classes to the new SVG
	        if(typeof imgClass !== 'undefined') {
	            $svg = $svg.attr('class', imgClass+' replaced-svg');
	        }

	        // Remove any invalid XML tags as per http://validator.w3.org
	        $svg = $svg.removeAttr('xmlns:a');

	        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
	        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
	            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
	        }

	        // Replace image with new SVG
	        $img.replaceWith($svg);

	    }, 'xml');

		});
	}
	replaceSVG();
});
