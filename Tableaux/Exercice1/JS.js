var size = prompt("Quelle est la taille souhaité pour le tableaux ?");
var tab = Array(size);
var i = 0;
if (size > 0)
{
while(i++ != size)
{
    tab[i] = prompt("Quelle valeurs voulez vous mettre dans la case " + i + " du tableau ?");
}
var change = tab.splice(0, 1);
i = 0;
while(i++ != size)
{
document.write(tab[i - 1]+"<br>");
}
}
else{
    alert("Il faut une valeur correct pour la taille du tableau");
}