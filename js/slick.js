$(document).ready(function () {
	$(".pricing__box").slick({
		prevArrow: false,
		nextArrow: false,
		slidesToShow: 3,
		infinite: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					infinite: true,
					initialSlide: 1,
					dots: true,
				},
			},
		],
	});
});

$(document).ready(function () {
	$(".feedback__box").slick({
		prevArrow: false,
		nextArrow: false,
		slidesToShow: 3,
		infinite: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
					infinite: true,
					dots: true,
				},
			},
		],
	});
});
