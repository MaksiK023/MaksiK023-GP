console.log(`Załadowano strone: ${window.location.pathname}`);

document.getElementById('tekst').innerHTML = "<h1>Zmiana tekstu - JavaScript</h1>";

document.getElementById("btnTlumacz").addEventListener("click", function() {
  document.getElementById("doTlumaczenia").textContent = "The most common JavaScript language are websites. These scripts are most often used to connect by responding to events, validating data entered in the form, or creating complex visual effects.";
  document.getElementById("btnTlumacz").textContent = "Przetłumaczono!";
});

document.getElementById("formularz").addEventListener('submit', function(e) {
  e.preventDefault();
});

document.getElementById("zaloguj").addEventListener("click", function() {
  const loginDB = "maksik023";
  const hasloDB = "haslo123";

  const login = document.getElementById("login").value;
  const haslo = document.getElementById("haslo").value;

  if (login === loginDB) {
    if (haslo === hasloDB) {
      document.getElementById("info").textContent = "Zalogowano!"
      document.getElementById("info").style.color = "#11f54e"
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    } else {
      document.getElementById("info").textContent = "Haslo jest bledne!"
      document.getElementById("info").style.color = "orange"
    }
  } else {
    document.getElementById("info").textContent = "Login jest bledny!"
    document.getElementById("info").style.color = "orange"
  }

  if (login.length === 0 || haslo.length === 0) {
    document.getElementById("info").textContent = "Pola logowania nie moga byc puste!"
    document.getElementById("info").style.color = "orange"
  }
})