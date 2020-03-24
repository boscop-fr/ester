document.addEventListener("DOMContentLoaded", function(event) {
	document.getElementById('scroll-btn').addEventListener("click", function(event) {
		event.preventDefault();
	    var myTop = document.getElementById('top');
		myTop.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
	});

	document.addEventListener("scroll", function(event) {
		var btnScroll = document.getElementById('scroll-btn');
		if (window.pageYOffset > 400) {
			btnScroll.classList.add("visible");
		}else{
			btnScroll.classList.remove("visible");
		}
	});
});
