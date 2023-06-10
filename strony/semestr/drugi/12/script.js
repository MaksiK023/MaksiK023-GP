let punkty = [];

let punktyRundy;

let aktualnyGracz;

const obrazki = [
  "assets/kosc-1.png",
  "assets/kosc-2.png",
  "assets/kosc-3.png",
  "assets/kosc-4.png",
  "assets/kosc-5.png",
  "assets/kosc-6.png",
];

let czyMoznaGrac;

nowaGra();

function nowaGra() {
  punkty = [0, 0];

  punktyRundy = 0;

  aktualnyGracz = 0;

  czyMoznaGrac = true;

  document.querySelector("#wynik-0").textContent = "0";
  document.querySelector("#wynik-1").textContent = "0";

  document.querySelector("#aktualne-punkty-0").textContent = "0";
  document.querySelector("#aktualne-punkty-1").textContent = "0";

  document.querySelector("#nazwa-0").textContent = "Gracz 1";
  document.querySelector("#nazwa-1").textContent = "Gracz 2";
}

document.querySelector(".btn-rzuc").addEventListener("click", function () {
  if (czyMoznaGrac == true) {
    let liczbaOczek = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".kosc").src = obrazki[liczbaOczek - 1];
    document.querySelector(".kosc").style.display = "block";

    if (liczbaOczek != 1) {
      punktyRundy += liczbaOczek;
      document.getElementById("aktualne-punkty-" + aktualnyGracz).textContent =
        punktyRundy;
    } else {
      nastepnyGracz();
    }
  }
});

function nastepnyGracz() {
  aktualnyGracz = aktualnyGracz == 0 ? 1 : 0;
  punktyRundy = 0;

  document.getElementById("aktualne-punkty-0").textContent = 0;
  document.getElementById("aktualne-punkty-1").textContent = 0;

  document.querySelector(".gracz-0-panel").classList.toggle("aktywny");
  document.querySelector(".gracz-1-panel").classList.toggle("aktywny");
}

function zatrzymajPunkty() {
  if (!czyMoznaGrac) {
    return;
  }

  punkty[aktualnyGracz] += punktyRundy;
  document.getElementById("wynik-" + aktualnyGracz).textContent =
    punkty[aktualnyGracz];

  if (punkty[aktualnyGracz] >= 100) {
    czyMoznaGrac = false;
    document.getElementById("nazwa-" + aktualnyGracz).textContent =
      "Zwycięstwo";
    document.querySelector(".kosc").style.display = "none";
    document
      .querySelector(".gracz-" + aktualnyGracz + "-panel")
      .classList.add("zwyciestwo");
  } else {
    nastepnyGracz();
  }
}

document.querySelector(".btn-zatrzymaj").addEventListener("click", zatrzymajPunkty);

document.querySelector(".btn-nowa-gra").addEventListener('click', nowaGra);