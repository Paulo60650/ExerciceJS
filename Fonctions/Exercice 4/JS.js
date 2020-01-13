function _strtok()
{
    var str = prompt("Entrez liste séparé par des ; ");
    var str2 = ";";
    var n = prompt("Entrez le numéro correspondant au mot à extraire");
    var i = 0;
    var j = 0;
    var res = "Result : ";
    var taille = str.length;
    while (taille-- != 0 && n > 1)
    {
        if(str[i] == str2)
            n--;
        i++;
    }
    while(str[i] != str2 && taille != 0)
    {
        res = res.concat('', str[i]);
        i++;
        j++;
        taille--;

    }
    alert( str + "\n" + res);
}
_strtok();