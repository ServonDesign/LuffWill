import $ from "./../vendor/jquery/dist/jquery";

var navigation = () => {
	// $('.header--btn__sidenav').on('click', () => {

	//   if( $('.side-search').hasClass('isOpen') ) {
	//     $('.side-search').removeClass('isOpen');
	//     $('.header--btn__search').find('use').attr('xlink:href','#search-menu');
	//   }

	//   $('.side-nav').toggleClass('isOpen');

	//   if( $('.side-nav').hasClass('isOpen') ) {
	//     $('.header--btn__sidenav').find('use').attr('xlink:href','#close-icon');
	//   } else {
	//     $('.header--btn__sidenav').find('use').attr('xlink:href','#menu-icon');
	//   }
	// })

	const nav = $(".js-primary-nav");

	nav.mmenu({
		offCanvas: {
			position: "right",
			zposition: "front"
		}
	});

	nav.find('.mm-navbar').append('<button class="primary-nav__mobile-btn-close js-primary-nav-btn-close">x</button>');

	const navBtn = $(".header--btn__sidenav");
	navBtn.on('click', function(){
		if( $('.side-search').hasClass('isOpen') ) {
			$('.side-search').removeClass('isOpen');
			$('.header--btn__search').find('use').attr('xlink:href','#search-menu');
		}
		nav.data('mmenu').open();
	});

	const navBtnBlose = $(".js-primary-nav-btn-close");
	navBtnBlose.on('click', function(){
		$('.header--btn__sidenav').find('use').attr('xlink:href','#menu-icon');
		nav.data('mmenu').close();
	});

};

var sideSearch = () => {

	const nav = $(".js-primary-nav");

	$('.header--btn__search').on('click', () => {

		if( $('.side-nav').hasClass('mm-opened') ) {
			$('.side-nav').removeClass('mm-opened');
			nav.data('mmenu').close();
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
