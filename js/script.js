function TableGenerator(maxColumns) {
    this.maxColumns = maxColumns;
    this.currentColumn = 0;
    this.currentRow = null;

    this.createTable = function() {
        this.table = document.createElement("table");
        this.container = document.getElementById("container");
        this.container.appendChild(this.table);
    }

    this.createNewRow = function() {
        this.currentRow = this.table.insertRow(-1);
        this.currentColumn = 0;
    }

    this.addRow = function(link, imageSrc, caption) {
        if (this.currentColumn === 0) {
            this.createNewRow();
        }

        var cell = this.currentRow.insertCell(this.currentColumn);
        var div = document.createElement("div");
        div.className = "div1";

        var a = document.createElement("a");
        a.href = link;

        var figure = document.createElement("figure");
        var figcaption = document.createElement("figcaption");
        figcaption.textContent = caption;

        var img = document.createElement("img");
        img.className = "zoom";
        img.src = imageSrc;
        img.alt = "Click for lyrics";

        figure.appendChild(figcaption);
        figure.appendChild(img);
        a.appendChild(figure);
        div.appendChild(a);
        cell.appendChild(div);

        this.currentColumn++;

        if (this.currentColumn >= this.maxColumns) {
            this.createNewRow();
        }
    }
}

var tableGenerator = new TableGenerator(5);
tableGenerator.createTable();

// Add rows to the table
tableGenerator.addRow(
    "./HTML/theghostofbillyroyalton.html",
    "./IMG/theghostofbillyroyalton.jpg",
    "The Ghost of Billy Royalton"
);

// Add rows to the table
tableGenerator.addRow(
    "./HTML/popoff.html",
    "./IMG/jackpotjuicer.jpg",
    "Pop Off!"
);

tableGenerator.addRow(
    "./HTML/synergy.html",
    "./IMG/synergy.jpg",
    "Synergy (feat. Rob Damiani)"
);

tableGenerator.addRow(
    "./HTML/prisoner.html",
    "./IMG/afterburner.jpg",
    "Prisoner"
);

tableGenerator.addRow(
    "./HTML/headhunter.html",
    "./IMG/headhunter.jpg",
    "Head Hunter"
);

tableGenerator.addRow(
    "./HTML/bloodwolf.html",
    "./IMG/bloodwolf.jpeg",
    "Blood Wolf"
);

tableGenerator.addRow(
    "./HTML/semicharmedlife.html",
    "./IMG/semi-charmedlife.jpeg",
    "Semi-Charmed Life"
);

tableGenerator.addRow(
    "./HTML/sonofrobot.html",
    "./IMG/artificialselection.jpeg",
    "Son of Robot"
);

tableGenerator.addRow(
    "./HTML/summertimegladness.html",
    "./IMG/summertimegladness.jpeg",
    "Summertime Gladness"
);

tableGenerator.addRow(
    "./HTML/betrayedbythegame.html",
    "./IMG/mothership.jpeg",
    "Betrayed By The Game"
);

tableGenerator.addRow(
    "./HTML/weownthenight.html",
    "./IMG/instantgratification.jpeg",
    "We Own The Night"
);

tableGenerator.addRow(
    "./HTML/pussyvultures.html",
    "./IMG/pussyvultures.jpeg",
    "Pussy Vultures"
);

tableGenerator.addRow(
    "./HTML/perfect.html",
    "./IMG/peopleyouknew-perfect.jpeg",
    "Perfect"
);

tableGenerator.addRow(
    "./HTML/warmachine.html",
    "./IMG/warmachine.png",
    "War Machine"
);

tableGenerator.addRow(
    "./HTML/warmachine.html",
    "./IMG/warmachine.png",
    "War Machine"
);

tableGenerator.addRow(
    "./HTML/warmachine.html",
    "./IMG/warmachine.png",
    "War Machine"
);