// Zadanie 1
function jeden() {
    let internetSzybkosc = Number(prompt("Podaj prędkość swojego Internetu w Mb/s:"));
    let czasGodziny = 1;
    let czasSekundy = czasGodziny * 60 * 60;
    let szybkoscMB = internetSzybkosc / 8;
    let koniec = (szybkoscMB * czasSekundy) / 1024;

    alert(`Możesz ściągnąć około ${koniec.toFixed(2)} GB danych w ciągu godziny.`);
    console.log(`Możesz ściągnąć około ${koniec.toFixed(2)} GB danych w ciągu godziny.`);
}
// Zadanie 2
function dwa() {
    let rok = Number(prompt("Podaj rok:"));
    if (rok % 4 == 0 && (rok % 100 != 0 || rok % 400 == 0)) {
        alert(rok + " jest rokiem przestępnym.");
        console.log(rok + " jest rokiem przestępnym.");
    } else {
        alert(rok + " nie jest rokiem przestępnym.");
        console.log(rok + " nie jest rokiem przestępnym.");
    }
}
// Zadanie 3
function trzy() {
    function poleProstokata(bok1, bok2) {
        var pole = bok1 * bok2;
        return pole;
    }
    const boczek1 = Number(prompt("Podaj pierwszy bok trójkąta"))
    const boczek2 = Number(prompt("Podaj drugi bok trójkąta"))
    var bok1 = boczek1;
    var bok2 = boczek2;
    var pole = poleProstokata(bok1, bok2);
    console.log("Pole prostokąta o bokach " + bok1 + " i " + bok2 + " wynosi " + pole + ".");
    alert("Pole prostokąta o bokach " + bok1 + " i " + bok2 + " wynosi " + pole + ".");
}
// Zadanie 4
function cztery() {
    const znaki = '0123456789abcdef';
    const tablicaZnakow = [...znaki];
    let kolor = '#';
    for (let i = 0; i < 6; i++) {
        kolor += tablicaZnakow[Math.floor(Math.random() * tablicaZnakow.length)];
    }
    document.querySelector('html').style.background = kolor
    alert(`Twój wylosowany kolor: ${kolor}`)
    console.log(`Twój wylosowany kolor: ${kolor}`)
}
// Zadanie 5
function piec() {
    const newLogin = prompt("Podaj login!")
    const newEmail = prompt("Podaj email!")
    const newTelefon = prompt("Podaj numer telefonu!")
    const hasloDlugosc = Number(prompt("Podaj długość hasła!"))
    const nowyUser = {
        login: newLogin,
        email: newEmail,
        telefon: newTelefon,
        haslo: "",
        newHaslo: function() {
            const znaczki = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            let wygenerowane = "";
            for (let i = 0; i < hasloDlugosc; i++) {
                wygenerowane += znaczki.charAt(Math.floor(Math.random() * znaczki.length));
            }
            this.haslo = wygenerowane;
        }
    };
    nowyUser.newHaslo();
    alert(`Twoje hasło: ${nowyUser.haslo}`);
    console.log(`Twoje hasło: ${nowyUser.haslo}`);
    console.log(nowyUser)
}
// Zadania dodatkowe
function szesc() {
    const arg = [2, 5, 10, 12, 15, 20, 22];
    const result = evenGreaterThan10(arg);
    console.log(result);
    function evenGreaterThan10(arg) {
        const result = [];
        for (let i = 0; i < arg.length; i++) {
          const num = arg[i];
          if (num > 10 && num % 2 === 0) {
            result.push(num);
          }
        }
        return result;
    }
}
jeden()
dwa()
trzy()
cztery()
piec()
// Zadania dodatkowe
szesc()