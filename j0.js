// j0.js 0.52 by jonaro00
function slideShow(speed) {
	let slideIndex = 0, slides = document.getElementsByClassName("j0-slide");
	cycleSlides();
	setInterval(cycleSlides, speed);
	function cycleSlides() {
		for (let slide of slides) slide.style.opacity = "0";
		slideIndex++;
		if (slideIndex > slides.length) slideIndex = 1;
		slides[slideIndex-1].style.opacity = "1";
	}
}
function sortScoreboards(colIndex) {
	let rows, switched, i, x, y;
	for (let table of document.getElementsByClassName("j0-scoreboard")) {
		rows = table.rows;
		switched = true;
		while (switched) {
			switched = false;
			for (i = 0; i < (rows.length - 1); i++) {
				x = rows[i].children[colIndex].innerHTML;
				y = rows[i + 1].children[colIndex].innerHTML;
				if (isFinite(x) && isFinite(y)) {
					if (parseFloat(x) < parseFloat(y)) {
						rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
						switched = true;
						break;
					}
				}
			}
		}
	}
}
function disableImageDrag() {
	for (let img of document.getElementsByTagName("img")) img.draggable = false;
}
function disableLinkDrag() {
	for (let link of document.getElementsByTagName("a")) link.draggable = false;
}
function show(el) {
	document.getElementById(el).style.display = "block";
}
function hide(el) {
	document.getElementById(el).style.display = "none";
}
(
	function dropdownClick() {
		for (let cdd of document.getElementsByClassName("j0-dropdown-click")) {
			cdd.getElementsByTagName("button")[0].onclick = () => {
				let cont = cdd.getElementsByClassName("j0-dropdown-content")[0];
				if (cont.style.display == "inline-block") cont.style.display = "none";
				else cont.style.display = "inline-block";
			};
		}
	}
)();