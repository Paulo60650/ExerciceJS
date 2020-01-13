var temp = window.prompt("Quelle est la tempéraure du patient");
var tens = window.prompt("Quelle est la tension du patient");
if(temp > 41 && tens > 25)
{
    window.alert("Le patient va perdre connaissance");
}
else
{
    window.alert("Le patient va bien");
}