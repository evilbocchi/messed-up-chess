$(function () {
	$("#header").load("header.html");
	$("#footer").load("footer.html");
});

function toggleCollapsible(enabled) {
	if (!this.classList.contains("active") || enabled == true) {
		this.classList.add("active");
		var content = this.nextElementSibling;
		content.style.maxHeight = content.scrollHeight + "px";
	}
	else {
		this.classList.remove("active");
		this.nextElementSibling.style.maxHeight = 0;
	}
}

setTimeout(() => {
	for (const button of document.querySelectorAll(".collapsible")) {
		button.addEventListener("click", toggleCollapsible);
	}
}, 1000);

var board1 = Chessboard('board', 'start');