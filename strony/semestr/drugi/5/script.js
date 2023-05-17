function petla() {
    for(let i=0; i<100; i++){
        console.log("Giganci programowania");
    }
}
function odliczanie() {
    for(let i=10; i>0; i--) {
        alert(i);
    }
    alert("Start!");
}
function losowanie() {
    const los = Math.random()
    console.log(los)
    console.log(Math.floor(1.6))
    console.log(Math.ceil(1.6))
}
function tablica() {
    const liczby = []
    const min = 0;
    const max = 100;

    for(let i=1; i<50; i++) {
        liczby.push(Math.floor(Math.random()*(max-min+1)+min ))
    }
    console.log(liczby)
}
function nwm() {
    let j = 0;
    while(j<=10){
        console.log('dziala');
        j++;
    }
}
function strzal() {
    const wylosowana = Math.floor(Math.random()*11);
    let strzal;
    strzal = Number(prompt("Twoj strzał to "));
    while(wylosowana!=strzal) {
        if(strzal>wylosowana){
            alert("Podaj mniejszą liczbę");
        } else {
            alert("Podaj większą liczbę");
        }
        strzal = Number(prompt("Twoj strzał to "));
    }
    alert("Brawo wylosowana liczba to "+wylosowana);
}
function imiona() {
    const imiona = ["Maks", "Arek", "Borys", "Weronika", "Milena", "Ewa"];
    const mezczyzni = [];
    let ostatniaLitera;
    for(let i = 0; i < imiona.length; i++) {
        ostatniaLitera = [...imiona[i]].pop();
        if(ostatniaLitera == "a") {
            continue;
        }
        mezczyzni.push(imiona[i]);
    }
    console.log(`Imiona meskie to: ${mezczyzni.join(", ")}`)
}

petla()
odliczanie()
losowanie()
tablica()
nwm()
strzal()
imiona()
// Możesz zrobić maszyne lotto