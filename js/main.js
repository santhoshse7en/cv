/* M Santhosh Kumar — Portfolio (vanilla JS, no dependencies) */
(function () {
	"use strict";

	var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	var root = document.documentElement;

	/* ---------- Shared: smooth-scroll to a section, offset for fixed header ---------- */
	function scrollToId(id) {
		var target = document.querySelector(id);
		if (!target) return;
		var navH = parseInt(getComputedStyle(root).getPropertyValue("--nav-h")) || 76;
		var top = target.getBoundingClientRect().top + window.scrollY - (navH - 8);
		window.scrollTo({ top: top, behavior: reduceMotion ? "auto" : "smooth" });
		history.replaceState(null, "", id);
	}

	/* ---------- Theme toggle ---------- */
	var themeToggle = document.querySelector(".theme-toggle");
	var storedTheme = localStorage.getItem("theme");
	if (storedTheme) root.setAttribute("data-theme", storedTheme);

	function toggleTheme() {
		var current = root.getAttribute("data-theme") ||
			(window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
		var next = current === "dark" ? "light" : "dark";
		root.setAttribute("data-theme", next);
		localStorage.setItem("theme", next);
	}
	if (themeToggle) themeToggle.addEventListener("click", toggleTheme);

	/* ---------- Page loader ---------- */
	window.addEventListener("load", function () {
		var loader = document.getElementById("page-loader");
		if (loader) {
			loader.classList.add("hidden");
			setTimeout(function () { loader.remove(); }, 600);
		}
	});

	/* ---------- Animated tech background (particle network) ---------- */
	var networkCanvas = document.getElementById("bg-network");
	if (networkCanvas && networkCanvas.getContext) {
		var netCtx = networkCanvas.getContext("2d");
		var netDpr = Math.min(window.devicePixelRatio || 1, 1.5);
		var netWidth = 0, netHeight = 0, netParticles = [], netAnimId = null;
		var netMouse = { x: 0, y: 0, active: false };

		function netIsLight() {
			return root.getAttribute("data-theme") === "light" ||
				(!root.getAttribute("data-theme") && window.matchMedia("(prefers-color-scheme: light)").matches);
		}
		function netLineColor(alpha) {
			return netIsLight() ? "rgba(30, 30, 45, " + alpha + ")" : "rgba(205, 215, 255, " + alpha + ")";
		}
		function netDotColor() {
			return netIsLight() ? "rgba(139, 92, 246, 0.55)" : "rgba(139, 92, 246, 0.8)";
		}

		function netInitParticles() {
			var count = Math.min(90, Math.max(24, Math.floor((netWidth * netHeight) / 16000)));
			netParticles = [];
			for (let n = 0; n < count; n++) {
				netParticles.push({
					x: Math.random() * netWidth,
					y: Math.random() * netHeight,
					vx: (Math.random() - 0.5) * 0.35,
					vy: (Math.random() - 0.5) * 0.35,
					r: Math.random() * 1.6 + 0.8
				});
			}
		}

		function netResize() {
			netWidth = window.innerWidth;
			netHeight = window.innerHeight;
			networkCanvas.width = netWidth * netDpr;
			networkCanvas.height = netHeight * netDpr;
			networkCanvas.style.width = netWidth + "px";
			networkCanvas.style.height = netHeight + "px";
			netCtx.setTransform(netDpr, 0, 0, netDpr, 0, 0);
			netInitParticles();
		}

		function netStep() {
			netCtx.clearRect(0, 0, netWidth, netHeight);
			var linkDist = 130;

			for (let n = 0; n < netParticles.length; n++) {
				var p = netParticles[n];
				p.x += p.vx;
				p.y += p.vy;
				if (p.x < 0 || p.x > netWidth) p.vx *= -1;
				if (p.y < 0 || p.y > netHeight) p.vy *= -1;
				p.x = Math.max(0, Math.min(netWidth, p.x));
				p.y = Math.max(0, Math.min(netHeight, p.y));
			}

			for (let a = 0; a < netParticles.length; a++) {
				for (let b = a + 1; b < netParticles.length; b++) {
					var dx = netParticles[a].x - netParticles[b].x;
					var dy = netParticles[a].y - netParticles[b].y;
					var dist = Math.sqrt(dx * dx + dy * dy);
					if (dist < linkDist) {
						netCtx.strokeStyle = netLineColor((1 - dist / linkDist) * 0.35);
						netCtx.lineWidth = 1;
						netCtx.beginPath();
						netCtx.moveTo(netParticles[a].x, netParticles[a].y);
						netCtx.lineTo(netParticles[b].x, netParticles[b].y);
						netCtx.stroke();
					}
				}
				if (netMouse.active) {
					var mdx = netParticles[a].x - netMouse.x;
					var mdy = netParticles[a].y - netMouse.y;
					var mdist = Math.sqrt(mdx * mdx + mdy * mdy);
					var mouseLinkDist = linkDist * 1.4;
					if (mdist < mouseLinkDist) {
						netCtx.strokeStyle = netLineColor((1 - mdist / mouseLinkDist) * 0.45);
						netCtx.lineWidth = 1;
						netCtx.beginPath();
						netCtx.moveTo(netParticles[a].x, netParticles[a].y);
						netCtx.lineTo(netMouse.x, netMouse.y);
						netCtx.stroke();
					}
				}
			}

			netCtx.fillStyle = netDotColor();
			for (let n = 0; n < netParticles.length; n++) {
				netCtx.beginPath();
				netCtx.arc(netParticles[n].x, netParticles[n].y, netParticles[n].r, 0, Math.PI * 2);
				netCtx.fill();
			}

			netAnimId = requestAnimationFrame(netStep);
		}

		function netStart() {
			if (netAnimId) cancelAnimationFrame(netAnimId);
			netAnimId = requestAnimationFrame(netStep);
		}

		var netResizeTimer;
		window.addEventListener("resize", function () {
			clearTimeout(netResizeTimer);
			netResizeTimer = setTimeout(netResize, 200);
		});
		window.addEventListener("mousemove", function (e) {
			netMouse.x = e.clientX;
			netMouse.y = e.clientY;
			netMouse.active = true;
		}, { passive: true });
		window.addEventListener("mouseleave", function () { netMouse.active = false; });
		document.addEventListener("visibilitychange", function () {
			if (document.hidden) {
				if (netAnimId) cancelAnimationFrame(netAnimId);
			} else {
				netStart();
			}
		});

		netResize();
		netStart();
	}

	/* ---------- Header scroll state + scroll-progress bar ---------- */
	var header = document.querySelector(".site-header");
	var progressBar = document.getElementById("scroll-progress");
	function onScroll() {
		if (header) {
			if (window.scrollY > 12) header.classList.add("scrolled");
			else header.classList.remove("scrolled");
		}

		var backToTop = document.querySelector(".back-to-top");
		if (backToTop) {
			if (window.scrollY > 600) backToTop.classList.add("visible");
			else backToTop.classList.remove("visible");
		}

		if (progressBar) {
			var docHeight = document.documentElement.scrollHeight - window.innerHeight;
			var pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
			progressBar.style.width = pct + "%";
		}
	}
	document.addEventListener("scroll", onScroll, { passive: true });
	onScroll();

	/* ---------- Mobile nav (backdrop, escape, focus handling) ---------- */
	var navToggle = document.querySelector(".nav-toggle");
	var mobileNav = document.querySelector(".mobile-nav");
	var mobileBackdrop = document.querySelector(".mobile-nav-backdrop");
	var lastNavFocus = null;

	function openMobileNav() {
		mobileNav.classList.add("open");
		if (mobileBackdrop) mobileBackdrop.classList.add("open");
		navToggle.setAttribute("aria-expanded", "true");
		lastNavFocus = document.activeElement;
		var firstLink = mobileNav.querySelector("a");
		if (firstLink) firstLink.focus();
	}
	function closeMobileNav() {
		mobileNav.classList.remove("open");
		if (mobileBackdrop) mobileBackdrop.classList.remove("open");
		navToggle.setAttribute("aria-expanded", "false");
		if (lastNavFocus && lastNavFocus.focus) lastNavFocus.focus();
	}
	if (navToggle && mobileNav) {
		navToggle.addEventListener("click", function () {
			if (mobileNav.classList.contains("open")) closeMobileNav();
			else openMobileNav();
		});
		mobileNav.querySelectorAll("a").forEach(function (link) {
			link.addEventListener("click", closeMobileNav);
		});
		if (mobileBackdrop) mobileBackdrop.addEventListener("click", closeMobileNav);
		document.addEventListener("keydown", function (e) {
			if (e.key === "Escape" && mobileNav.classList.contains("open")) closeMobileNav();
		});
	}

	/* ---------- Scrollspy: highlight active nav link ---------- */
	var sections = document.querySelectorAll("section[id]");
	var navLinks = document.querySelectorAll(".nav-links a, .mobile-nav a");
	if (sections.length && "IntersectionObserver" in window) {
		var spy = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					var id = entry.target.getAttribute("id");
					navLinks.forEach(function (link) {
						link.classList.toggle("active", link.getAttribute("href") === "#" + id);
					});
				}
			});
		}, { rootMargin: "-45% 0px -50% 0px" });
		sections.forEach(function (s) { spy.observe(s); });
	}

	/* ---------- Reveal on scroll ---------- */
	var revealEls = document.querySelectorAll(".reveal");
	if ("IntersectionObserver" in window && !reduceMotion) {
		var revealObserver = new IntersectionObserver(function (entries, obs) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add("in-view");
					obs.unobserve(entry.target);
				}
			});
		}, { threshold: 0.12 });
		revealEls.forEach(function (el) { revealObserver.observe(el); });
	} else {
		revealEls.forEach(function (el) { el.classList.add("in-view"); });
	}

	/* ---------- Hero role rotator ---------- */
	var roleEl = document.querySelector(".role-rotate");
	if (roleEl) {
		var roles = JSON.parse(roleEl.getAttribute("data-roles") || "[]");
		if (roles.length) {
			var i = 0;
			roleEl.textContent = roles[0];
			if (!reduceMotion) {
				setInterval(function () {
					i = (i + 1) % roles.length;
					roleEl.style.opacity = 0;
					setTimeout(function () {
						roleEl.textContent = roles[i];
						roleEl.style.opacity = 1;
					}, 220);
				}, 2400);
				roleEl.style.transition = "opacity .2s ease";
			}
		}
	}

	/* ---------- Animated stat counters ---------- */
	var counters = document.querySelectorAll(".count[data-count]");
	function animateCount(el) {
		var target = parseInt(el.getAttribute("data-count"), 10) || 0;
		if (reduceMotion) { el.textContent = target; return; }
		var duration = 1100;
		var startTime = null;
		function step(ts) {
			if (!startTime) startTime = ts;
			var progress = Math.min((ts - startTime) / duration, 1);
			var eased = 1 - Math.pow(1 - progress, 3);
			el.textContent = Math.round(eased * target);
			if (progress < 1) requestAnimationFrame(step);
			else el.textContent = target;
		}
		requestAnimationFrame(step);
	}
	if (counters.length) {
		if ("IntersectionObserver" in window) {
			var counterObserver = new IntersectionObserver(function (entries, obs) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting) {
						animateCount(entry.target);
						obs.unobserve(entry.target);
					}
				});
			}, { threshold: 0.4 });
			counters.forEach(function (el) { counterObserver.observe(el); });
		} else {
			counters.forEach(function (el) { el.textContent = el.getAttribute("data-count"); });
		}
	}

	/* ---------- Tilt-on-hover for cards ---------- */
	var canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
	if (canHover && !reduceMotion) {
		document.querySelectorAll(".project-card, .skill-card").forEach(function (card) {
			card.addEventListener("mousemove", function (e) {
				var rect = card.getBoundingClientRect();
				var x = (e.clientX - rect.left) / rect.width - 0.5;
				var y = (e.clientY - rect.top) / rect.height - 0.5;
				var rotateX = (-y * 8).toFixed(2);
				var rotateY = (x * 8).toFixed(2);
				card.style.transform = "perspective(700px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) translateY(-4px)";
			});
			card.addEventListener("mouseleave", function () {
				card.style.transform = "";
			});
		});
	}

	/* ---------- Resume tabs: click, keyboard roving nav, hash deep-link ---------- */
	var tabButtons = document.querySelectorAll(".resume-tabs button");
	var tabPanels = document.querySelectorAll(".resume-panel");

	function activateTab(btn, opts) {
		opts = opts || {};
		tabButtons.forEach(function (b) {
			b.classList.remove("active");
			b.setAttribute("aria-selected", "false");
			b.tabIndex = -1;
		});
		tabPanels.forEach(function (p) { p.classList.remove("active"); });

		btn.classList.add("active");
		btn.setAttribute("aria-selected", "true");
		btn.tabIndex = 0;

		var targetId = btn.getAttribute("data-tab");
		var panel = document.getElementById(targetId);
		if (panel) panel.classList.add("active");

		if (!opts.skipHash) {
			history.replaceState(null, "", "#resume-section/" + targetId.replace("tab-", ""));
		}
	}

	tabButtons.forEach(function (btn) {
		btn.addEventListener("click", function () { activateTab(btn); });
	});

	var resumeTabsEl = document.querySelector(".resume-tabs");
	if (resumeTabsEl) {
		resumeTabsEl.addEventListener("keydown", function (e) {
			var buttons = Array.prototype.slice.call(tabButtons);
			var currentIndex = buttons.findIndex(function (b) { return b.classList.contains("active"); });
			var nextIndex = null;
			if (e.key === "ArrowRight" || e.key === "ArrowDown") nextIndex = (currentIndex + 1) % buttons.length;
			else if (e.key === "ArrowLeft" || e.key === "ArrowUp") nextIndex = (currentIndex - 1 + buttons.length) % buttons.length;
			else if (e.key === "Home") nextIndex = 0;
			else if (e.key === "End") nextIndex = buttons.length - 1;
			if (nextIndex !== null) {
				e.preventDefault();
				activateTab(buttons[nextIndex]);
				buttons[nextIndex].focus();
			}
		});
	}

	(function initResumeTabFromHash() {
		var hash = window.location.hash;
		if (hash.indexOf("#resume-section/") === 0) {
			var key = hash.split("/")[1];
			var match = document.getElementById("tabbtn-" + key);
			if (match) activateTab(match, { skipHash: true });
		}
	})();

	/* ---------- Project filters ---------- */
	var filterButtons = document.querySelectorAll(".project-filters button");
	var projectCards = document.querySelectorAll(".project-card");
	filterButtons.forEach(function (btn) {
		btn.addEventListener("click", function () {
			var filter = btn.getAttribute("data-filter");
			filterButtons.forEach(function (b) { b.classList.remove("active"); });
			btn.classList.add("active");
			projectCards.forEach(function (card) {
				var match = filter === "all" || card.getAttribute("data-platform") === filter;
				card.classList.toggle("hidden", !match);
			});
		});
	});

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
	function copyEmail() {
		var email = "santhoshse7en@gmail.com";
		if (navigator.clipboard && navigator.clipboard.writeText) {
			navigator.clipboard.writeText(email).then(function () {
				showToast("Email copied to clipboard");
			}).catch(function () {
				showToast(email);
			});
		} else {
			showToast(email);
		}
	}
	var copyBtn = document.querySelector(".copy-email-btn");
	if (copyBtn) {
		copyBtn.addEventListener("click", function () {
			copyEmail();
			copyBtn.classList.add("copied");
			var svgUse = copyBtn.querySelector("svg use");
			var prevHref = svgUse.getAttribute("href");
			svgUse.setAttribute("href", "#icon-check");
			setTimeout(function () {
				svgUse.setAttribute("href", prevHref);
				copyBtn.classList.remove("copied");
			}, 1600);
		});
	}

	/* ---------- Command palette (Ctrl/Cmd+K) ---------- */
	var cmdkOverlay = document.getElementById("cmdk-overlay");
	var cmdkInput = document.getElementById("cmdk-input");
	var cmdkList = document.getElementById("cmdk-list");
	var cmdkTrigger = document.getElementById("cmdk-trigger");

	if (cmdkOverlay && cmdkInput && cmdkList) {
		var commands = [
			{ label: "Go to Home", hint: "Section", action: function () { scrollToId("#home"); } },
			{ label: "Go to About", hint: "Section", action: function () { scrollToId("#about-section"); } },
			{ label: "Go to Resume", hint: "Section", action: function () { scrollToId("#resume-section"); } },
			{ label: "Go to Projects", hint: "Section", action: function () { scrollToId("#projects-section"); } },
			{ label: "Go to Contact", hint: "Section", action: function () { scrollToId("#contact-section"); } },
			{ label: "Copy email address", hint: "Action", action: copyEmail },
			{ label: "Toggle light / dark theme", hint: "Action", action: toggleTheme },
			{ label: "Open GitHub profile", hint: "↗", action: function () { window.open("https://github.com/santhoshse7en", "_blank", "noopener"); } },
			{ label: "Open PyPI profile", hint: "↗", action: function () { window.open("https://pypi.org/user/santhoshse7en/", "_blank", "noopener"); } },
			{ label: "Open npm profile", hint: "↗", action: function () { window.open("https://www.npmjs.com/~santhoshse7en", "_blank", "noopener"); } },
			{ label: "Open LinkedIn profile", hint: "↗", action: function () { window.open("https://www.linkedin.com/in/m-santhosh-kumar/", "_blank", "noopener"); } },
			{ label: "Download résumé", hint: "↓", action: function () { window.open("https://drive.google.com/uc?id=1Vhc5wcg0-SGWfR5hgnRFZotR65r9IOA7&export=download", "_blank"); } }
		];

		var filtered = commands.slice();
		var activeIndex = 0;
		var lastFocused = null;

		function renderCmdkList() {
			cmdkList.innerHTML = "";
			if (!filtered.length) {
				var empty = document.createElement("li");
				empty.className = "empty";
				empty.textContent = "No matching commands";
				cmdkList.appendChild(empty);
				return;
			}
			filtered.forEach(function (cmd, idx) {
				var li = document.createElement("li");
				li.className = idx === activeIndex ? "active" : "";
				li.setAttribute("role", "option");
				var main = document.createElement("span");
				main.className = "cmdk-item-main";
				main.textContent = cmd.label;
				var hint = document.createElement("span");
				hint.className = "cmdk-hint";
				hint.textContent = cmd.hint;
				li.appendChild(main);
				li.appendChild(hint);
				li.addEventListener("click", function () { runCommand(cmd); });
				li.addEventListener("mouseenter", function () { activeIndex = idx; renderCmdkList(); });
				cmdkList.appendChild(li);
			});
		}

		function runCommand(cmd) {
			closeCmdk();
			cmd.action();
		}

		function openCmdk() {
			lastFocused = document.activeElement;
			cmdkOverlay.hidden = false;
			cmdkInput.value = "";
			filtered = commands.slice();
			activeIndex = 0;
			renderCmdkList();
			setTimeout(function () { cmdkInput.focus(); }, 10);
		}
		function closeCmdk() {
			cmdkOverlay.hidden = true;
			if (lastFocused && lastFocused.focus) lastFocused.focus();
		}

		if (cmdkTrigger) cmdkTrigger.addEventListener("click", openCmdk);

		cmdkInput.addEventListener("input", function () {
			var q = cmdkInput.value.toLowerCase();
			filtered = commands.filter(function (c) { return c.label.toLowerCase().indexOf(q) !== -1; });
			activeIndex = 0;
			renderCmdkList();
		});

		cmdkOverlay.addEventListener("click", function (e) {
			if (e.target === cmdkOverlay) closeCmdk();
		});

		document.addEventListener("keydown", function (e) {
			var isOpen = !cmdkOverlay.hidden;
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				if (isOpen) closeCmdk(); else openCmdk();
				return;
			}
			if (!isOpen) return;
			if (e.key === "Escape") { closeCmdk(); }
			else if (e.key === "ArrowDown") { e.preventDefault(); activeIndex = Math.min(activeIndex + 1, filtered.length - 1); renderCmdkList(); }
			else if (e.key === "ArrowUp") { e.preventDefault(); activeIndex = Math.max(activeIndex - 1, 0); renderCmdkList(); }
			else if (e.key === "Enter") { e.preventDefault(); if (filtered[activeIndex]) runCommand(filtered[activeIndex]); }
		});
	}

	/* ---------- Footer year ---------- */
	var yearEl = document.getElementById("year");
	if (yearEl) yearEl.textContent = new Date().getFullYear();

	/* ---------- Smooth-scroll offset for fixed header (in-page anchor links) ---------- */
	document.querySelectorAll('a[href^="#"]').forEach(function (link) {
		link.addEventListener("click", function (e) {
			var id = link.getAttribute("href");
			if (id.length < 2) return;
			if (!document.querySelector(id)) return;
			e.preventDefault();
			scrollToId(id);
		});
	});
})();
