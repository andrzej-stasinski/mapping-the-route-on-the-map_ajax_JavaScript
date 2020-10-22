'use strict';

// DIV rozwijany
// ================================================================================

(function () {
	function load() {
		var tytul = document.getElementsByClassName('tytul');

		for (var i = 0; i < tytul.length; i++) {
			var podtytul = tytul[i].nextElementSibling;
			podtytul.style.display = 'none';

			tytul[i].onclick = function (e) {
				var stan = this.nextElementSibling.style.display == 'none' ? true : false;
				if (stan) {
					this.nextElementSibling.style.display = 'block';
					this.children[0].innerHTML = '&#9650;';
				} else {
					this.nextElementSibling.style.display = 'none';
					this.children[0].innerHTML = '&#9660;';
				}
			};
		}
	}
	window.onload = load;
})();



// Trasa: Moja pozycja -> adres
// Trasa: adres -> adres
// Trasa: Moja pozycja -> koordynaty
// ================================================================================

(function () {

	function wyznaczTrase(curr, adres) {
		console.log(curr);
		if (navigator.platform.indexOf('iPhone') != -1 || navigator.platform.indexOf('iPad') != -1 || navigator.platform.indexOf('iPod') != -1) {
			if (decodeURIComponent(curr) == 'My Location') curr = "";

			// if we're on iOS 
			// Mapy w iphone
			// window.open('http://maps.apple.com/?saddr='+ curr +'&daddr=' + adres);

			// Google Maps w iphone
			window.open('https://maps.google.com/maps?saddr=' + curr + '&daddr=' + adres);
		} else if (navigator.userAgent.match(/Android/i)) {
			if (decodeURIComponent(curr) == 'My Location') curr = "";

			// if Android
			window.open('https://maps.google.com/maps?saddr=' + curr + '&daddr=' + adres);
		} else {

			// if browser 
			window.open('https://maps.google.com/maps?saddr=' + curr + '&daddr=' + adres);
		}
	}

	// Trasa: aktualna pozycja -> adres
	var but1 = document.querySelector("#but1");
	but1.onclick = function () {
		var current = "My Location"; // for browser w komputerze
		console.log(current);
		current = encodeURIComponent(current);

		var cel1 = document.querySelector("#cel1");
		var address = cel1.value;
		console.log(address);
		address = encodeURIComponent(address);

		if (address != "") {
			cel1.classList.remove("error");
			wyznaczTrase(current, address);
		} else cel1.classList.add("error");
	};

	// Trasa: adres -> adres
	var but2 = document.querySelector("#but2");
	but2.onclick = function () {
		var skad = document.querySelector("#skad");
		var skadVal = skad.value;
		console.log(skadVal);
		skadVal = encodeURIComponent(skadVal);

		var cel2 = document.querySelector("#cel2");
		var adresValue = cel2.value;
		console.log(adresValue);
		adresValue = encodeURIComponent(adresValue);

		skad.classList.remove("error");
		cel2.classList.remove("error");
		// wyznaczTrase(skad, address);

		if (skadVal != "" && adresValue != "") {
			skad.classList.remove("error");
			wyznaczTrase(skadVal, adresValue);
		} else {
			if (skadVal == "" && adresValue == "") {
				skad.classList.add("error");
				cel2.classList.add("error");
			}
			if (skadVal == "") skad.classList.add("error");
			if (adresValue == "") cel2.classList.add("error");
		}
	};

	// Trasa: aktualna pozycja -> koordynaty
	var but3 = document.querySelector("#but3");
	but3.onclick = function () {
		var current = "My Location"; // for browser w komputerze
		console.log(current);
		current = encodeURIComponent(current);

		var coords = document.querySelector("#coords");
		var address = coords.value;
		console.log(address);
		address = encodeURIComponent(address);

		if (address != "") {
			coords.classList.remove("error");
			wyznaczTrase(current, address);
		} else coords.classList.add("error");
	};

})();














