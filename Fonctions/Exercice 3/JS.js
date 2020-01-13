function _multiple()
{
    var N = prompt("Veuillez entrer un nombre");
    var X = prompt("Veuillez entrer un nombre");
    var res = 0;
    var i = 0;
    while(i <= N)
    {
        res = i * X;
        alert(i + " * " + X + " = " + res);
        i++;
    }
}
function _moyenne()
{
    var nb = prompt("Veuillez entrer un nombre");
    var res = 0;
    var i = 0;
    while(nb != 0)
    {
        res = parseInt(res) + parseInt(nb);
        nb = prompt("Veuillez entrer un nombre");
        i++;
    }
    alert("La somme des nombres vaut " + res);
    res /= i;
    alert("La moyenne vaut " + res);
}
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
var choix = prompt("1- Multiples \n 2- Somme et moyenne \n 3- Recherche du nombre de voyelles \n 4- Recherche du nombre des cractères suivants \n Entrez votre choix :")
if(choix == 1)
{
    _multiple();
}
else if(choix == 2)
    {
        _moyenne();
    }
else if(choix == 3 || choix == 4)
    {
        _occurence();
    }
else 
{
    alert("Ce choix n'existe pas");
}