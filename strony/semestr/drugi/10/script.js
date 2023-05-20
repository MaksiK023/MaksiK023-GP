const wyrazy = [
    "pies",
    "kot",
    "wyrewolwerowany",
    "konstantynopol",
    "giganci",
    "samochód",
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
const uzyte = [];
let czyTrafiony = false;
let szanse = 11;
let pozostaleLitery = wyraz.length;

for(let i = 0; i < wyraz.length; i++) {
    odpowiedz[i]="_";
}
// console.log(`Wylosowane haslo: ${wyraz}`)
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
    } else {
        for(let i = 0; i < wyraz.length; i++) {
            if(wyraz[i] == strzal) {
                czyTrafiony = true;
                odpowiedz[i] = strzal;
                pozostaleLitery--;
                document.getElementById("gra").textContent = odpowiedz.join(" ");
            }
        }
    }
    if(pozostaleLitery == 0) {
        komunikat.textContent = "Brawo, odgadł*ś hasło!";
        document.getElementById("ok").disabled=true;
        document.getElementById("litera").disabled=true;
    }
}

document.getElementById("reset").addEventListener("click", function() {
    window.location.reload();
})