var numerZdjecia = 0;
slajder();
function slajder() {
  var img = document.getElementsByClassName("mySlides");
  for (var i = 0; i < img.length; i++) {
    img[i].style.display = "none"
  }
  numerZdjecia++;
  if (numerZdjecia > img.length) {
    numerZdjecia = 1
  }
  img[numerZdjecia - 1].style.display = "block";
  setTimeout(slajder, 3000);
}