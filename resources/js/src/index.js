import $ from "./../vendor/jquery/dist/jquery";
import noUiSlider from "./../vendor/noUiSlider/nouislider";
import wNumb from "./../vendor/wNumb/wNumb";
import {sum, square, MyClass} from "./import";
import {navigation, sideSearch} from "./navigation";
import {rangeSlider} from "./rangeSlider";
import {modal} from "./modal";
import {themeSwitch} from "./themeSwitch";
import "./../vendor/mmenu.min";

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

	
}
