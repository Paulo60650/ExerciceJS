var nb = window.prompt("Entrez un nombre");
var res = 0;
var i = 0;
var moy = 0;
while(nb != 0)
{
    res = parseInt(res) + parseInt(nb);
    nb = window.prompt("Entrez un nombre");
    i++;
}
moy = res / i;
moy = Math.floor(moy);
document.writeln("Vous avez saisie " + i + " nombre(s) <br/> La somme des " + i + " nombre(s) saisie est " + res + " <br/> La moyenne elle est de " + moy);