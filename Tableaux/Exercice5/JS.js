var heure = prompt("Entrez une heure celon ce format \n HH:MM:SS");
var tab = heure.split(":");
var heure_2 = prompt("Entrez une heure celon ce format \n HH:MM:SS");
var tab_2 = heure_2.split(":");
var res = Array(3);
res[2] = parseInt(tab[2]) + parseInt(tab_2[2]);
if(res[2] > 59)
{
    res[1] = 1;
    res[2] = res[2] - 60;
}
res[1] = parseInt(tab[1]) + parseInt(tab_2[1]);
if(res[1] > 59)
{
    res[0] = 1;
    res[1] = res[1] - 60;
}
res[0] = parseInt(tab[0]) + parseInt(tab_2[0]);
if(res[0] > 23)
{
    res[0] = res[0] - 24;
}
document.write("Le résultat est " + res[0] + ":" + res[1] + ":" + res[2]);


