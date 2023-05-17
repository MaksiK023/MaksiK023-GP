// window.location - informacje o stronie
// window.location.reload() - przeladowanie strony
// document.title - wysyla nagłowek strony
// document.title = "Jakas Nazwa" - zmienia naglowek strony
// document.querySelector("h1").style.color = "red"; - zmiena koloru pierwszego H1
// document.querySelector("h1").textContent = "Tekst"; - zmienia tekst pierwszego h1 na zwykly tekst
// document.querySelector("h1").innerHTML = "<i>Tekst</i>"; - zmienia tekst pierwszego h1 jako html
function osoba() {
    const osoba = {
        imie: 'Maks',
        nazwisko: 'Pokrywka',
        // wiek: 13,
        rodzina: ["Milena", "Arek", "Maryla", "Janek", "Bronek", "Halina", "itp."],
        czyPrawoJazdy: false,
        czyKartaRowerowa: true,
        czyKomunia: true,
        rokUrodzenia: 2010,
        obliczWiek: function(rokUrodzenia) {
            this.wiek = new Date().getFullYear() - this.rokUrodzenia;
        }
    }
    console.log(osoba);
    console.log(`${osoba.imie} ${osoba.nazwisko}`);
    // console.log(osoba['wiek']);
    osoba.obliczWiek();
    console.log(osoba.wiek);
}
function bmi() {
    const osoba1 = {
        imie: "Zbyszek",
        waga: 80,
        wzrost: 1.82,
        obliczBMI:function(){
          this.bmi = Number((this.waga/(this.wzrost*this.wzrost)).toFixed(2))
        }
    }
    const osoba2 = {
        imie: "Numerek",
        waga: 104,
        wzrost: 2,
        obliczBMI:function(){
          this.bmi = Number((this.waga/(this.wzrost*this.wzrost)).toFixed(2))
        }
    }
    osoba1.obliczBMI();
    osoba2.obliczBMI();
    console.log(osoba1)
    console.log(osoba1.bmi);
    console.log(osoba2)
    console.log(osoba2.bmi);
    if(osoba1.bmi>osoba2.bmi){
        console.log(`${osoba1.imie} ma większe BMI od ${osoba2.imie}`);
    } else if(osoba1.bmi<osoba2.bmi){
        console.log(`${osoba1.imie} ma mniejsze BMI od ${osoba2.imie}`);
    } else{
        console.log(`${osoba1.imie} ma takie samo BMI jak ${osoba2.imie}`);
    }
}
function computer() {
    const komputer = {
        ram: "16GB",
        dysk: "930GB",
        marka: "MSI",
        koszt: 10000,
        kartaGraficzna: "GTX 1660 SUPER"
    }
    console.log(komputer)
}
osoba()
bmi()
computer()