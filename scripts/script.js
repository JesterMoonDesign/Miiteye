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
	const images = document.querySelectorAll('.slider-image-wraper');
	const button = document.querySelectorAll('.slider_button');
	const forward = document.querySelector('.forward')
	const back = document.querySelector('.back')
	const swiper = document.querySelector('.slider-nav')

	let imageWidth = images[0].offsetWidth;
	let imageMargin = parseInt(getComputedStyle(images[0]).marginRight);
	let index = 0;


	function nextSlide () {
		index++;
		if (index > images.length - 3) {
			index = images.length - 3
		}
		imagesContainer.style.transform = "translateX(-" + index * (imageWidth + imageMargin) + "px)";
		imagesContainer.style.WebkitTransform = "translateX(-" + index * (imageWidth + imageMargin) + "px)";
		imagesContainer.style.MozTransform = "translateX(-" + index * (imageWidth + imageMargin) + "px)";
		console.log(index)
	}
	function prevSlide () {
		imagesContainer.style.transform = "translateX(-" + (index * (imageWidth + imageMargin) - (imageWidth + imageMargin)) + "px)";
		index--;
		if (index < 0) {
			index = 0
		}
		console.log(index)
	}

// function sliderSwipe (event) {

// 	console.log(event.offsetX)
// 	// imagesContainer.style.transform = "translateX(-" + event + "px)";
// }

	
	// swiper.addEventListener('pointerdown', sliderSwipe)
	forward.addEventListener('click', nextSlide)
	back.addEventListener('click', prevSlide)
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
