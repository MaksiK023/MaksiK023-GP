//tablica która będzie przechowwać nazwy ćwiczeń
let tabCwiczenia = [];
// zmienna przechowująca info jak długo będziemy ćwiczyć
let czasCwiczenia;
//zmienna przechowująca info jak długo będziemy odpoczywać po każdym ćwiczeniu
let czasOdpoczynku;
//zmienna przechowująca nazwę aktualnie wykonywanego ćwiczenia
let aktualneCwiczenie;
//zmienna przechowująca liczbę ćwiczeń
let liczbaCwiczen;
//czas na przygotowanie do treningu domyślnie ustawiony na 5s
let czasPrzygotowania;
//czas ochłodzenia domyślnie będzie równy długości każdego ćwiczenia czyli jeśli każde ćwiczenie wykonujemy po 30s to czas ochłodzenia=30s
let czasOchlodzenia;
//zmienna mająca dostęp do naszych ćwiczeń, które widnieją na liście
let cwiczenia;

let liczbaSerii = 0;

//zmienne mające dostęp do dźwięków
const dzwiekPrzygotowanie = document.getElementById('dzwiekPrzygotowanie');
const dzwiekStart = document.getElementById('dzwiekStart');
const dzwiekNastepneCwiczenie = document.getElementById('dzwiekNastepneCwiczenie');


//po kliknięciu na przycisk dodaj dodajemy nowe ćwiczenie do listy
document.getElementById('przyciskDodaj').addEventListener('click', function() {
  dodanieCwiczenia()
});

//zdarzenie na kliknięcie przycisku enter
document.addEventListener('keyup', function(event) {
  if (event.keyCode == 13) {
    dodanieCwiczenia()
  }
});

//kliknięcie przycisku reset odświeżamy stronę
document.getElementById('przyciskReset').addEventListener('click', function() {
  window.location.reload();
});

//funkcja dodająca nowe ćwiczenie 
function dodanieCwiczenia() {

  let nowyElement = document.getElementById('cwiczenie').value.trim();

  if (nowyElement != '') {
    document.getElementById('komunikat').textContent = '';
    document.getElementById('cwiczenie').value = '';
    document.getElementById('listaCwiczen').innerHTML +=
      "<li class='nazwaCwiczenia'>" + nowyElement + '</li>';
  } else {
    document.getElementById('komunikat').textContent = 'Podaj nazwę ćwiczenia';
  }
}

//usuwanie ćwiczenia po jego kliknięciu na liście 
const lista = document.getElementById('listaCwiczen');


lista.addEventListener('click', function(e) {

  const elementListy = e.target;

  this.removeChild(elementListy);

});





//po kliknięciu na przycisk start uruchamiamy trening

document.getElementById('przyciskStart').addEventListener('click', function() {

  //przypisujemy kolekcję elementów nodeList do zmiennej będą to wszystkie nasze ćwiczenia na liście
  cwiczenia = document.querySelectorAll('.nazwaCwiczenia');
  //czyścimy tablicę ćwiczeń
  tabCwiczenia = [];
  //uzupełniamy naszą tablicę elementami, każdy element to nazwa ćwiczenia pobrany z listy
  for (let i = 0; i < cwiczenia.length; i++) {
    tabCwiczenia.push(cwiczenia[i].textContent);

  }

  //ukrywamy listę ćwiczeń w UI
  lista.style.display = 'none';

  //pobieramy dane wprowadzone przez użytkownika oraz ustawiamy wartości startowe
  czasCwiczenia = document.getElementById('czasCwiczenia').value;
  czasOdpoczynku = document.getElementById('czasOdpoczynku').value;
  czasOchlodzenia = czasCwiczenia;
  aktualneCwiczenie = 0;
  czasPrzygotowania = 5;
  liczbaCwiczen = tabCwiczenia.length;

  //sprawdzamy czy użytkownik podał wystkie dane 
  if (!czasCwiczenia || !czasOdpoczynku || !liczbaCwiczen) {
    document.getElementById('komunikat').textContent =
      'Uzupełnij poprawnie informacje dotyczące treningu.';
  }

  else {

    //miejsce na Twój kod GIGANCIE
    console.log('trening można rozpocząć');

    document.getElementById("przyciskStart").disabled = true;
    document.getElementById("przyciskDodaj").disabled = true;
    document.getElementById("komunikat").textContent = "";
    liczbaSerii++;
    document.getElementById("liczbaSerii").textContent = liczbaSerii + " SERIA";
    const zegar = setInterval(function() {
      if (czasPrzygotowania > 0) {
        dzwiekPrzygotowanie.play();
        document.getElementById("treningInfo").innerHTML = "<h2> Przygotuj się:" + czasPrzygotowania + "</h2";
        czasPrzygotowania--;
      }
      else {
        if (czasCwiczenia > 0) {
          if (czasCwiczenia == 1) dzwiekNastepneCwiczenie.play();
          else if (czasCwiczenia == czasOchlodzenia) dzwiekStart.play();
          document.getElementById("treningInfo").innerHTML = "<h3>Liczba ćwiczeń:" + liczbaCwiczen + "</h3>" + "<h3> Aktualne ćwiczenie: " + tabCwiczenia[aktualneCwiczenie] + "</h3>" + "<h2> Ćwicz przez:" + czasCwiczenia + "</h2>";
          czasCwiczenia--;
        }
        //===================
        else {
          if (czasOdpoczynku > 0 && liczbaCwiczen != 1) {
            document.getElementById("treningInfo").innerHTML = "<h2>Odpczynek:" + czasOdpoczynku + "</h2>" + "<h3>Następne ćwiczenie:" + tabCwiczenia[aktualneCwiczenie + 1] + "</h3>";
            czasOdpoczynku--;
          }
          else if (liczbaCwiczen == 1 && czasOchlodzenia > 0) {
            document.getElementById("treningInfo").innerHTML = "<h2>Ochłodzenie:" + czasOchlodzenia + "</h2>";
            czasOchlodzenia--;
          }
          else {
            dzwiekStart.play();
            document.getElementById("treningInfo").innerHTML = "<h2>Koniec treningu!</h2>";
            document.getElementById("przyciskStart").disabled = false;
            document.getElementById("przyciskDodaj").disabled = false;
            clearInterval(zegar);
            lista.style.display = "block";
          }
          if (czasOdpoczynku == 0 && liczbaCwiczen > 1) {
            aktualneCwiczenie++;
            liczbaCwiczen--;
            czasCwiczenia = document.getElementById("czasCwiczenia").value;
            czasOdpoczynku = document.getElementById("czasOdpoczynku").value;
            dzwiekStart.play();
          }
        }
        //===================
      }
    }, 1000);
  }
});