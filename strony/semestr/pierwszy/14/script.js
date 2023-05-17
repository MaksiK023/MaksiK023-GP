var numerZdjecia = 0;
slajder();

function slajder() {
  var zdjecia = document.getElementsByClassName("auto-galeria");

  // wygaszenie wszystkich zdjeć
  for (var i = 0; i < zdjecia.length; i++) {
    zdjecia[i].style.display = "none";
  }

  // wyświetlenie jednego zdjęcia
  zdjecia[numerZdjecia].style.display = "block";

  // zmiana zdjecia
  numerZdjecia++;
  if (numerZdjecia > zdjecia.length - 1) {
    numerZdjecia = 0;
  }

  setTimeout(slajder, 3000);
}
