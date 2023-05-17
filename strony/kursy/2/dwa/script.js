document.getElementById("przyciskDodaj").onclick=function(){
    var nowyElement = document.getElementById("element").value.trim();
    if(nowyElement!=''){
        document.getElementById("komunikat").innerHTML="";
        document.getElementById("lis").innerHTML+="<li>"+nowyElement+"</li>";
    }
    else {
        document.getElementById("komunikat").innerHTML="Wypełnij pole!";
    }
}
var ul = document.getElementById("lis");
ul.addEventListener('click', function(e){
    var elementListy=e.target;
    this.removeChild(elementListy);
});