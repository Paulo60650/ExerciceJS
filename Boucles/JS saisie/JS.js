var tab =[];
var i = 0;
while(prenom != 0)
{
   var prenom = prompt("Veuillez écrire un prénom");
    tab[i] = prenom;
    i++;
}
i = i -1;
alert("Vous avez écris " + i + " prénoms \n" + tab);