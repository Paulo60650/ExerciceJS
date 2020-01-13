var nb1 = window.prompt("Veuillez écire un nombre");
var nb2 = window.prompt("Veuillez écire un nombre");
var res = 0;
var i = 1;
if(nb1 > nb2)
{
    while( i != (nb1 - nb2))
    {
        res = res + (nb1 - i);
        i++;
    }
}
else
{
    while( i != (nb2 - nb1))
    {
        res = res + (nb2 - i);
        i++;
    }
}
alert("La somme de l'intervalle est de " + res);