
let flavour1Info = document.querySelector("#flavour1Info"),
btn1 = document.querySelector("#flavour1"),

flavour2Info = document.querySelector("#flavour2Info"),
btn2 = document.querySelector("#flavour2"),

flavour3Info = document.querySelector("#flavour3Info"),
btn3 = document.querySelector("#flavour3"),

flavour4Info = document.querySelector("#flavour4Info"),
btn4 = document.querySelector("#flavour4"),

flavour5Info = document.querySelector("#flavour5Info"),
btn5 = document.querySelector("#flavour5");

const openVideoButton = document.getElementById('open-video');
const closeVideoButton = document.getElementById('close-video');
const videoModal = document.getElementById('video-modal');

openVideoButton.addEventListener('click', function() {
  videoModal.style.display = 'block';
});

closeVideoButton.addEventListener('click', function() {
  videoModal.style.display = 'none';
});


(function(){
	"use strict";
	
	console.log("fired");

	let button = document.querySelector("#hamburger");
	let burgerCon = document.querySelector("#burger-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};

	// let hamburgerMenu = () => {
	// 	burgerCon.classList.toggle("slide-toggle");
	// 	button.classList.toggle("expanded");
	// };

	button.addEventListener("click", hamburgerMenu, false);
		
})();

//Can also be written like this:
//(() => {  })();   

// Info about IIFE https://flaviocopes.com/javascript-iife/