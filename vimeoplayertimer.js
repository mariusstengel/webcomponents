"Use strict";
// 1
const template = document.createElement("template");
template.innerHTML = `
    <div id="vimeoPlayer" class="w-100"></div>
`;
// 2
class vimeoPlayerTimer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.urlhide();
    }

    timerfunction() {
        this.differenz = this.date - this.startDate;
        if (this.differenz < 0) {
            this.commingSoonInsert();
        }
        else if ((this.differenz >= 0) && (this.differenz <= this.availability)) {
            this.createVimeoPlayer(); 
        }
        else if (this.differenz > this.availability) {
            let a = document.createElement("p");
            a.innerText = "Das Webinar ist leider nur 24 Stunden verfügbar."
            this.shadowRoot.getElementById("vimeoPlayer").appendChild(a);
        }
    }

    connectedCallback() {
        if (this.getAttribute("timer_config") == "true") {
            if (this.getAttribute("timer_data") !== "") {
                this.date = new Date().getTime();
                this.startDate = new Date(this.getAttribute('timer_data')).getTime();
                this.commingSoonVideo = "https://www.landsiedel-seminare.de/graphiken/comming-soon.mp4";
                this.availability = this.getAttribute("timer_online") * 60 * 60 * 1000;
                this.timerfunction();
            }
            else {
                let a = document.createElement("p");
                a.innerText = "Ein Fehler ist aufgetreten! Bitte kontaktiere uns unter 09321 9266145 und wir lösen den Fehler umgehend.";
                return this.shadowRoot.getElementById("vimeoPlayer").appendChild(a);
            }
        }
        else {
            var options = {
                id: this.getAttribute("video_url"),
                width: 500
              };
            
            var VimeoPlayer = new Vimeo.Player(this.shadowRoot.getElementById("vimeoPlayer"), options);
        }

    }
    
    createVimeoPlayer() {
        if (this.shadowRoot.getElementById("vimeoPlayer").childElementCount > 0) {
            while (this.shadowRoot.getElementById("vimeoPlayer").childElementCount > 0) {
                this.shadowRoot.getElementById("vimeoPlayer").child[0].remove();
            }
            const options = {
                id: this.getAttribute("video_url"),
                width: 500
            };
            let VimeoPlayer = new Vimeo.Player(this.shadowRoot.getElementById("vimeoPlayer"), options);
        }
        else {
            const options = {
                id: this.getAttribute("video_url"),
                width: 500
            };
            let VimeoPlayer = new Vimeo.Player(this.shadowRoot.getElementById("vimeoPlayer"), options);
        }
    }

    commingSoonInsert() {

        let a = this.shadowRoot.getElementById("vimeoPlayer");
        let b = document.createElement("video");
        b.src = this.commingSoonVideo;
        a.appendChild(b);
    }

    urlhide() {
        window.addEventListener("contextmenu", () => {
            let a = document.getElementsByTagName("vimeoplayer-timer")[0];
            a.removeAttribute("video_url");
        }, 0);
    }
}
// 3
window.customElements.define('vimeoplayer-timer', vimeoPlayerTimer);