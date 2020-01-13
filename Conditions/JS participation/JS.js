var statu = window.confirm("Etes-vous marié?");
var enf = window.prompt("Combien avez vous d'enfants?");
var sal = window.prompt("Combien percevez vous par mois?");
var res;
if(statu == true)
{
    res = 25;
}
else
{
    res =20;
}
if(enf != 0)
{
    res = (enf * 10) + res;
}
if(sal > 1200)
{
    res = res + 10;
}
if (res >= 50)
{
    window.alert("Votre diner est pris en charde à hauteur de 50%");
}
else
{
    window.alert("Votre diner est pris en charge à hauteur de " + res +" %");
}