class ToastPops {
    constructor() {
        this.toast = this.createToast();
        this.applytoBody();
    }

    appendChilds(parent, childs) {
        childs.forEach(element => {
            parent.appendChild(element);
        });
    }

    registerCloseEvent() {
        document.getElementsByClassName("close")[0].addEventListener("click", () => {
            document.getElementsByClassName("toast")[0].style.cssText = "transform: scale(0) !important";
            setTimeout(() => {
                document.getElementsByClassName("toast")[0].parentElement.remove();
            }, 600);
        }, 1);
    }

    applytoBody() {
        document.body.classList.add("position-relative");
        document.body.appendChild(this.toast);
        setTimeout(() => {
            document.getElementsByClassName("toast")[0].style.cssText = "transform: scale(1) !important";
        }, 1000);
    }

    createToast() {
        let a = document.createElement("div");
        a.classList.add("position-absolute");
        a.style.cssText = "top: 100vh; left: 50%; transform: translate(-50%, -120%);";
            let aa = document.createElement("div");
            aa.classList.add("toast", "fade", "show", "animationfBot");
                let aaa = document.createElement("div");
                aaa.classList.add("toast-header");
                aaa.style.cssText = "background-color: #232f3f; color: #F28E00 !important; font-size: 16px;";
                    let aaaa = document.createElement("img");
                    aaaa.src = "https://www.landsiedel-seminare.de/graphiken/header-logo.png";
                    aaaa.classList.add("rounded", "mr-2");
                    aaaa.style.width = "45px";
                    let aaab = document.createElement("strong");
                    aaab.classList.add("mr-auto");
                    aaab.textContent = "Unser Angebot an Dich!";
                    let aaac = document.createElement("small");
                    aaac.style.cssText = "color: #c5c8cb; font-size: 10px;"
                    aaac.textContent = "gerade eben";
                    let aaad = document.createElement("button");
                    aaad.type = "button";
                    aaad.classList.add("ml-2", "mb-1", "close", "text-white");
                    aaad.setAttribute("data-dismiss", "toast");
                    aaad.setAttribute("aria-label", "Close");
                        let aaada = document.createElement("span");
                        aaada.setAttribute("aria-hidden", "true");
                        aaada.textContent = "x";
                        aaad.appendChild(aaada);           
                    this.appendChilds(aaa, [aaaa, aaab, aaac, aaad]);
                let aab = document.createElement("div");
                aab.classList.add("toast-body", "text-white", "lead");
                aab.textContent = "Hier könnte ein wunderbarer WONLP Text stehen, der massiv Kunden zum Kaufen anregen könnte.";
                    let aaba = document.createElement("a");
                    aaba.classList.add("btn", "btn-primary", "mt-2");
                    aaba.textContent = "mehr Erfahren!";
                    aaba.style.backgroundColor = "#F28E00";
                    aaba.style.borderColor = "#F28E00";
                    aaba.href = "https://www.landsiedel-seminare.de/world-of-nlp/";
                    aab.appendChild(aaba);
                this.appendChilds(aa, [aaa, aab]);
            a.appendChild(aa);
        return a;
    }
}

window.addEventListener("DOMContentLoaded", () => {
        let toast = new ToastPops();
        toast.registerCloseEvent();
}, 0);