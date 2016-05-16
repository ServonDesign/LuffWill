import $ from "./../vendor/jquery/dist/jquery";
import slick from "./../vendor/slick/rdslick.js";

$.fn.slick = slick;

var modal = () => {

  var $modal = $("#modal-container"),
      $gallery = $('.modal-gallery'),
      $plan = $('.modal-plan'),      


  init = () => {

    $('.subscribe--icon').on('click', () => {
      $modal.addClass('isActive');
      $('.backdrop').addClass('isActive');
    });

    $('.btn-gallery-cta').on('click', () => {
      $gallery.addClass('isActive');
      $('.backdrop').addClass('isActive');
    });

    $('.btn-floor-cta').on('click', () => {
      $plan.addClass('isActive');
      $('.backdrop').addClass('isActive');
    });

    $('.btn-modal-close').on('click', () => {
      $gallery.removeClass('isActive');
      $plan.removeClass('isActive');
      $('.backdrop').removeClass('isActive');
    });

    $('.backdrop').on('click', () => {
      $modal.removeClass('isActive');
      $plan.removeClass('isActive');
      $gallery.removeClass('isActive');
      $('.backdrop').removeClass('isActive');
    });
  }

  init();

}

export {modal}
