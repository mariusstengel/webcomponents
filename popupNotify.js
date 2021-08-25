const template = document.createElement('template');
template.innerHTML = `
    <style>
    .tooltip-container {display: inline-block; position: relative;}
    .notify-container {position: absolute; bottom: 125%; z-index: 9; width: 300px; background: red; box-shadow: 5px 5px 10px rgba(0,0,0,.1); font-size: .8em; border-radius: .5em; padding: 1em; transform: scale(0); transform-origin: bottom left; transition: transform .5s cubic-bezier(0.860, 0.000, 0.070, 1.000);}
    </style>
    <div class="tooltip-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-info-circle alert" style="top: 10px; right: 20px; z-index: 0;" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
        </svg>
        <div class="notify-container" status="false">
            <slot name="message"/>
        </div>
    </div>
`;

class PopupNotify extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    tooltip(expandState) {
        const tooltip = this.shadowRoot.querySelector(".notify-container"),
        alert = this.shadowRoot.querySelector(".alert");
        if (expandState == true) {
            tooltip.style.transform = "scale(1)";
            tooltip.setAttribute("status", "true");
        }
        else {
            tooltip.style.transform = "scale(0)";
            alert.style.display = "block";
            tooltip.setAttribute("status", "false");

        }
    }

    connectedCallback() {
        this.shadowRoot.querySelector(".alert").addEventListener("click", () => {
            if (this.shadowRoot.querySelector(".notify-container").getAttribute("status") == "false") {
                this.tooltip(true);
            }
            else {
                this.tooltip(false)
            }
            if (this.getAttribute("tip_background")) {
                this.shadowRoot.querySelector(".notify-container").style.background = this.getAttribute("tip_background");
            }
            if (this.getAttribute("tip_color")) {
                this.shadowRoot.querySelector(".notify-container").style.color = this.getAttribute("tip_color");
            }
        }, 0);
    }
}



window.customElements.define('popup-notify', PopupNotify);