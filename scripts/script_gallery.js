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

function galleryModal () {

	const imagesWrapers = document.querySelectorAll('.image__wraper');
	const modal = document.querySelector('.modal');
	const modalFrame = document.querySelector('.modal__content');
	let modalImg = document.querySelector('.modal__image');
	const wrapers = [];

	for (let i = 0; i < imagesWrapers.length; i++) {
		wrapers.push(imagesWrapers[i])
	};

	for (var i = wrapers.length - 1; i >= 0; i--) {
		wrapers[i].addEventListener('click', openModal);
	};


	function openModal () {
		let image = this.children[0];
		modal.style.top = window.pageYOffset + 'px';
			modal.style.transition = 'none';
			modal.style.WebkitTransition = 'none';
			modal.style.MozTransition = 'none';


		window.addEventListener('scroll', moveModal);

		function moveModal (event) {
			modal.style.top = window.pageYOffset + 'px';
		};
		
		modal.classList.add('active');
		modalImg.src = image.src;


		modal.addEventListener('click', closeModal);

		function closeModal () {
			window.removeEventListener('scroll', moveModal);
			modal.style.transition = 'all linear 0.2s';
			modal.style.WebkitTransition = 'all linear 0.2s';
			modal.style.MozTransition = 'all linear 0.2s';
			modal.classList.remove('active');
			modal.removeEventListener('click', closeModal);
		};

	}

}; galleryModal ();