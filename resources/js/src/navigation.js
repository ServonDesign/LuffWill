import $ from "./../vendor/jquery/dist/jquery";

var navigation = () => {
  $('.header--btn__sidenav').on('click', () => {
    $('.side-nav').toggleClass('isOpen');
    if( $('.side-nav').hasClass('isOpen') ) {
      $('.header--btn__sidenav').find('use').attr('xlink:href','#close');
    } else {
      $('.header--btn__sidenav').find('use').attr('xlink:href','#menu');
    }
  })
};

var sideSearch = () => {
  $('.header--btn__search').on('click', () => {
    $('.side-search').toggleClass('isOpen');
    if( $('.side-search').hasClass('isOpen') ) {
      $('.header--btn__search').find('use').attr('xlink:href','#close');
    } else {
      $('.header--btn__search').find('use').attr('xlink:href','#search');
    }
  })
}

export { navigation, sideSearch };
