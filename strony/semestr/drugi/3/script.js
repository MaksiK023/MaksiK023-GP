function powitanie() {
    const imie = prompt("Podaj swoje imie");
    alert("Witaj "+ imie +" na mojej stronie");
}
powitanie()

function wiekUczestnika(rokUrodzenia) {
    return new Date().getFullYear() - rokUrodzenia;
}
const wiekMaksa = wiekUczestnika(2001);
const wiekKolegi = wiekUczestnika(2006);
const wiekKolezanki = wiekUczestnika(2010);
console.log(wiekMaksa,wiekKolegi,wiekKolezanki);

function lataDoEmerytury(rokUrodzenia, imie, plec) {
    const wiek = wiekUczestnika(rokUrodzenia);
    let doEmerytury;
    switch(plec) {
        case 'k':
        case 'K':
            doEmerytury = 60 - wiek;
            break;
        case 'm':
        case 'M':
            doEmerytury = 65 - wiek;
            break;
    }

    if(doEmerytury > 0) {
        console.log(`${imie} do emerytury zostalo ${doEmerytury} lat`)
    } else {
        console.log(`${imie} jestes juz na emeryturze!`)
    }
}

lataDoEmerytury(2010,'Maks','M');
lataDoEmerytury(1979,'Arek','m');
lataDoEmerytury(1978,'Milena','K');
lataDoEmerytury(1982,'Ewa','k');
// =============================================================================
const tekst = "    Giganci Programowania    "
console.log(tekst.length);
console.log(tekst.toUpperCase());
console.log(tekst.toLowerCase());
console.log(tekst.charAt(0));
console.log(tekst.startsWith("Giga"));
console.log(tekst.endsWith("ania"));
console.log(tekst.trim());
console.log(tekst.replace("Pro", "PRO"));