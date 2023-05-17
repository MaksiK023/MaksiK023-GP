// var kurs = "Strony internetowe semestr 2";
// console.log(kurs);

// const wiek = 13;
// console.info(wiek);

// let wiek1 = 14;
// console.log(wiek1);

// const camelCase = 12;
// const snake_case = 13;
// const PascalCase = 14;
// // komentarz liniowy
// const a = 1;
// /* komentarz blokowy
// const b = 2;
// */
// let liczba1 = 14.5;
// console.log(liczba1);
// liczba1 = -13.23;
// console.log(liczba1);
// const czyWygrana = false;
// console.log(czyWygrana);

const odp = prompt("Ile masz lat?");
console.log("Twój wiek to " + odp + " lat");

// const nazwa1 = "Giganci";
// const nazwa2 = "programowania";
// const nazwa = nazwa1 + " " + nazwa2;
// alert(nazwa);

// const semestr = 2;
const imie = prompt("Podaj imie");
const nazwisko = prompt("Podaj nazwisko");
// alert(
//   "Witaj na kursie strony internetowe " + semestr + ", " + imie + " " + nazwisko
// );
// document.getElementById("imie").innerHTML="Twoje imie: "+imie
// document.getElementById("nazwisko").innerHTML="Twoje nazwisko: "+nazwisko
// document.getElementById("wiek").innerHTML="Twój wiek: "+odp
// // console.error("Błąd")

// let liczba = 10;
// console.log(liczba+3);
// console.log(liczba-4.5);
// console.log(liczba/2);
// console.log(liczba*3);
// console.log(liczba++);
// console.log(liczba);
// console.log(liczba--);
// console.log(liczba%3);

const masa = Number(prompt("Podaj mase ciała w kg!"));
const wzrost = Number(prompt("Podaj wzrost ciała w metrach"));

const bmi = masa/(wzrost* wzrost);
alert("Twoje BMI: " + bmi.toFixed(2));
document.getElementById("wiek").innerHTML="Twój wiek: "+odp
document.getElementById("imie").innerHTML="Twoje imie: "+imie
document.getElementById("nazwisko").innerHTML="Twoje nazwisko: "+nazwisko
document.getElementById("masa").innerHTML="Twoja masa ciała: "+masa
document.getElementById("wzrost").innerHTML="Twój wzrost ciała: "+wzrost
document.getElementById("bmi").innerHTML="Twoje BMI: "+bmi.toFixed(2)