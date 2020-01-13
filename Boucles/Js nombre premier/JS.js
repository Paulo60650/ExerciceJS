var nb = prompt("Veuillez entrer un nombre");
var i = 3;
var res = 1;
if(nb <= 1)
{
    alert("Ce n'est pas un nombre premier");
}
else if(nb == 2)
{
    alert("C'est un nombre premier"); 
}
else if(nb % 2 == 0)
{
    alert("Ce n'est pas un nombre premier");
}
else
{
    while(i <= nb / i)
    {
        if(nb % i == 0)
        {
           res = 0;
        }
        i = i + 2;
    }
}
if(res == 0)
{
    alert("Ce n'est pas un nombre premier");
}
else 
{
    alert("C'est un nombre premier");
}