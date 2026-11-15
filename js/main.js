/* M Santhosh Kumar — personal site (vanilla JS, no dependencies) */
(function () {
	"use strict";

	var root = document.documentElement;

	/* ---------- Theme toggle (follows the system until chosen) ---------- */
	var themeBtn = document.querySelector(".theme-btn");
	var darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
	function currentTheme() {
		return root.getAttribute("data-theme") || (darkQuery.matches ? "dark" : "light");
	}
	function syncTheme() {
		var theme = currentTheme();
		var label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
		if (themeBtn) {
			themeBtn.setAttribute("aria-label", label);
			themeBtn.setAttribute("title", label);
		}
		var bg = getComputedStyle(root).getPropertyValue("--paper").trim();
		document.querySelectorAll('meta[name="theme-color"]').forEach(function (m) { m.setAttribute("content", bg); });
	}
	if (themeBtn) {
		themeBtn.addEventListener("click", function () {
			var next = currentTheme() === "dark" ? "light" : "dark";
			root.setAttribute("data-theme", next);
			try { localStorage.setItem("theme", next); } catch (e) {}
			syncTheme();
		});
	}
	if (darkQuery.addEventListener) darkQuery.addEventListener("change", syncTheme);
	syncTheme();

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

	/* ---------- Current section in the nav ---------- */
	var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav a[href^='#']"));
	var navTargets = navLinks.map(function (link) { return document.querySelector(link.getAttribute("href")); });
	var spyQueued = false;
	function updateCurrent() {
		spyQueued = false;
		var line = window.innerHeight * 0.45;
		var current = -1;
		navTargets.forEach(function (el, i) {
			if (el && el.getBoundingClientRect().top <= line) current = i;
		});
		if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) current = navTargets.length - 1;
		navLinks.forEach(function (link, i) {
			if (i === current) link.setAttribute("aria-current", "true");
			else link.removeAttribute("aria-current");
		});
	}
	window.addEventListener("scroll", function () {
		if (!spyQueued) { spyQueued = true; requestAnimationFrame(updateCurrent); }
	}, { passive: true });
	updateCurrent();

	/* ---------- Footer year ---------- */
	var yearEl = document.getElementById("year");
	if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
