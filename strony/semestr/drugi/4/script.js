function napiwek(kwota) {
    let procent;
    if (kwota < 100) {
      procent = 10;
    } else if (kwota >= 100 && kwota <= 250) {
      procent = 7;
    } else if (kwota > 250) {
      procent = 4;
    }
    let napiwek = (kwota * procent) / 100;
    alert(`Napiwek wynosi ${napiwek}zł`);
  }
function tablice() {
    const imiona = ["Maks", "Bruno", "Julek", "Borys N"];
    console.log(imiona);
  
    const liczby = [2, 56, 3, 67];
    console.log(liczby);
  
    const tablica = ["Maks", 13, "Bruno", 12];
    console.log(tablica);
  
    const auta = new Array("McLaren", "Bugatti", "Skoda");
    console.log(auta);
  
    console.log(imiona[2]);
  
    console.log(imiona.length);
  
    imiona.push("Adam"); //dodaj nowy element na końcu tablicy
    console.log(imiona);
  
    imiona.pop(); //usuwa ostatni element
    console.log(imiona);
  
    imiona.shift(); //usuwa pierwszy element
    console.log(imiona);
  
    console.log(imiona.length);
  
    imiona.reverse(); //odwraca kolejność elementów tablicy
    console.log(imiona);
  
    console.log(imiona.join(" - "));
  
    const tekst = "Giganci Programowania";
    const tablicaLiter = [...tekst];
    console.log(tablicaLiter);
  }
function palindrom(){
    // palindrom tak samo z lewej do prawej i z prawej do lewej
    const wyraz = prompt("Podaj palindrom!");
    const litery = [...wyraz];
    if(litery.join("") == litery.reverse().join("")) {
        console.log("Twój wyraz jest 'palindromem'")
    } else {
        console.log("Twój wyraz nie jest 'palindromem'")
    }
}
    const rachunek = Number(prompt("Podaj kwote rachunku!"));
    napiwek(rachunek);
    tablice();
    palindrom();