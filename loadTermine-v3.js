// Create Fernsehprogramm Sections

function createH4(text, styleText) {
    let h4 = document.createElement("h4");
    h4.textContent = text;
    h4.style.cssText = styleText;
    return h4;
}

function createP(text, styleText, cssClassen) {
    let p = document.createElement("p");
    p.textContent = text;
    p.style.cssText = styleText;
    p.className = cssClassen;
    return p;
}

String.prototype.capitalize = function() {
    if (this.length === 0) {
        return this;
    }
    else {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
}

String.prototype.lower = function() {
    if (this.length === 0) {
        return this;
    }
    else {
        return this.charAt(0).toLowerCase() + this.slice(1);
    }
}

function createPtrainer(text) {
    let p = document.createElement("p");
    p.textContent = text;
    p.classList.add("text-danger", "font-weight-bold", "mt-1")
    return p;
}

function createIMG(src, cssClassen, cssStyle) {
    let img = document.createElement("img");
    img.className = cssClassen;
    img.style.cssText = cssStyle;
    img.src = src;
    return img;
}

function createSpan(text, cssClassen, styleText) {
    let span = document.createElement("span");
    span.textContent = text;
    span.className = cssClassen;
    span.style.cssText = styleText;
    return span;
}

function createDivWrap() {
    let div = document.createElement("div");
    div.classList.add("col", "text-left", "p-1", "min-w-100", "justify-content-between", "col-sm-3", "col-md-7-rows");
    return div;
}

function createDivSubWrap(Klassen, cssStyle, id, seminarart) {
    let div = document.createElement("div");
    div.className = Klassen;
    div.style.cssText = cssStyle;
    div.id = id;
    if (seminarart.capitalize() == "Kostenpflichtig") {
        div.classList.add("exclusiv-content-pay")

    }
    else if (seminarart == "Pro") {
        div.classList.add("exclusiv-content-pro")
    }
    else if (seminarart == "Premium") {
        div.classList.add("exclusiv-content-premium")
    }
    return div;
}

function appendChildren(parent, childs) {
    childs.forEach(child => {
        parent.appendChild(child);
    })
}

function createHr() {
    let hr = document.createElement("hr");
    hr.classList.add("d-none", "d-sm-block", "m-0");
    return hr;
}

function createDate(date) {
    let datum = date;
    datum = datum.split(".");
    datum = new Date(`${datum[2]}-${datum[1]}-${datum[0]}T00:00:00`);
    datum = Date.parse(datum.toDateString());
    return datum;
}

function createButton(cssClassen, cssStyle, text, href) {
    let button = document.createElement("a");
    button.className = cssClassen;
    button.style.cssText = cssStyle;
    button.textContent = text;
    button.href = href;
    return button;
}

function createModalTrigger(cssClassen, cssStyle, text, target, data, klicktippsrc) {
    let button = document.createElement("button");
    button.className = cssClassen;
    button.style.cssText = cssStyle;
    button.textContent = text;
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("data-target", target);
    button.setAttribute("data-header", data);
    button.setAttribute("ktsrc", klicktippsrc);
    return button;
}


function createButtonIncr(increment) {
    let button = document.createElement("button");
    button.type = "button"; 
    button.classList.add("btn", "btn-secondary", "btn-sm");
    button.style.cssText = "width: -webkit-fit-content; width: -moz-fit-content; width: fit-content;"
    button.setAttribute("data-toggle", "modal"); 
    button.setAttribute("data-target", "#mehrInfos");
    button.setAttribute("data-increment", increment); 
    button.textContent = "\u{27A4} Anmeldung";
    return button;
}

function createLoader() {
    let loader = document.createElement("div");
    let span = document.createElement("span");
    loader.setAttribute("role", "status");
    loader.classList.add("spinner-border");
    span.classList.add("sr-only");
    span.textContent = "Loading...";
    loader.appendChild(span);
    return loader;
};

function createCollapse() {
    let a = document.createElement("div");
    a.classList.add("accordion", "border", "mt-5");
    a.id = "accordionShowAllWebs";
    let acard = document.createElement("div");
    acard.classList.add("card");
    let acardHeader = document.createElement("div");
    acardHeader.classList.add("card-header", "m-0");
    acardHeader.id = "headingOne";
    let acardH2 = document.createElement("h2");
    acardH2.classList.add("m-0");
    let acardButton = document.createElement("button");
    acardButton.classList.add("btn", "btn-link", "btn-block", "text-left", "w-100");
    acardButton.type = "button";
    acardButton.dataset.toggle = "collapse";
    acardButton.dataset.target = "#collapseOne";
    acardButton.setAttribute("aria-expanded", "true");
    acardButton.setAttribute("aria-controls", "collapseOne");
    acardButton.textContent = "Alle Webinare ab Heute anzeigen";
    acardButton.style.cssText = "width: 100% !important;"
    acardH2.appendChild(acardButton);
    acardHeader.appendChild(acardH2);
    acard.appendChild(acardHeader);
    a.appendChild(acard);
    return a;
}

function loadAdditionalCSS() {
    let cssRules = [
        ".innerContentWrap{height:180px}",
        "#fernsehprog,#fernsehprog::after,#fernsehprog::before{box-sizing:border-box}",
        ".col.col-md-9.my-3.p-2.rounded.bg-white.shadow-lg:before{position:absolute;content:'';top:-140px}",
        ".wochenAnzeige{position:absolute;top:-10px;font-size:14px}",
        "div.card.border-0.rounded-0.exclusiv-content-pay:after{content: 'Kostenpflichtig';color:#fff;background:red;padding:.2em;position:absolute;top:2%;right:3%;border-radius:25px;font-size:16px}",
        "div.card.border-0.rounded-0.exclusiv-content-pro:after{content:'Pro';color:#fff;background:var(--primary);padding:.2em;position:absolute;top:2%;right:3%;border-radius:25px;font-size:16px}",
        "div.card.border-0.rounded-0.exclusiv-content-premium:after{content:'Premium';color:#fff;background:#f28e00;padding:.2em;position:absolute;top:2%;right:3%;border-radius:25px;font-size:16px}",
        "div.col.my-3.p-2.rounded.bg-white.shadow.exclusiv-content-pay:after{content:'Kostenpflichtig';color:#fff;background:red;padding:.45em;position:absolute;top:7%;right:1%;border-radius:25px;font-size:17px}",
        "div.col.my-3.p-2.rounded.bg-white.shadow.exclusiv-content-pro:after{content:'Pro';color:#fff;background:var(--primary);padding:.45em;position:absolute;top:7%;right:1%;border-radius:25px;font-size:17px}",
        "div.col.my-3.p-2.rounded.bg-white.shadow.exclusiv-content-premium:after{content:'Premium';color:#fff;background:#f28e00;padding:.45em;position:absolute;top:7%;right:1%;border-radius:25px;font-size:17px}",
        "@media only screen and (max-width:367px){.wochenAnzeige{font-size:12px!important}}"
    ];
    let allStyleSheets = Array.from(document.styleSheets);
    let lsStyleSheets = allStyleSheets.find(stylesheet => stylesheet.href === "https://www.landsiedel-seminare.de/css/css-coaching-welt-neuer-Header.css");
    cssRules.forEach(rule => lsStyleSheets.insertRule(rule, 0));
}

function displayAllSems(datum, dataarray) {
    // zeige alle Seminare an, die heute oder zu einem späteren Zeitpunkt stattfinden --> loop
    let date = datum;
    let dA = dataarray;
    let box = createDivSubWrap("w-100", "", "", "");
    let accordionSection = createCollapse();
    let accordionInsert = document.createElement("div");
    accordionInsert.classList.add("collapse");
    accordionInsert.id = "collapseOne";
    accordionInsert.dataset.parent = "#accordionShowAllWebs";
    accordionInsert.setAttribute("aria-labelledby", "headingOne");
    let accordionInsertBody = document.createElement("div");
    accordionInsertBody.classList.add("card-body");
    accordionInsertBody.style.backgroundColor = "rgb(203, 216, 228)";
    

    box.appendChild(createH4("Alle Termine für dich aufgelistet", "margin-bottom: 20px;"))
    for (let i = 0; i < dA.length; i++) {
        if (date <= createDate(dA[i].datum)) {
            for (const [key, value] of Object.entries(dA[i].infos)) {
                let a = createH4((`${dA[i].datum}, ${value.woTag}, ${value.uhrzeit}`), "");
                let aa = createSpan(` - ${value.titel}`, "", "");
                let aaa = createPtrainer(value.trainer);
                let aaaa = createP(value.progDesc, "", "");
                let aaaaa = () => {
                    if (value.klicktippsrc == "") {
                        return createButton("btn btn-primary d-flex flex-row justify-content-start w-fitcontent", "", "Anmeldung", value.zoomlink);
                    }
                    else {
                        return createModalTrigger("btn btn-primary d-flex flex-row justify-content-start w-fitcontent", "", "Anmelden", "#mehrInfos", value.titel, value.klicktippsrc);
                    }
                };
                a.appendChild(aa);
                let b = [
                    a,
                    aaa,
                    aaaa,
                    aaaaa()
                ]
                let bb = createDivSubWrap("w-100 p-2 my-3 rounded bg-white shadow", "", "", "");
                b.forEach(entry => bb.appendChild(entry));
                box.appendChild(bb);
                accordionInsertBody.appendChild(box);
            }
        }
    }
    accordionInsert.appendChild(accordionInsertBody);
    accordionSection.appendChild(accordionInsert);
    document.getElementById("WochenvorschauCarousel").parentElement.insertBefore(accordionSection, document.getElementById("WochenvorschauCarousel").nextElementSibling);
}

// Fernsehprogramm Wrapper
let fernsehWrapper = document.getElementById("fernsehprog");
let wochenVorschau = document.getElementsByClassName("wochenvorschau");
let divmqCc = document.createElement("div");
divmqCc.classList.add("mqCc");
let fernsehprogInfos = document.getElementsByClassName("fernsehprogInfos");
loadAdditionalCSS();
async function loadFernsehProg() {
    const response = await fetch("https://www.landsiedel-seminare.de/fernsehen/fernsehprogramm.json");
    const data = await response.json();    
    const dataArray = data.fernsehprogramm;
    const heute = Date.parse(new Date().toDateString());
    if (response.ok) {
        // Loader ausblenden, wenn Daten geladen
        loader.style.display = "none";

        // Keine Termine --> Anzeigen, dass es keine Termine gibt
        if (dataArray.every((datatermin) => datatermin.datum < heute)) {
                
            // Keine Programm verfügbar
            let p = document.createElement("p");
            p.textContent = "Kein Programm verfügbar";
            p.className = "text-danger"
            fernsehWrapper.appendChild(p);
            return
        }

        else {
            displayAllSems(heute, dataArray);
            let flag = 0;  
            for (let i = 0; i < dataArray.length; i++) {
                if (heute <= createDate(dataArray[i].datum) && flag <= 6) {
                    // Items für prog erzeugen
                    let a = createDivSubWrap("innerContentWrap d-flex flex-column justify-content-start", "", "", "");
                    let items1 = [
                        createH4(dataArray[i].infos.prog1.woTag, "margin-top: 25px; color: black !important; font-weight: 600; margin-bottom: 0"),
                        createP(dataArray[i].datum, "margin-top: 5px; margin-bottom: 5px"),
                        createDivSubWrap("card border-0 rounded-0", `background: url(${dataArray[i].infos.prog1.imgSrc}); height: 150px; background-size: cover; background-repeat: no-repeat; background-position: center center`, "", dataArray[i].infos.prog1.SeminarArt),
                        createSpan(dataArray[i].infos.prog1.uhrzeit, "text-danger d-block", "font-weight: 800!important"),
                        (() => {
                            appendChildren(a, [createP(dataArray[i].infos.prog1.titel, "", "mt-0 mb-0 font-weight-bold"),
                            createSpan(dataArray[i].infos.prog1.SeminarArt, "d-block", "font-size: 14px"),
                            createPtrainer(dataArray[i].infos.prog1.trainer)])
                            return a;
                        })(),
                        createButton("btn btn-primary mb-1", "", "mehr Infos", `#${dataArray[i].infos.prog1.buttonIncrement}`),
                        createHr()
                    ];

                     // InfoSection - mehr Infos zu Programm
                        let infoSection1 = [
                            createDivSubWrap("position-absolute", "top: -125px", dataArray[i].infos.prog1.buttonIncrement, ""),
                            createP(`${dataArray[i].infos.prog1.woTag}, ${dataArray[i].datum}`, "", "font-weight-bold m-0"),
                            createP(dataArray[i].infos.prog1.titel, "", "m-0"),
                            createSpan(`mit ${dataArray[i].infos.prog1.trainer}`, "text-danger font-weight-bold mb-1", ""),
                            createP(dataArray[i].infos.prog1.progDesc, "", "m-0"),
                            createP(dataArray[i].infos.prog1.uhrzeit, "", "m-0 font-weight-bold text-danger"),
                            createSpan(dataArray[i].infos.prog1.trainer, "", "font-size: 14"),
                            (() => {
                                let ba,
                                baa,
                                baaa;
                                switch (dataArray[i].infos.prog1.SeminarArt.lower()) {
                                    case "premium":
                                        ba = document.createElement("div");
                                        baa = createP("Du hast bereits ein World-of-NLP-Premium-Abonnement?", "", "text-primary p-0 m-0");
                                        baaa = createButton("btn pt-0 mt-0", "color: #f28e00;", ">> zur World-of-NLP-Plattform", "https://world-of-nlp.com/live-events/");
                                        appendChildren(ba, [baa, baaa]);
                                    break;
                                    case "kostenpflichtig":
                                        ba = document.createElement("div");
                                        baa = createP("Dieses Webinar ist nur kostenpflichtig erhältlich", "", "text-danger");
                                        appendChildren(ba, [baa]);
                                    break;
                                    case "pro":
                                        ba = document.createElement("div");
                                        baa = createP("Du hast bereits ein World-of-NLP-Premium- oder Pro-Abonnement?", "", "text-primary p-0 m-0");
                                        baaa = createButton("btn pt-0 mt-0", "color: #f28e00;", ">> zur World-of-NLP-Plattform", "https://world-of-nlp.com/live-events/");
                                        appendChildren(ba, [baa, baaa]);
                                    break;
                                    default:
                                        ba = document.createElement("br");
                                    break;
                                  }
                                  return ba;
                            })(),
                            (() => {
                                if (dataArray[i].infos.prog1.klicktippsrc == "") {
                                    return createButton("btn btn-primary", "", "Anmeldung", dataArray[i].infos.prog1.zoomlink);
                                }
                                else {
                                    return createModalTrigger("btn btn-primary", "", "Anmelden", "#mehrInfos", dataArray[i].infos.prog1.titel, dataArray[i].infos.prog1.klicktippsrc);
                                }
                            })()
                        ]; 
                        let InfoSectionItem1Wrap = createDivSubWrap("d-flex flex-column", "", "", "");
                        let InfoSection1Wrap = createDivSubWrap("col my-3 p-2 rounded bg-white shadow", "height: 100%;", "", dataArray[i].infos.prog1.SeminarArt);
                        InfoSection1Wrap.appendChild(createIMG(dataArray[i].infos.prog1.imgSrc, "float-none float-sm-right", "max-width: 300px;"));
                        appendChildren(InfoSectionItem1Wrap, infoSection1);
                        InfoSection1Wrap.appendChild(InfoSectionItem1Wrap);
                        let itemSubWrap1 = createDivSubWrap("d-flex flex-column p-1", "background: lightgrey", "", "");
                        appendChildren(itemSubWrap1, items1);
                        let Infosection = createDivSubWrap("my-2 mx-0 rounded px-2 row flex-column", "background-color: #cbd8e4;", "", "");
                        let itemWrap = createDivWrap();
                    if (dataArray[i].infos.prog2) {
                        let b = createDivSubWrap("innerContentWrap d-flex flex-column justify-content-start", "", "", "");
                        let items2 = [
                            createP(dataArray[i].datum),
                            createDivSubWrap("card border-0 rounded-0", `background: url(${dataArray[i].infos.prog2.imgSrc}); height: 150px; background-size: cover; background-repeat: no-repeat; background-position: center center`, "", dataArray[i].infos.prog2.SeminarArt),
                            createSpan(dataArray[i].infos.prog2.uhrzeit, "text-danger d-block", "font-weight: 800!important"),
                            (() => {
                                appendChildren(b, [createP(dataArray[i].infos.prog2.titel, "", "mt-0 mb-0 font-weight-bold"),
                                createSpan(dataArray[i].infos.prog2.SeminarArt, "d-block", "font-size: 14px"),
                                createPtrainer(dataArray[i].infos.prog2.trainer)])
                                return b;
                            })(),
                            createButton("btn btn-primary mb-1", "", "mehr Infos", `#${dataArray[i].infos.prog2.buttonIncrement}`),
                        ];

                        let infoSection2 = [
                            createDivSubWrap("position-absolute", "top: -125px", dataArray[i].infos.prog2.buttonIncrement, ""),
                            createP(`${dataArray[i].infos.prog2.woTag}, ${dataArray[i].datum}`, "", "font-weight-bold m-0"),
                            createP(dataArray[i].infos.prog2.titel, "", "m-0"),
                            createSpan(`mit ${dataArray[i].infos.prog2.trainer}`, "text-danger font-weight-bold mb-1", ""),
                            createP(dataArray[i].infos.prog2.progDesc, "", "m-0"),
                            createP(dataArray[i].infos.prog2.uhrzeit, "", "m-0 font-weight-bold text-danger"),
                            createSpan(dataArray[i].infos.prog2.trainer, "", "font-size: 14"),
                            (() => {
                                let ba,
                                baa,
                                baaa;
                                switch (dataArray[i].infos.prog2.SeminarArt.lower()) {
                                    case "premium":
                                        ba = document.createElement("div");
                                        baa = createP("Du hast bereits ein World-of-NLP-Premium-Abonnement?", "", "text-primary p-0 m-0");
                                        baaa = createButton("btn pt-0 mt-0", "color: #f28e00;", ">> zur World-of-NLP-Plattform", "https://world-of-nlp.com/live-events/");
                                        appendChildren(ba, [baa, baaa]);
                                    break;
                                    case "kostenpflichtig":
                                        ba = document.createElement("div");
                                        baa = createP("Dieses Webinar ist nur kostenpflichtig erhältlich", "", "text-danger");
                                        appendChildren(ba, [baa]);
                                    break;
                                    case "pro":
                                        ba = document.createElement("div");
                                        baa = createP("Du hast bereits ein World-of-NLP-Premium- oder Pro-Abonnement?", "", "text-primary p-0 m-0");
                                        baaa = createButton("btn pt-0 mt-0", "color: #f28e00;", ">> zur World-of-NLP-Plattform", "https://world-of-nlp.com/live-events/");
                                        appendChildren(ba, [baa, baaa]);
                                    break;
                                    default:
                                        ba = document.createElement("br");
                                    break;
                                  }
                                  return ba;
                            })(),
                            (() => {
                                if (dataArray[i].infos.prog2.klicktippsrc == "") {
                                    return createButton("btn btn-primary", "", "Anmeldung", dataArray[i].infos.prog2.zoomlink);
                                }
                                else {
                                    return createModalTrigger("btn btn-primary", "", "Anmelden", "#mehrInfos", dataArray[i].infos.prog2.titel, dataArray[i].infos.prog2.klicktippsrc);
                                }
                            })()
                        ];
                        let InfoSectionItem2Wrap = createDivSubWrap("d-flex flex-column", "", "", "");
                        let InfoSection2Wrap = createDivSubWrap("col my-3 p-2 rounded bg-white shadow", "height: 100%;", "", dataArray[i].infos.prog2.SeminarArt);
                        InfoSection2Wrap.appendChild(createIMG(dataArray[i].infos.prog2.imgSrc, "float-none float-sm-right", "max-width: 300px;"));
                        appendChildren(InfoSectionItem2Wrap, infoSection2);
                        InfoSection2Wrap.appendChild(InfoSectionItem2Wrap);
                        let itemSubWrap2 = createDivSubWrap("d-flex flex-column mt-3 p-1", "background: lightgrey;", "", "");
                        appendChildren(itemSubWrap2, items2);
                        appendChildren(Infosection, [InfoSection1Wrap, InfoSection2Wrap]);
                        appendChildren(itemWrap, [itemSubWrap1, itemSubWrap2]);
                    }                         
                    else {
                        appendChildren(Infosection, [InfoSection1Wrap]);
                        appendChildren(itemWrap, [itemSubWrap1]);
                    }
                    fernsehprogInfos[0].appendChild(Infosection);
                        
                    fernsehWrapper.appendChild(itemWrap);
                    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    
                    // Flag für die Anzeige der 7 Tage
                    flag++;
                    document.getElementsByClassName("wochenAnzeige")[0].innerText = "1. Seite";

                }
                
                // Zweite Woche
                else if (heute <= createDate(dataArray[i].datum) && flag >= 6 && flag <= 13) {
                    // Items für prog erzeugen
                    let a = createDivSubWrap("innerContentWrap d-flex flex-column justify-content-start", "", "", "");
                    let items1 = [
                        createH4(dataArray[i].infos.prog1.woTag, "margin-top: 25px; color: black !important; font-weight: 600; margin-bottom: 0"),
                        createP(dataArray[i].datum, "margin-top: 5px; margin-bottom: 5px"),
                        createDivSubWrap("card border-0 rounded-0", `background: url(${dataArray[i].infos.prog1.imgSrc}); height: 150px; background-size: cover; background-repeat: no-repeat; background-position: center center`, "", dataArray[i].infos.prog1.SeminarArt),
                        createSpan(dataArray[i].infos.prog1.uhrzeit, "text-danger d-block", "font-weight: 800!important"),
                        (() => {
                            appendChildren(a, [createP(dataArray[i].infos.prog1.titel, "", "mt-0 mb-0 font-weight-bold"),
                            createSpan(dataArray[i].infos.prog1.SeminarArt, "d-block", "font-size: 14px"),
                            createPtrainer(dataArray[i].infos.prog1.trainer)])
                            return a;
                        })(),
                        createButton("btn btn-primary mb-1", "", "mehr Infos", `#${dataArray[i].infos.prog1.buttonIncrement}`),
                        createHr()
                    ];

                    // Items einfügen
                    let itemSubWrap1 = createDivSubWrap("p-1", "background: lightgrey;", "", "");
                    appendChildren(itemSubWrap1, items1);
                    let itemWrap = createDivWrap();
                    // InfoSection - mehr Infos zu Programm
                    let infoSection1 = [
                        createDivSubWrap("position-absolute", "top: -125px", dataArray[i].infos.prog1.buttonIncrement, ""),
                        createP(`${dataArray[i].infos.prog1.woTag}, ${dataArray[i].datum}`, "", "font-weight-bold m-0"),
                        createP(dataArray[i].infos.prog1.titel, "", "m-0"),
                        createSpan(`mit ${dataArray[i].infos.prog1.trainer}`, "text-danger font-weight-bold mb-1", ""),
                        createP(dataArray[i].infos.prog1.progDesc, "", "m-0"),
                        createP(dataArray[i].infos.prog1.uhrzeit, "", "m-0 font-weight-bold text-danger"),
                        createSpan(dataArray[i].infos.prog1.trainer, "", "font-size: 14"),
                        (() => {
                            let ba,
                            baa,
                            baaa;
                            switch (dataArray[i].infos.prog1.SeminarArt.lower()) {
                                case "premium":
                                    ba = document.createElement("div");
                                    baa = createP("Du hast bereits ein World-of-NLP-Premium-Abonnement?", "", "text-primary p-0 m-0");
                                    baaa = createButton("btn pt-0 mt-0", "color: #f28e00;", ">> zur World-of-NLP-Plattform", "https://world-of-nlp.com/live-events/");
                                    appendChildren(ba, [baa, baaa]);
                                break;
                                case "kostenpflichtig":
                                    ba = document.createElement("div");
                                    baa = createP("Dieses Webinar ist nur kostenpflichtig erhältlich", "", "text-danger");
                                    appendChildren(ba, [baa]);
                                break;
                                case "pro":
                                    ba = document.createElement("div");
                                    baa = createP("Du hast bereits ein World-of-NLP-Premium- oder Pro-Abonnement?", "", "text-primary p-0 m-0");
                                    baaa = createButton("btn pt-0 mt-0", "color: var(--ciblau);", ">> zur World-of-NLP-Plattform", "https://world-of-nlp.com/live-events/");
                                    appendChildren(ba, [baa, baaa]);
                                break;
                                default:
                                    ba = document.createElement("br");
                                break;
                              }
                              return ba;
                        })(),
                        (() => {
                            if (dataArray[i].infos.prog1.klicktippsrc == "") {
                                return createButton("btn btn-primary", "", "Anmeldung", dataArray[i].infos.prog1.zoomlink);
                            }
                            else {
                                return createModalTrigger("btn btn-primary", "", "Anmelden", "#mehrInfos", dataArray[i].infos.prog1.titel, dataArray[i].infos.prog1.klicktippsrc);
                            }
                        })()
                    ]; 
                    let InfoSectionItem1Wrap = createDivSubWrap("d-flex flex-column", "", "", "");
                    let InfoSection1Wrap = createDivSubWrap("col my-3 p-2 rounded bg-white shadow", "height: 100%;", dataArray[i].infos.prog1.buttonIncrement, dataArray[i].infos.prog1.SeminarArt);
                    InfoSection1Wrap.appendChild(createIMG(dataArray[i].infos.prog1.imgSrc, "float-none float-sm-right", "max-width: 300px;"));
                    appendChildren(InfoSectionItem1Wrap, infoSection1);
                    InfoSection1Wrap.appendChild(InfoSectionItem1Wrap);
                    wochenVorschau[0].appendChild(itemWrap);
                    let Infosection = createDivSubWrap("my-2 mx-0 rounded px-2 row flex-column", "background-color: #cbd8e4;", "", "");
                    if (dataArray[i].infos.prog2) {
                        let b = createDivSubWrap("innerContentWrap d-flex flex-column justify-content-start", "", "", "");
                        let items2 = [
                            createP(dataArray[i].datum),
                            createDivSubWrap("card border-0 rounded-0", `background: url(${dataArray[i].infos.prog2.imgSrc}); height: 150px; background-size: cover; background-repeat: no-repeat; background-position: center center`, "", dataArray[i].infos.prog2.SeminarArt),
                            createSpan(dataArray[i].infos.prog2.uhrzeit, "text-danger d-block", "font-weight: 800!important"),
                            (() => {
                                appendChildren(b, [createP(dataArray[i].infos.prog2.titel, "", "mt-0 mb-0 font-weight-bold"),
                                createSpan(dataArray[i].infos.prog2.SeminarArt, "d-block", "font-size: 14px"),
                                createPtrainer(dataArray[i].infos.prog2.trainer)])
                                return b;
                            })(),
                            createButton("btn btn-primary mb-1", "", "mehr Infos", `#${dataArray[i].infos.prog2.buttonIncrement}`),
                        ];
                        
                        let infoSection2 = [
                            createDivSubWrap("position-absolute", "top: -125px", dataArray[i].infos.prog2.buttonIncrement, ""),
                            createP(`${dataArray[i].infos.prog2.woTag}, ${dataArray[i].datum}`, "", "font-weight-bold m-0"),
                            createP(dataArray[i].infos.prog2.titel, "", "m-0"),
                            createSpan(`mit ${dataArray[i].infos.prog2.trainer}`, "text-danger font-weight-bold mb-1", ""),
                            createP(dataArray[i].infos.prog2.progDesc, "", "m-0"),
                            createP(dataArray[i].infos.prog2.uhrzeit, "", "m-0 font-weight-bold text-danger"),
                            createSpan(dataArray[i].infos.prog2.trainer, "", "font-size: 14"),
                            (() => {
                                let ba,
                                baa,
                                baaa;
                                switch (dataArray[i].infos.prog1.SeminarArt.lower()) {
                                    case "premium":
                                        ba = document.createElement("div");
                                        baa = createP("Du hast bereits ein World-of-NLP-Premium-Abonnement?", "", "text-primary p-0 m-0");
                                        baaa = createButton("btn pt-0 mt-0", "color: #f28e00;", ">> zur World-of-NLP-Plattform", "https://world-of-nlp.com/live-events/");
                                        appendChildren(ba, [baa, baaa]);
                                    break;
                                    case "kostenpflichtig":
                                        ba = document.createElement("div");
                                        baa = createP("Dieses Webinar ist nur kostenpflichtig erhältlich", "", "text-danger");
                                        appendChildren(ba, [baa]);
                                    break;
                                    case "pro":
                                        ba = document.createElement("div");
                                        baa = createP("Du hast bereits ein World-of-NLP-Premium- oder Pro-Abonnement?", "", "text-primary p-0 m-0");
                                        baaa = createButton("btn pt-0 mt-0", "color: #f28e00;", ">> zur World-of-NLP-Plattform", "https://world-of-nlp.com/live-events/");
                                        appendChildren(ba, [baa, baaa]);
                                    break;
                                    default:
                                        ba = document.createElement("br");
                                    break;
                                  }
                                  return ba;
                            })(),
                            (() => {
                                if (dataArray[i].infos.prog2.klicktippsrc == "") {
                                    return createButton("btn btn-primary", "", "Anmeldung", dataArray[i].infos.prog2.zoomlink);
                                }
                                else {
                                    return createModalTrigger("btn btn-primary", "", "Anmelden", "#mehrInfos", dataArray[i].infos.prog2.titel, dataArray[i].infos.prog2.klicktippsrc);
                                }
                            })()
                        ];
                        let InfoSectionItem2Wrap = createDivSubWrap("d-flex flex-column", "", "", "");
                        let InfoSection2Wrap = createDivSubWrap("col my-3 p-2 rounded bg-white shadow", "height: 100%;", dataArray[i].infos.prog2.buttonIncrement, dataArray[i].infos.prog2.SeminarArt);
                        InfoSection2Wrap.appendChild(createIMG(dataArray[i].infos.prog2.imgSrc, "float-none float-sm-right", "max-width: 300px;"));
                        appendChildren(InfoSectionItem2Wrap, infoSection2);
                        InfoSection2Wrap.appendChild(InfoSectionItem2Wrap);
                        let itemSubWrap2 = createDivSubWrap("mt-5 mt-sm-0 p-1", "background: lightgrey;", "", "");
                        appendChildren(itemSubWrap2, items2);
                        appendChildren(Infosection, [InfoSection1Wrap, InfoSection2Wrap]);
                        appendChildren(itemWrap, [itemSubWrap1, itemSubWrap2]);
                    }
                    else {
                        appendChildren(Infosection, [InfoSection1Wrap]);
                        appendChildren(itemWrap, [itemSubWrap1]);
                    }
                    fernsehprogInfos[1].appendChild(Infosection);
                        
                    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                    // Flag für die Anzeige der 7 Tage
                    flag++;
                    document.getElementsByClassName("wochenAnzeige")[1].innerText = "2. Seite";
                }
                
                // Dritte Woche
                else if (heute <= createDate(dataArray[i].datum) && flag > 13 && flag <= 20) {
                    let a = createDivSubWrap("innerContentWrap d-flex flex-column justify-content-start", "", "", "");
                    let items1 = [
                        createH4(dataArray[i].infos.prog1.woTag, "margin-top: 25px; color: black !important; font-weight: 600; margin-bottom: 0"),
                        createP(dataArray[i].datum, "margin-top: 5px; margin-bottom: 5px"),
                        createDivSubWrap("card border-0 rounded-0", `background: url(${dataArray[i].infos.prog1.imgSrc}); height: 150px; background-size: cover; background-repeat: no-repeat; background-position: center center`, "", dataArray[i].infos.prog1.SeminarArt),
                        createSpan(dataArray[i].infos.prog1.uhrzeit, "text-danger d-block", "font-weight: 800!important"),
                        (() => {
                            appendChildren(a, [createP(dataArray[i].infos.prog1.titel, "", "mt-0 mb-0 font-weight-bold"),
                            createSpan(dataArray[i].infos.prog1.SeminarArt, "d-block", "font-size: 14px"),
                            createPtrainer(dataArray[i].infos.prog1.trainer)])
                            return a;
                        })(),
                        createButton("btn btn-primary mb-1", "", "mehr Infos", `#${dataArray[i].infos.prog1.buttonIncrement}`),
                        createHr()
                    ];
                    // Items einfügen
                    let itemSubWrap1 = createDivSubWrap("p-1", "background: lightgrey;", "", "");
                    appendChildren(itemSubWrap1, items1);
                    let itemWrap = createDivWrap();
                    // InfoSection - mehr Infos zu Programm
                    let infoSection1 = [
                        createDivSubWrap("position-absolute", "top: -125px", dataArray[i].infos.prog1.buttonIncrement, ""),
                        createP(`${dataArray[i].infos.prog1.woTag}, ${dataArray[i].datum}`, "", "font-weight-bold m-0"),
                        createP(dataArray[i].infos.prog1.titel, "", "m-0"),
                        createSpan(`mit ${dataArray[i].infos.prog1.trainer}`, "text-danger font-weight-bold mb-1", ""),
                        createP(dataArray[i].infos.prog1.progDesc, "", "m-0"),
                        createP(dataArray[i].infos.prog1.uhrzeit, "", "m-0 font-weight-bold text-danger"),
                        createSpan(dataArray[i].infos.prog1.trainer, "", "font-size: 14"),
                        (() => {
                            let ba,
                            baa,
                            baaa;
                            switch (dataArray[i].infos.prog1.SeminarArt.lower()) {
                                case "premium":
                                    ba = document.createElement("div");
                                    baa = createP("Du hast bereits ein World-of-NLP-Premium-Abonnement?", "", "text-primary p-0 m-0");
                                    baaa = createButton("btn pt-0 mt-0", "color: #f28e00;", ">> zur World-of-NLP-Plattform", "https://world-of-nlp.com/live-events/");
                                    appendChildren(ba, [baa, baaa]);
                                break;
                                case "kostenpflichtig":
                                    ba = document.createElement("div");
                                    baa = createP("Dieses Webinar ist nur kostenpflichtig erhältlich", "", "text-danger");
                                    appendChildren(ba, [baa]);
                                break;
                                case "pro":
                                    ba = document.createElement("div");
                                    baa = createP("Du hast bereits ein World-of-NLP-Premium- oder Pro-Abonnement?", "", "text-primary p-0 m-0");
                                    baaa = createButton("btn pt-0 mt-0", "color: var(--ciblau);", ">> zur World-of-NLP-Plattform", "https://world-of-nlp.com/live-events/");
                                    appendChildren(ba, [baa, baaa]);
                                break;
                                default:
                                    ba = document.createElement("br");
                                break;
                              }
                              return ba;
                        })(),
                        (() => {
                            if (dataArray[i].infos.prog1.klicktippsrc == "") {
                                return createButton("btn btn-primary", "", "Anmeldung", dataArray[i].infos.prog1.zoomlink);
                            }
                            else {
                                return createModalTrigger("btn btn-primary", "", "Anmelden", "#mehrInfos", dataArray[i].infos.prog1.titel, dataArray[i].infos.prog1.klicktippsrc);
                            }
                        })()
                    ];
                    let InfoSectionItem1Wrap = createDivSubWrap("d-flex flex-column", "", "", "");
                    let InfoSection1Wrap = createDivSubWrap("col my-3 p-2 rounded bg-white shadow", "height: 100%;", dataArray[i].infos.prog1.buttonIncrement, dataArray[i].infos.prog1.SeminarArt);
                    InfoSection1Wrap.appendChild(createIMG(dataArray[i].infos.prog1.imgSrc, "float-none float-sm-right", "max-width: 300px;"));
                    appendChildren(InfoSectionItem1Wrap, infoSection1);
                    InfoSection1Wrap.appendChild(InfoSectionItem1Wrap);
                    wochenVorschau[1].appendChild(itemWrap);                    
                    let Infosection = createDivSubWrap("my-2 mx-0 rounded px-2 row d-flex flex-column", "background-color: #cbd8e4;", "", "");

                    if (dataArray[i].infos.prog2) {
                        let b = createDivSubWrap("innerContentWrap d-flex flex-column justify-content-start", "", "", "");
                        let items2 = [
                            createP(dataArray[i].datum),
                            createDivSubWrap("card border-0 rounded-0", `background: url(${dataArray[i].infos.prog2.imgSrc}); height: 150px; background-size: cover; background-repeat: no-repeat; background-position: center center`, "", dataArray[i].infos.prog2.SeminarArt),
                            createSpan(dataArray[i].infos.prog2.uhrzeit, "text-danger d-block", "font-weight: 800!important"),
                            (() => {
                                appendChildren(b, [createP(dataArray[i].infos.prog2.titel, "", "mt-0 mb-0 font-weight-bold"),
                                createSpan(dataArray[i].infos.prog2.SeminarArt, "d-block", "font-size: 14px"),
                                createPtrainer(dataArray[i].infos.prog2.trainer)])
                                return b;
                            })(),
                            createButton("btn btn-primary mb-1", "", "mehr Infos", `#${dataArray[i].infos.prog2.buttonIncrement}`),
                        ];

                        appendChildren(itemSubWrap2, items2);

                        let infoSection2 = [
                            createDivSubWrap("position-absolute", "top: -125px", dataArray[i].infos.prog2.buttonIncrement, ""),
                            createP(`${dataArray[i].infos.prog2.woTag}, ${dataArray[i].datum}`, "", "font-weight-bold m-0"),
                            createP(dataArray[i].infos.prog2.titel, "", "m-0"),
                            createSpan(`mit ${dataArray[i].infos.prog2.trainer}`, "text-danger font-weight-bold mb-1", ""),
                            createP(dataArray[i].infos.prog2.progDesc, "", "m-0"),
                            createP(dataArray[i].infos.prog2.uhrzeit, "", "m-0 font-weight-bold text-danger"),
                            createSpan(dataArray[i].infos.prog2.trainer, "", "font-size: 14"),
                            (() => {
                                let ba,
                                baa,
                                baaa;
                                switch (dataArray[i].infos.prog1.SeminarArt.lower()) {
                                    case "premium":
                                        ba = document.createElement("div");
                                        baa = createP("Du hast bereits ein World-of-NLP-Premium-Abonnement?", "", "text-primary p-0 m-0");
                                        baaa = createButton("btn pt-0 mt-0", "color: #f28e00;", ">> zur World-of-NLP-Plattform", "https://world-of-nlp.com/live-events/");
                                        appendChildren(ba, [baa, baaa]);
                                    break;
                                    case "kostenpflichtig":
                                        ba = document.createElement("div");
                                        baa = createP("Dieses Webinar ist nur kostenpflichtig erhältlich", "", "text-danger");
                                        appendChildren(ba, [baa]);
                                    break;
                                    case "pro":
                                        ba = document.createElement("div");
                                        baa = createP("Du hast bereits ein World-of-NLP-Premium- oder Pro-Abonnement?", "", "text-primary p-0 m-0");
                                        baaa = createButton("btn pt-0 mt-0", "color: #f28e00;", ">> zur World-of-NLP-Plattform", "https://world-of-nlp.com/live-events/");
                                        appendChildren(ba, [baa, baaa]);
                                    break;
                                    default:
                                        ba = document.createElement("br");
                                    break;
                                  }
                                  return ba;
                            })(),
                            (() => {
                                if (dataArray[i].infos.prog2.klicktippsrc == "") {
                                    return createButton("btn btn-primary", "", "Anmeldung", dataArray[i].infos.prog2.zoomlink);
                                }
                                else {
                                    return createModalTrigger("btn btn-primary", "", "Anmelden", "#mehrInfos", dataArray[i].infos.prog2.titel, dataArray[i].infos.prog2.klicktippsrc);
                                }
                            })()
                        ];
                        
    
                        let InfoSectionItem2Wrap = createDivSubWrap("d-flex flex-column", "", "", "");
                        let InfoSection2Wrap = createDivSubWrap("col my-3 p-2 rounded bg-white shadow", "min-height: 100%;", dataArray[i].infos.prog2.buttonIncrement, dataArray[i].infos.prog2.SeminarArt);
                        InfoSection2Wrap.appendChild(createIMG(dataArray[i].infos.prog2.imgSrc, "float-none float-sm-right", "max-width: 300px;"));
                        appendChildren(InfoSectionItem2Wrap, infoSection2);
                        InfoSection2Wrap.appendChild(InfoSectionItem2Wrap);
                        appendChildren(Infosection, [InfoSection1Wrap, InfoSection2Wrap]);
                        appendChildren(itemWrap, [itemSubWrap1, itemSubWrap2]);
                    }
                    else {
                        appendChildren(Infosection, [InfoSection1Wrap]);
                        appendChildren(itemWrap, [itemSubWrap1]);
                    }
                    fernsehprogInfos[2].appendChild(Infosection);
                    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    document.getElementsByClassName("wochenAnzeige")[2].innerText = "3. Seite";

                    // Flag für die Anzeige der 7 Tage
                    flag++;
                }
            }
        }
    }
    else {
        // Keine Programm verfügbar
        let p = document.createElement("p");
        p.textContent = "Ein Fehler ist aufgetreten";
        p.className = "text-danger"
        fernsehWrapper.appendChild(p);
        return
    }
};

window.addEventListener("DOMContentLoaded", () => {loadFernsehProg();}, false);
$('#mehrInfos').on('show.bs.modal', function (event) {
    let script = document.createElement("script");
    var button = $(event.relatedTarget) // Button that triggered the modal
    script.src = button.attr('ktsrc') + ".js";
    script.type = "text/javascript";
    document.body.appendChild(script);
    var recipient = button.data('header') 
    var modal = $(this)
    modal.find('.modal-title').text(recipient)
    modal.find('.modal-body iframe').attr("src", button.attr('ktsrc') + ".html");
  })