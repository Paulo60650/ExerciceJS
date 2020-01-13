var res = 0;
var res2 = 0;
function _produit(x,y)
{
    res = x * x * x;
    res2 = parseInt(x) + parseInt(y);
}
function _afficheImg ( image )
{
    document.getElementById("image").innerHTML ='<img src ='+(image)+'>'
}
document.getElementById("texte").innerHTML =  'Le cube de 3 est 27 <br> Le produit de 3 x 5 est égal à 15' 
_afficheImg("img/papillon.jpg");
