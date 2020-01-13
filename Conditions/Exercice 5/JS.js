var temp = window.prompt("Quelle est la température du patient");
var tens = window.prompt("Quelle est la tension du patient");
if(temp > 40 || tens >= 25)
{
    window.alert("Le patient doit être hospitalisé");
}
else
{
    window.alert("Le patient va bien");
}