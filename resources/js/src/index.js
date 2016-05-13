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

    console.log($.fn.slick);
    console.log(slick);

    $("#slider").slick();
	
}