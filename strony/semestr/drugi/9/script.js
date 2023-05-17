// Załadowanie strony
console.log(`Załadowano: ${window.location.href}`);

// Dodawanie zadań
document.getElementById("przyciskDodaj").addEventListener('click', function() {
    // trim() usuwa białe znaki z końca i początku (białe znaki to spacja)
    const nowyElement = document.getElementById("element").value.trim();
    if(nowyElement != '') {
        document.getElementById("komunikat").textContent = '';
        document.getElementById("listaZadan").innerHTML += `<li>${nowyElement}</li>`;
        document.getElementById("element").value = "";
    } else {
        document.getElementById("komunikat").textContent = "Podaj zadanie!";
        document.getElementById("komunikat").style.color = "red";
    }
});

// Usuwanie zadań
const usun = document.getElementById("listaZadan")
usun.addEventListener('click', function(e){
    const elementListy = e.target;
    this.removeChild(elementListy);
    document.getElementById("komunikat").innerHTML = `Pomyslnie usunieto <span id="komunikat-text">${elementListy.textContent}</span>!`;
    document.getElementById("komunikat").style.color = "#0cf72c";
    document.getElementById("komunikat-text").style.color = "orange";
});

// Drukowanie
document.getElementById("przyciskDrukuj").addEventListener('click', function() {
    const obaszarWydruku = document.getElementById("doWydrukowania").innerHTML;
    document.body.innerHTML = obaszarWydruku;
    window.print();
    window.location.reload();
});