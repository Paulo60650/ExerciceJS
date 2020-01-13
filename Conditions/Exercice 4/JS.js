var temp = window.prompt("Quelle est la température du patient");
var tens = window.prompt("Quelle est la tension du patient");
var poul = window.prompt("Quelle est le poul du patient");
if(temp > 42 || (tens > 25 && poul > 180))
{
    window.alert("Prevenir la famille du patient");
}
else
{
    window.alert("Le patient va bien")
}