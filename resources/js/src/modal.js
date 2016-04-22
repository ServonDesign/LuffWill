import $ from "./../vendor/jquery/dist/jquery";

var modal = () => {

  var $modal = $("#modal-container"),

  init = () => {

    $('.subscribe--icon').on('click', () => {
      $modal.addClass('isActive');
      $('.backdrop').addClass('isActive');
    });

    $('.backdrop').on('click', () => {
      $modal.removeClass('isActive');
      $('.backdrop').removeClass('isActive');
    });
  }

  init();

}

export {modal}
