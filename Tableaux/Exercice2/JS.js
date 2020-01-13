function _InitTab(tab)
{
var size = prompt("Quelle est la taille souhaité pour le tableaux ?");
var tab = Array(size);
return size;
}
function _SaisieTab(tab,size)
{
    var i = 0;
    while(i++ != size)
{   
    tab[i] = parseInt(prompt("Quelle valeur voulez vous mettre dans le tableau ?"));
}
}
function _AfficheTab(tab)
{
    var change = tab.splice(0, 1);
i = 0;
while(i++ != size)
{
document.write(tab[i - 1]+"<br>");
}
}
function _RechercheTab(tab)
{
        var search = prompt("Quelle rang du tableau souhaitez vous ?");
    
        document.write(tab[search]);
}
function _InfoTab(tab,size)
{
    var i = 0;
    var max = 0;
    var moyenne = 0;
    while(i++ != size )
    {
        moyenne = moyenne + tab[i];
        if(tab[i] > max)
        {
            max = tab[i];
        }
    }
    moyenne = moyenne / size;
    document.write("La moyenne du tableau vaut " + moyenne + " et le nombre le plus grand est " + max);
}
var tab =[];
var size = _InitTab(tab);
_SaisieTab(tab,size);
var choix = prompt("Que voulez vous faire ? \n 1- Afficher le contenu de tous les postes du tableau \n 2- Afficher le contenu d’un poste dont l’index est saisi au clavier \n 3- Afficher le maximum et de la moyenne des postes du tableau");
if(choix == 1)
{
    _AfficheTab(tab);
}
else if(choix == 2)
{
    _RechercheTab(tab);
}
else if(choix == 3)
{
    _InfoTab(tab,size);
}
else
{
    alert("Perdu !!! Il faut tout recommencer :(");
}
