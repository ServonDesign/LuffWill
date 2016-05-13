global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

//import $ from "jquery";
import noUiSlider from "./../vendor/noUiSlider/nouislider";
import wNumb from "./../vendor/wNumb/wNumb";
import {sum, square, MyClass} from "./import";
import {navigation, sideSearch} from "./navigation";
import {rangeSlider} from "./rangeSlider";
import {modal} from "./modal";
import {themeSwitch} from "./themeSwitch";
import "./../vendor/mmenu.min";
import slick from "slick-carousel";

$(document).ready(init);

function init(){
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

   $("#slider").slick();
	
}