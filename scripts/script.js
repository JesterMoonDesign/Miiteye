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
	const sliderImageContainer = document.querySelectorAll('.slider-image-wraper');
	const sliderButton = document.querySelectorAll('.slider-nav');

	let sliderWraper = document.querySelector('.section-4-slider-wraper');
	let imageCount = sliderImageContainer.length;
	let imageWidth = 
(parseInt(getComputedStyle(sliderImageContainer[0]).width) * imageCount) + 
(parseInt(getComputedStyle(sliderImageContainer[0]).marginRight) * imageCount) + 
(parseInt(getComputedStyle(sliderButton[0]).width) * 2) + 
parseInt(getComputedStyle(sliderButton[0]).marginRight)

console.log(imageWidth)

	function sliderWraperResize() {
		if (imageCount >= 3) {
			sliderWraper.style.width = imageWidth + 'px'
		}
	}
// sliderWraperResize()

}
section4Slider()


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
