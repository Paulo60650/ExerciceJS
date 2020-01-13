var nb1 = window.prompt("Entrez un nombre");
var nb2 = window.prompt("Entrez de nouveau un nombre");
var sign = window.prompt("Entrez le signe de l'opérarion à effectuer");
var res;
if(sign == "/" && nb2 == 0)
{
    window.alert("Opérations impossible");
}
else if(sign == "/")
{
    res = nb1 / nb2;
    window.alert(res);
}
else if(sign == "+")
{
    res = parseInt(nb1) + parseInt(nb2);
    window.alert(res);
}
else if(sign == "-")
{
    res = nb1 - nb2;
    window.alert(res);
}
else if(sign == "*")
{
    res = nb1 * nb2;
    window.alert(res);
}
else
{
    window.alert("Erreur opérateur");
}