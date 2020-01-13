function _switch(tab,size)
{
    var i = -1;
    var temp = 0;
    while(i++ != size + 1)
    {
        if(tab[i] > tab[i+1])
        {
            temp = tab[i];
            tab[i] = tab[i+1];
            tab[i + 1] = temp;
        }
    }
    return tab;
}
function _tri(tab,size)
{
    var i = -1;
    while(i++ != size)
    {
        if(tab[i] > tab[i+1])
        {
            _switch(tab,size);
            i = -1;
        }
    }
    return tab;
}
function _AfficheTab(tab)
{
    i = 0;
    while(i++ != size)
    {
        document.write(tab[i - 1]+"<br>");
    }
}
var size = prompt("Quelle est la taille souhaité pour le tableaux ?");
var tab = Array(size);
var i = 0;
while(i++ != size)
{
    tab[i] = parseInt(prompt("Quelle valeurs voulez vous mettre dans la case " + i + " du tableau ?"));
}
var change = tab.splice(0, 1);
_tri(tab,size);
_AfficheTab(tab);


