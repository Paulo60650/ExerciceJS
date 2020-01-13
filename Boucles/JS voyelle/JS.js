var mot = prompt("Entrez un mot");
var taille = mot.length;
var i = 0;
var res = 0;

while(i <= taille)
{
    if((mot[i] == "a") || (mot[i] == "e") || (mot[i] == "i") || (mot[i] == "o") || (mot[i] == "u") || (mot[i] == "y"))
        {
            res++;
        }
    i++;
}
alert("Votre mot contient " + res + " voyelle(s)");