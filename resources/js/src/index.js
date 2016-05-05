import $ from "./../vendor/jquery/dist/jquery";
import noUiSlider from "./../vendor/noUiSlider/nouislider";
import wNumb from "./../vendor/wNumb/wNumb";
import {sum, square, MyClass} from "./import";
import {navigation, sideSearch} from "./navigation";
import {rangeSlider} from "./rangeSlider";
import {modal} from "./modal";
import {themeSwitch} from "./themeSwitch";

$(document).ready(init);

function init(){
	runImportedFunctions();
}

function runImportedFunctions(){
	// 25
	console.log(square(5));

	var cred = {
		name: "Ritesh Kumar",
		enrollmentNo: 11115078
	};

	var x = new MyClass(cred);

	//Ritesh Kumar
	console.log(x.getName());

	console.log(sum(4,5));

	console.log($([]));

	console.log($.fn);

		navigation();
		sideSearch();
		//rangeSlider();
		modal();
		themeSwitch();
}
