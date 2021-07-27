"use strict";

const isMobile = {
	Andorid: function () {
		return navigator.userAgent.match(/Andorid/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
		isMobile.Andorid() ||
		isMobile.BlackBerry() ||
		isMobile.iOS() ||
		isMobile.Opera() ||
		isMobile.Windows());
	}
};


function section4Slider() {
	let imagesContainer = document.querySelector('.slides');
	const sliderWraper = parseInt(getComputedStyle(document.querySelector('.section-4-slider-wraper')).width);
	const images = document.querySelectorAll('.slider-image-wraper');
	const button = document.querySelectorAll('.slider_button');
	const forward = document.querySelector('.forward');
	const back = document.querySelector('.back');
	const swiper = document.querySelector('.section-4-slider-wraper');
	const query = window.matchMedia('(max-width: 768px)');

	let imageWidth = images[0].offsetWidth;
	let imageMargin = parseInt(getComputedStyle(images[0]).marginRight);
	let slideWidth = imageWidth + imageMargin;
	let index = 0;

	function nextSlide () {
		index++;
		if (query.matches) {
			if (index > images.length - 2) {
				index = 0
			}
		} else {
			if (index > images.length - 3) {
				index = 0
			}
				}
			imagesContainer.style.transform = "translateX(-" + index * slideWidth + "px)";
			imagesContainer.style.WebkitTransform = "translateX(-" + index * slideWidth + "px)";
			imagesContainer.style.MozTransform = "translateX(-" + index * slideWidth + "px)";
	}

	function prevSlide () {
		if (query.matches) {
			if (index <= 0) {
				index = images.length - 1;
			}
		} else {
			if (index <= 0) {
				index = images.length - 2;
			}
		}
		imagesContainer.style.transform = "translateX(-" + (index * slideWidth - slideWidth) + "px)";
		index--;
	}

	function sliderSwipe () {
		swiper.addEventListener('touchstart', () => {

			document.body.addEventListener('touchmove', onDrag, {passive: false});
			let x1 = event.targetTouches[0].clientX

			function onDrag (event) {
				event.preventDefault();

				let x2 = event.changedTouches[0].clientX * 0.65;
				let translateX = index * slideWidth;

				if (x1 - x2 > 0) {
				translateX = index * slideWidth + (sliderWraper - x2);
				} 
				if (x1 - x2 < 0) {
				translateX = index * slideWidth - x2;
				}
				imagesContainer.style.transform = "translateX(-" + translateX + "px)";
			}

			swiper.addEventListener('touchend', sliderSwipeCancel);
			swiper.addEventListener('touchcancel', sliderSwipeCancel);

			function sliderSwipeCancel (event) {
				document.body.removeEventListener('touchmove', onDrag, {passive: false});

				let x3 = event.changedTouches[0].clientX;

				if (x1-x3>=0 && (sliderWraper - x3) >= (slideWidth / 2 + 50)) {
						index++;
						if ((sliderWraper - x3) >= slideWidth + (slideWidth / 2 + 50)) {
							index++;
				}}

				if (x1-x3<0 && x3 > (slideWidth / 2 + 50)) {
						index--;
						if (x3 >= slideWidth + (slideWidth / 2)) {
							index--;
						}
				}

				if (query.matches) {
					if (index > images.length - 2) {
					index = images.length - 2
					}
				} else {
					if (index > images.length - 3) {
					index = images.length - 3
					}
				}
				if (index < 0) {index = 0}
				imagesContainer.style.transform = "translateX(-" + index * slideWidth + "px)";
			}
		})
	}

	if (isMobile.any()) {
	sliderSwipe ();
	}

	forward.addEventListener('click', nextSlide);
	back.addEventListener('click', prevSlide);
} section4Slider()


// //														ПРОКРУТКА НАВЕРХ										
// (function() {
// const btnToTop = document.querySelector('.arrow-to-up');

// function scrollTrack() {
// 	let scrolled = window.pageYOffset;
// 	let coords = document.documentElement.clientHeight;
// 	if (scrolled > coords) {
// 		btnToTop.classList.add('show');
// 	}
// 	if (scrolled < coords) {
// 		btnToTop.classList.remove('show');
// 	}
// }

// function toTop() {
// 	if (window.pageYOffset > 0) {
// 	window.scrollBy(0, -80);
// 	setTimeout(toTop, 10);
// 	}
// }

// btnToTop.addEventListener('click', toTop);

// window.addEventListener('scroll', scrollTrack);
// })();

// //														ССЫЛКИ-ЯКОРЯ														
// const anchors = document.querySelectorAll('a[href*="#"]');

// for (let anchor of anchors) {
// 	anchor.addEventListener("click", function (event) {
// 		event.preventDefault();
// 		const blockID = anchor.getAttribute('href');
// 		document.querySelector('' + blockID).scrollIntoView({
// 			behavior: "smooth",
// 			block: "nearest"
// 		});
// 	});
// }
