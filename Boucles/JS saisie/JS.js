var prenom = prompt("Veuillez écrire un prénom");
var res;
var i = 0;
while(prenom != 0)
{
    res = res + " " + prenom;
    prenom = prompt("Veuillez écrire un prénom");
    i++;
}
alert("Vous avez écris " + i + " prénoms " + res);