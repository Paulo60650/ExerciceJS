var element = document.getElementById('Roger');
element.addEventListener("keypress", function control(event){
    var mot = document.getElementById("Roger");
    var res = mot.value;
    if (event.which === 13)
        alert("Vous avez saisie " + "' " + res + " '");
});
var element = document.getElementById('button');
element.addEventListener("click", function control(event){
    var mot = document.getElementById("Roger");
    var res = mot.value;
    alert("Vous avez saisie " + "' " + res + " '");
        
});