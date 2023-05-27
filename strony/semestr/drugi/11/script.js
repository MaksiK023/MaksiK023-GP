let wygrane = localStorage.getItem("wygrane") || 0;
let przegrane = localStorage.getItem("przegrane") || 0;
let wygraneLiczba = parseInt(wygrane)
let przegraneLiczba = parseInt(przegrane)

const wyrazy = [
    "pies",
    "kot",
    "wyrewolwerowany",
    "konstantynopol",
    "giganci",
    "samochód",
    "programista",
    "vsc",
    "maksik023-gp.ml",
    "nowy jork"
];
//tablica na adresy do grafik
const tabObrazki = [
    "assets/0.png",
    "assets/1.png",
    "assets/2.png",
    "assets/3.png",
    "assets/4.png",
    "assets/5.png",
    "assets/6.png",
    "assets/7.png",
    "assets/8.png",
    "assets/9.png",
    "assets/10.png",
];

const wyraz = wyrazy[Math.floor(Math.random() * wyrazy.length)];
const odpowiedz = [];
const uzyte = [" "];
let czyTrafiony = false;
let szanse = 11;
let spacje = 0;
let pozostaleLitery = wyraz.length;

for(let i = 0; i < wyraz.length; i++) {
    if(wyraz[i] == " ") {
        spacje++;
        odpowiedz[i] = "|";
    } else {
        odpowiedz[i]="_";
    }
}
pozostaleLitery -= spacje;

// #########################################
console.log(`Wylosowane haslo: ${wyraz}`);
// #########################################

document.getElementById("gra").textContent = odpowiedz.join(" ");

document.getElementById("ok").addEventListener("click", sprawdz)

function sprawdz() {
    czyTrafiony = false;
    const komunikat = document.getElementById("komunikat");
    komunikat.textContent = ""
    const strzal = document.getElementById("litera").value.toLowerCase();
    document.getElementById("litera").value = "";

    if(strzal.length == 0) {
        komunikat.textContent = "Prosze, podaj litere";
    } else if(uzyte.includes(strzal)) {
        komunikat.textContent = "Ta literka zostala juz uzyta!"
    } else {
        uzyte.push(strzal)
        for(let i = 0; i < wyraz.length; i++) {
            if(wyraz[i] == strzal) {
                czyTrafiony = true;
                odpowiedz[i] = strzal;
                pozostaleLitery--;
                document.getElementById("gra").textContent = odpowiedz.join(" ");
            }
        }
        if(pozostaleLitery == 0) {
            komunikat.textContent = "Brawo, odgadł*ś hasło!";
            komunikat.style.color = "green";
            document.getElementById("ok").disabled=true;
            document.getElementById("litera").disabled=true;
            wygrane = wygraneLiczba + 1;
            localStorage.setItem("wygrane", wygrane)
        }

        if(czyTrafiony == false) {
            ustawObrazek()
            szanse--;
            if(szanse == 0) {
                komunikat.innerHTML = `Przegrał*ś grę! Wylosowane słowo: <span id="wylosowaneSlowo">${wyraz}</span>`;
                komunikat.style.color = "red";
                document.getElementById("wylosowaneSlowo").style.color = "orange";
                document.getElementById("ok").disabled=true;
                document.getElementById("litera").disabled=true;
                przegrane = przegraneLiczba + 1;
                localStorage.setItem("przegrane", przegrane)
            }
        }
    }

    function ustawObrazek() {
        document.getElementById("wisielec").src = tabObrazki[szanse - 1];
        document.getElementById("wisielec").style.display = "block";
        komunikat.textContent = "";
    }
}

document.getElementById("reset").addEventListener("click", function() {
    window.location.reload();
})

document.getElementById("resetScore").addEventListener("click", function() {
    localStorage.clear()
    window.location.reload()
})

setInterval(() => {
    document.getElementById("iloscWygranych").textContent = wygrane;
    document.getElementById("iloscPrzegranych").textContent = przegrane;
}, 100)