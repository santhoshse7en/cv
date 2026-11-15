/* M Santhosh Kumar — personal site (vanilla JS, no dependencies) */
(function () {
	"use strict";

	var root = document.documentElement;

	/* ---------- Theme toggle (follows the system until chosen) ---------- */
	var themeBtn = document.querySelector(".theme-btn");
	if (themeBtn) {
		themeBtn.addEventListener("click", function () {
			var current = root.getAttribute("data-theme") ||
				(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
			var next = current === "dark" ? "light" : "dark";
			root.setAttribute("data-theme", next);
			try { localStorage.setItem("theme", next); } catch (e) {}
		});
	}

	/* ---------- Toast ---------- */
	var toastEl = document.getElementById("toast");
	var toastTimer;
	function showToast(message) {
		if (!toastEl) return;
		toastEl.textContent = message;
		toastEl.classList.add("show");
		clearTimeout(toastTimer);
		toastTimer = setTimeout(function () { toastEl.classList.remove("show"); }, 2200);
	}

	/* ---------- Copy email ---------- */
	document.querySelectorAll(".copy-btn[data-copy]").forEach(function (btn) {
		var label = btn.querySelector("span");
		var use = btn.querySelector("use");
		btn.addEventListener("click", function () {
			var text = btn.getAttribute("data-copy");
			function done() {
				showToast("Email copied");
				if (label) label.textContent = "Copied";
				if (use) use.setAttribute("href", "#i-check");
				setTimeout(function () {
					if (label) label.textContent = "Copy";
					if (use) use.setAttribute("href", "#i-copy");
				}, 1600);
			}
			if (navigator.clipboard && navigator.clipboard.writeText) {
				navigator.clipboard.writeText(text).then(done).catch(function () { showToast(text); });
			} else {
				showToast(text);
			}
		});
	});

	/* ---------- Track filter ---------- */
	var trackButtons = document.querySelectorAll(".tracks button");
	var sessions = document.querySelectorAll(".sessions li");
	trackButtons.forEach(function (btn) {
		btn.addEventListener("click", function () {
			var track = btn.getAttribute("data-track");
			trackButtons.forEach(function (b) {
				var on = b === btn;
				b.classList.toggle("is-on", on);
				b.setAttribute("aria-pressed", on ? "true" : "false");
			});
			sessions.forEach(function (row) {
				row.hidden = track !== "all" && row.getAttribute("data-track") !== track;
			});
		});
	});

	/* ---------- Live GitHub counts (static text stays if the API is unavailable) ---------- */
	var starEls = document.querySelectorAll("[data-gh-stars]");
	if (starEls.length && window.fetch) {
		var repo = starEls[0].getAttribute("data-gh-stars");
		fetch("https://api.github.com/repos/" + repo, { headers: { Accept: "application/vnd.github+json" } })
			.then(function (r) { return r.ok ? r.json() : null; })
			.then(function (data) {
				if (!data) return;
				document.querySelectorAll('[data-gh-stars="' + repo + '"]').forEach(function (el) {
					if (typeof data.stargazers_count === "number") el.textContent = data.stargazers_count.toLocaleString("en-IN");
				});
				document.querySelectorAll('[data-gh-forks="' + repo + '"]').forEach(function (el) {
					if (typeof data.forks_count === "number") el.textContent = data.forks_count.toLocaleString("en-IN");
				});
			})
			.catch(function () {});
	}

	/* ---------- Footer year ---------- */
	var yearEl = document.getElementById("year");
	if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
