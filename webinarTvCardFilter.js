// Modul zu MainFunctions
class semCardFilter {
    constructor(cityObj) {
        this.fragment = document.createDocumentFragment();
        this.title = document.createElement("h2");
        this.title.innerText = "Wähle jetzt dein Seminar aus!";
        this.innerContainer = document.createElement("div");
        this.innerContainer.classList.add("bg-dark", "d-flex", "flex-column", "p-2", "m-1", "border", "rounded", "w-fitcontent")
        this.innerTitle = document.createElement("p");
        this.innerTitle.innerText = "Zeige mir Seminare anhand...";
        this.innerTitle.classList.add("h5", "text-white", "pl-3");
        this.colWrap = document.createElement("div");
        this.colWrap.classList.add("d-flex", "flex-column", "flex-sm-row", "justify-content-start", "p-2");
        this.dateFilter = document.createElement("button");
        this.dateFilter.id = "date";
        this.dateFilter.value = "date";
        this.dateFilter.classList.add("btn", "btn-light", "my-2", "my-sm-0", "mr-sm-5", "w-fitcontent", "shadow");
        this.dateFilter.innerText = "der nächsten Termine";
        this.cityFilter = document.createElement("select");
        this.cityFilter.classList.add("btn", "btn-light", "dropdown-toggle", "w-fitcontent", "shadow");
        this.cityFilter.name = "city";
        this.cityFilter.id = "city";
        this.cityFilter.setAttribute("aria-labelledby", "dropdownMenuLink");
        this.citys = cityObj;
        this.defaultOption = document.createElement("option");
        this.defaultOption.disabled = true;
        this.defaultOption.selected = true;
        this.defaultOption.innerText = "von Standorten";
        this.defaultOption.classList.add("dropdown-item");
        this.cityFilter.appendChild(this.defaultOption);
        let mapObj = {
            "ä":"ae",
            "ö":"oe",
            "ü":"ue",
            "ß":"ss"
         };

        for (let city of this.citys) {
            let cityOption = document.createElement("option");
            cityOption.classList.add("dropdown-item");
            cityOption.value = city.replace(/ä|ö|ü|ß/gi, function(matched){
                return mapObj[matched];    
            });
            cityOption.innerText = city;
            this.cityFilter.appendChild(cityOption);
        }
        this.colWrap.appendChild(this.dateFilter);
        this.colWrap.appendChild(this.cityFilter);
        this.innerContainer.appendChild(this.innerTitle);
        this.innerContainer.appendChild(this.colWrap);
        this.fragment.appendChild(this.title);
        this.fragment.appendChild(this.innerContainer);
        return this.fragment;
    }
}