console.log("Zaladowano strone!")
// ========================================================================
const liczba1 = 10;
const liczba2 = 12;

if(liczba1 > liczba2) {
    console.log(`${liczba1} jest wieksze od ${liczba2}`)
} else {
    console.log(`${liczba1} jest mniejsze lub rowne ${liczba2}`)
}
// ========================================================================
const rokUrodzenia = Number(prompt("W ktorym roku sie urodziles?"));
const wynik = new Date().getFullYear() - rokUrodzenia;
if(wynik >= 18) {
    alert(`Jestes pelnoletni! Masz ${wynik} lat/lata!`)
    console.log(`Jestes pelnoletni! Masz ${wynik} lat/lata!`)
    document.getElementById("pelnoletnosc").innerHTML=`Jestes pelnoletni! Masz ${wynik} lat/lata!`
} else {
    alert(`Nie jestes pelnoletni! Masz ${wynik} lat/lata!`)
    console.log(`Nie jestes pelnoletni! Masz ${wynik} lat/lata!`)
    document.getElementById("pelnoletnosc").innerHTML=`Nie jestes pelnoletni! Masz ${wynik} lat/lata!`
}
// ========================================================================
const wiek = Number(prompt("Podaj swoj wiek!"));
document.getElementById("twojWiek").innerHTML=`Twoj wiek: ${wiek}`
const kasa = Number(prompt("Podaj ile masz pieniedzy"));
document.getElementById("twojaKasa").innerHTML=`Twoja kasa: ${kasa}`

const CENA_GRY = 229.99;
document.getElementById("CENA_GRY").innerHTML=`Cena Gry: ${CENA_GRY}`
const WYMAGANY_WIEK = 18;
document.getElementById("WYMAGANY_WIEK").innerHTML=`Wymagany wiek: ${WYMAGANY_WIEK}`
if(wiek >= WYMAGANY_WIEK && kasa >= CENA_GRY) {
    alert("Mozesz kupic gre!")
    document.getElementById("wniosek").innerHTML=`Wniosek: Mozesz kupic gre!`
} else if(wiek < WYMAGANY_WIEK && kasa >= CENA_GRY) {
    alert("Jestes za mlody!")
    document.getElementById("wniosek").innerHTML=`Wniosek: Jestes za mlody!`
}
else if(wiek >= WYMAGANY_WIEK && kasa < CENA_GRY) {
    alert("Masz za malo pieniedzy!")
    document.getElementById("wniosek").innerHTML=`Wniosek: Masz za malo pieniedzy!`
} else {
    alert("Masz za malo pieniedzy i jestes za mlody, nie mozesz kupic gry!")
    document.getElementById("wniosek").innerHTML=`Wniosek: Masz za malo pieniedzy i jestes za mlody, nie mozesz kupic gry!`
}
// ========================================================================
const ocena = prompt("Podaj ocene 1-6");
switch(ocena) {
    case '6':
        alert("Wzorowy!");
        document.getElementById("ocena").innerHTML=`Ocena: Wzorowy!`
        break;
    case '5':
        alert("Bardzo dobry!");
        document.getElementById("ocena").innerHTML=`Ocena: Bardzo dobry!`
        break;
    case '4':
        alert("Dobry!")
        document.getElementById("ocena").innerHTML=`Ocena: Dobry!`
        break;
    case '3':
        alert("Dostateczny!")
        document.getElementById("ocena").innerHTML=`Ocena: Dostateczny!`
        break;
    case '2':
        alert("Dopuszczajacy!")
        document.getElementById("ocena").innerHTML=`Ocena: Dopuszczajacy!`
        break;
    case '1':
        alert("Niedostateczny!")
        document.getElementById("ocena").innerHTML=`Ocena: Niedostateczny!`
        break;
    default:
        alert("Podales zla wartosc!")
        document.getElementById("ocena").innerHTML=`Ocena: Podales zla wartosc!`
        location.reload();
        break;
}

// const a = 4
// const b = 6
// const c = 8
// const wyniczek = (a+b+c)/3
// switch(true) {
//     case wyniczek>4.75:
//         alert("Masz swiadectwo📝 z czerwonym🔴 paskiem!")
//         break;
// }