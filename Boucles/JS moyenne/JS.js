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