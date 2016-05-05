import $ from "./../vendor/jquery/dist/jquery";

var navigation = () => {
  $('.header--btn__sidenav').on('click', () => {

    if( $('.side-search').hasClass('isOpen') ) {
      $('.side-search').removeClass('isOpen');
      $('.header--btn__search').find('use').attr('xlink:href','#search-menu');
    }

    $('.side-nav').toggleClass('isOpen');

    if( $('.side-nav').hasClass('isOpen') ) {
      $('.header--btn__sidenav').find('use').attr('xlink:href','#close-icon');
    } else {
      $('.header--btn__sidenav').find('use').attr('xlink:href','#menu-icon');
    }
  })
};

var sideSearch = () => {
  $('.header--btn__search').on('click', () => {

    if( $('.side-nav').hasClass('isOpen') ) {
      $('.side-nav').removeClass('isOpen');
      $('.header--btn__sidenav').find('use').attr('xlink:href','#menu-icon');
    }

    $('.side-search').toggleClass('isOpen');

    if( $('.side-search').hasClass('isOpen') ) {
      $('.header--btn__search').find('use').attr('xlink:href','#close-icon');
    } else {
      $('.header--btn__search').find('use').attr('xlink:href','#search-menu');
    }
  })
}

export { navigation, sideSearch };
