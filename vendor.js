const swiper = new Swiper('.heroSwiper', {
	direction: 'horizontal',
	loop: true,

	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	scrollbar: {
		el: '.swiper-scrollbar',
	},
})
const servicesSwiper = new Swiper('.servicesSwiper', {
	slidesPerView: 'auto',
	spaceBetween: 30,
	direction: 'horizontal',
	loop: true,

	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	scrollbar: {
		el: '.swiper-scrollbar',
	},
})
const portfolioSwiper = new Swiper('.portfolioSwiper', {
	slidesPerView: 1,
	direction: 'horizontal',
	loop: true,

	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

ymaps.ready(init)
function init() {
	var myMap = new ymaps.Map('map', {
		center: [55.769383, 37.638521],
		zoom: 14,
		controls: [],
	})
}
