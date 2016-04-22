import $ from "./../vendor/jquery/dist/jquery";
import noUiSlider from "./../vendor/noUiSlider/nouislider";
import wNumb from "./../vendor/wNumb/wNumb";

var rangeSlider = () => {

  var snapSlider = document.getElementById('slider'),
      snapSlider1 = document.getElementById('slider1'),

  init = () => {

    noUiSlider.create(snapSlider, {
      start: [ 250000, 750000 ],

      connect: true,
      step: 50000,
      range: {
        'min': 0,
        'max': 1000000
      }
    });

    noUiSlider.create(snapSlider1, {
      start: [ 0, 750000 ],

      connect: true,
      step: 50000,
      range: {
        'min': 0,
        'max': 1000000
      }

    });


    var snapValues = [
      document.getElementById('slider-snap-value-lower'),
      document.getElementById('slider-snap-value-upper')
    ];

    var snapValuesSearch = [
      document.getElementById('slider-snap-value-lower-search'),
      document.getElementById('slider-snap-value-upper-search')
    ];

    snapSlider.noUiSlider.on('update', function( values, handle ) {
      snapValues[handle].innerHTML = values[handle];
    });

    snapSlider1.noUiSlider.on('update', function( values, handle ) {
      snapValuesSearch[handle].innerHTML = values[handle];
    });
  }

  init();

}

export { rangeSlider };
