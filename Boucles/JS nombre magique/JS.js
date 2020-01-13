var magic = parseInt(Math.random()*100);
var nb = prompt("Veuillez entrer un nombre");
while(nb != magic)
{
    if(nb > magic)
    {
        nb = prompt("Votre nombre est trop grand essayez encore!");
    }
    else
    {
       nb = prompt("Votre nombre est trop petit essayez encore!");
    }
}
alert("Félicitations vous avez gagnez !")