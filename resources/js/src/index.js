import $ from "jquery";
import noUiSlider from "./../vendor/noUiSlider/nouislider";
import wNumb from "./../vendor/wNumb/wNumb";
import {sum, square, MyClass} from "./import";
import {navigation, sideSearch} from "./navigation";
import {rangeSlider} from "./rangeSlider";
import {modal} from "./modal";
import {themeSwitch} from "./themeSwitch";
import "./../vendor/mmenu.min";
import slick from "./../vendor/slick/rdslick.js";

$(document).ready(init);

function init(){
	$.fn.slick = slick;
	runImportedFunctions();
}

function runImportedFunctions(){
	navigation();
	sideSearch();
	//rangeSlider();
	modal();
	themeSwitch();

	//$.fn.rdslick = slick; 
	$('.slider-navigation').slick({  
		dots: false,
		speed: 300,
		slidesToShow: 9,
		centerMode: true,
		vertical: true,
		infinite: true, 
		arrow: true,
		responsive: [
		    {
		      breakpoint: 1280,
		      settings: {
		        slidesToShow: 5,
		      }
		    },
		    {
		      breakpoint: 968,
		      settings: {
		        slidesToShow: 4,
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 3,
		      }
		    }
	    ]
	});

	$('.slider-main').slick({  
		dots: false,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		fade: true, 
		arrow: false,
		responsive: [
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        arrow: true
		      }
		    }
	    ]
	});


	//console.log($('.slick-current').data('slide'));


	$('.slider-navigation .slider-item').on('click', (e) => {
		let slideTarget = $(e.target).closest('.slider-item').data('slide');
		var slideIndex = $(this).index();
		console.log(slideIndex + 3);
		$( '.slider-main' )[0].slick.slickGoTo( parseInt(slideTarget - 1) );
		//let slideTarget = $(e.target).closest('.slider-item');
	});

	$(".placeholder + input").keyup(function() {
		if($(this).val().length) {
			$(this).prev('.placeholder').hide();
		} else {
			$(this).prev('.placeholder').show();
		}
	});
	$(".placeholder").click(function() {
		$(this).next().focus();
	});
}