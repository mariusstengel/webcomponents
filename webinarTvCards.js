	let FragDoc = new DocumentFragment();
	let status = "initialisieren";
	// Url von Daten-Src
	let __urlSrc;
	let __semTyp;
	let __seminarOrt = location.search
	if (__seminarOrt.includes("?seminarort")) {
		__seminarOrt = __seminarOrt.replace("?seminarort=", "");
		__seminarOrt = __seminarOrt.charAt(0).toUpperCase() + __seminarOrt.slice(1);
	}
	else {
		__seminarOrt = "";
	}

	
	// Function's Declaration
	async function semInit(url, seminarTyp) {
		__urlSrc = url;
		__semTyp = seminarTyp;
		// Seminar_Daten laden --> danach FilterPanel
		await fetchData();
		// FragDoc zum DOM hinzufügen
		document.getElementById("semCardWrapper").appendChild(FragDoc);
		/* GA Data Layer: Erfassen des Klicks auf den Anmeldebutton */
		GAcrButtonTracker();
		// Selektoren definieren
		let cityButton = document.getElementById("city");
		let dateButton = document.getElementById("date");
		// Registrating EventListener
		cityButton.addEventListener("change", dataHandler.bind(null, cityButton), false);
		dateButton.addEventListener("click", dataHandler.bind(null, dateButton), false);
	};

	function dataHandler(el) {
		// Check if SemCards already exist on the page --> if true delete them
		if (document.getElementById("semCards")) {
			document.getElementById("semCards").remove();
			insertLoadingScreeen(el);
		}
		for (let childs of el.parentElement.children) {
			if (childs.classList.contains("btn-primary")) {
				childs.classList.remove("btn-primary");
				childs.classList.add("btn-light");
			}
		}
		el.classList.remove("btn-light");
		el.classList.add("btn-primary");
		el.disabled = true;
		fetchData(el);
	}

	function insertLoadingScreeen(el) {
		let outerWrap = document.createElement("div");
		outerWrap.classList.add("d-flex", "flex-row", "w-100", "justify-content-center", "my-5", "pt-4");
		outerWrap.id = "loader";
		let innerWrap = document.createElement("div");
		innerWrap.classList.add("spinner-border");
		innerWrap.setAttribute("role", "status");
		let span = document.createElement("span");
		span.classList.add("sr-only");
		span.innerText = "Loading...";
		innerWrap.appendChild(span);
		outerWrap.appendChild(innerWrap);
		el.parentElement.parentElement.parentElement.insertBefore(outerWrap, el.parentElement.parentElement.nextElementSibling);
	}

	async function fetchData(selector) {
		let postValue;
		if (status == "initialisieren") {
			postValue = "date";
		}
		else {
			if (!selector && __seminarOrt == "") {
				postValue = "date";
			}
			else if (!selector && __seminarOrt != "") {
				postValue = __seminarOrt;
			}
			else if (selector && __seminarOrt != "") {
				postValue = selector.value;
			}
			else if (selector && __seminarOrt == "") {
				postValue = selector.value;
			}
		}
		let postData = new FormData();
		postData.append("selector", postValue);
		postData.append("seminarTyp", __semTyp);
		const options = {
			method: "POST", 
			body: postData
		};
		const req = await fetch(__urlSrc, options);
		const res = await req.text();
		if (req.ok) {
			if (document.getElementById("loader")) {
				document.getElementById("loader").remove();
			}
			// alle Standorte abholen und dann neu laden
			const parser = new DOMParser();
			let htmlSrc = parser.parseFromString(res, "text/html");
			let renderedCards = htmlSrc.getElementById("semCards");

			if (status == "initialisieren") {
				let citys = renderedCards.getElementsByClassName("standorte");
				let citysArr = [];
				for (let city of citys) {
					city = (city.textContent).replace(/\n|\r|\t/g, "").trim();
					city = city.replace(" (Online)", "");
					citysArr.push(city);
				}
				// Filtern des Arrays damit keine doppelten Städte enthalten sind
				citysArr.sort();
				citysArr = citysArr.filter(function (item, pos, arry)  {
					// wenn !pos -> true (ist true wenn pos = 0) dann return item an pos 0 ansonsten (||) wenn (item != arry[pos - 1]) = true dann diesen Wert übernehmen alle Werte bei denen sich false ergibt, werden nicht übernommen also herausgefiltert
					return !pos || item != arry[pos - 1]
				});

				importFilterPanel(citysArr);
				status = "preloaded";
				return fetchData();
			}
			else if (status == "preloaded") {
				nearestSems(renderedCards);
				// PopOver Funktionaliät durch Bootstrap / JQuery --> Position ist wichtig
				$(function () {
					$('[data-toggle="popover"]').popover()
				});
				setImgWidthHights(renderedCards);
				integrateDate(renderedCards);
				return status = "initialisiert";
			}			 
			else {
				nearestSems(renderedCards);
				// PopOver Funktionaliät durch Bootstrap / JQuery --> Position ist wichtig
				$(function () {
					$('[data-toggle="popover"]').popover()
				});
				selector.disabled = false;
				// FragDoc zum DOM hinzufügen
				setImgWidthHights(renderedCards);
				integrateDate(renderedCards);
				document.getElementById("semCardWrapper").appendChild(FragDoc);
				/* GA Data Layer: Erfassen des Klicks auf den Anmeldebutton */
				GAcrButtonTracker();
			}
		}
		else {
			console.error("Fehler");
		}
	}

	function integrateDate(renderedCards) {
		if (renderedCards.childElementCount > 0) {
			if (document.getElementById("noSemsMsg")) {
				document.getElementById("noSemsMsg").remove();
			}
			FragDoc.appendChild(renderedCards);
		}
		else {
			if (!document.getElementById("noSemsMsg")) {
				let div = document.createElement("div");
				div.id = "noSemsMsg";
				div.classList.add("alert", "alert-warning");
				div.setAttribute("role", "alert");
				let p = document.createElement("p");
				p.textContent = "Keine Seminare derzeit verfügbar";
				div.appendChild(p);
				FragDoc.appendChild(div);
			}
		}
	}

	function setImgWidthHights(elems) {
		let img = elems.getElementsByTagName("img");
		var poll = setInterval(function () {
			if (img[0].naturalWidth) {
				clearInterval(poll);
				Array.from(img).forEach(image => {
					image.setAttribute("width", image.naturalWidth);
					image.setAttribute("height", image.naturalHeight);
				});
			}
		}, 10);
	}



	function importFilterPanel(citysArr) {
		let filterPanel = new semCardFilter(citysArr);
		FragDoc.insertBefore(filterPanel, FragDoc.firstElementChild);
	}

	function nearestSems(elem) {
			if (elem.childElementCount > 5) {
				for (let i = 0; i < elem.childElementCount; i++) {
					if (i > 4) {
						elem.children[i].classList.add("d-none");
					}
					else {}
				}
				let div = document.createElement("div");
				div.classList.add("w-100");
				let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
				let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				let button = document.createElement("button");
				button.className = "w-fitcontent rounded p-2 ml-5 btn position-relative";
				button.style.cssText = "background-color: var(--primary); border-radius: 5px; color: white;";
				button.id = "showMoreButton";
				button.innerText = "Mehr anzeigen";
				svg.setAttribute("width", "16");
				svg.setAttribute("height", "16");
				svg.setAttribute("fill", "currentColor");
				svg.setAttribute("viewbox", "0 0 16 16");
				svg.style.cssText = "transform: scale(1.4); margin-left: 5px; fill: lightgrey";
				path.setAttribute("fill-rule", "evenodd");
				path.setAttribute("d", "M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z");
				svg.appendChild(path);
				button.appendChild(svg);
				div.appendChild(button);
				elem.appendChild(div);
				return button.addEventListener("click", function() {
					showMoreAnimation(elem);
				}, false);
			}
	}
	
	function showMoreAnimation() {
		let b = document.getElementById("showMoreButton");
		let c = 1;
		let c2 = 0;
		requestAnimationFrame(animateButton);
		function animateButton() {
			b.style.top = c2 + "px";
			b.style.opacity = c;
			c = c - 0.2;
			c2 = c2 + 2;
			if (window.getComputedStyle(b).opacity > "0") {
				requestAnimationFrame(animateButton);
			}
			else {
				cancelAnimationFrame(animateButton);
				b.parentElement.remove();
				showMoreSems();
			}
		}
	}

	function showMoreSems() {
		let elems = document.getElementById("semCards").getElementsByClassName("d-none");
		elems = Array.from(elems);
		elems.forEach(input => {
			input.classList.remove("d-none");
		});
	}

	function GAcrButtonTracker() {
		let __crButton = document.getElementById("semCardWrapper").querySelectorAll("[crbutton]");
		for (let a of __crButton) {
			a.addEventListener("click", () => {
				dataLayer.push(
					{
						"event": "__click__crButton",
						"sem_Card_SeminarOrt": a.getAttribute("semort")
					}
				);
			}, false);
		}
	}