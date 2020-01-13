function _occurence()
{
    var phrase = prompt("Veuillez écrire une phrase");
    var lettre = prompt("Quelle lettre voulez rechercher ?");
    var taille = phrase.length;
    var res = 0;
    var i = 0;
    while(i <= taille)
    {
        if(phrase[i] == lettre)
        {
            res++;
        }
        i++;
    }
    alert("La lettre " + lettre + " appairait " + res + " fois");
}
