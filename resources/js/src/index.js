import $ from "./../vendor/jquery/dist/jquery";
import noUiSlider from "./../vendor/noUiSlider/nouislider";
import wNumb from "./../vendor/wNumb/wNumb";
import {sum, square, MyClass} from "./import";
import {navigation, sideSearch} from "./navigation";

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

	// nouislider init
	var snapSlider = document.getElementById('slider');

	noUiSlider.create(snapSlider, {
		start: [ 250000, 750000 ],

		connect: true,
		range: {
			'min': 0,
			'max': 1000000
		}
	});

	var snapValues = [
		document.getElementById('slider-snap-value-lower'),
		document.getElementById('slider-snap-value-upper')
	];

	snapSlider.noUiSlider.on('update', function( values, handle ) {
		snapValues[handle].innerHTML = values[handle];
	});
	}
