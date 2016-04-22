'use strict'

import $ from "./../vendor/jquery/dist/jquery";

var themeSwitch = () => {
    $(':radio').change(function () {
      console.log("change parent");
      if ( $(".radio-rent").is(":checked") ) {
        $("body").removeClass("theme--default").addClass("theme--green");
      }

      if ( $(".radio-buy").is(":checked") ) {
        $("body").removeClass("theme--green theme--default").addClass("theme--orange");
      }
    });
};

export { themeSwitch };
