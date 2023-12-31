$(document).ready(function() {
  $("#header").load("header.html");
  $("#footer").load("footer.html");
});

function close_nav() {
    document.getElementById("nav").style.display = "none";
}

function open_nav() {
    document.getElementById("nav").style.display = "flex";
    console.log("open");
}

function toggle(x) {
  classname = '#' + x;
  $(classname).slideToggle('slow'); 
}

var galley_sections = ["inaug", "day1", "day2", "day3", "day4", "day5", "day6", "closing"];

function show(e) {
	for (var i = 0; i < galley_sections.length; i++) {
		if (galley_sections[i] == e) {
		document.getElementById(galley_sections[i]).style.display = "block";
		} else {
		document.getElementById(galley_sections[i]).style.display = "none";
		}
  }
} 

function closeOpenDropdowns(e) {
	let openDropdownEls = document.querySelectorAll("details.dropdown[open]");

	if (openDropdownEls.length > 0) {
		// If we're clicking anywhere but the summary element, close dropdowns
		if (e.target.parentElement.nodeName.toUpperCase() !== "SUMMARY") {
			openDropdownEls.forEach((dropdown) => {
				dropdown.removeAttribute("open");
			});
		}
	}
}

document.addEventListener("click", closeOpenDropdowns);