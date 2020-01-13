
function _prime(k)
{
    var i = 3;
    if(k <= 1)
    {
       return 0;
    }
    else if(k == 2)
    {
        return 1;
    }
    else if(k % 2 == 0)
    {
        return 0;
    }
    else
    {
        while(i <= k / i)
        {
            if(k % i == 0)
            {
                return 0;
            }
                i = i + 2;
        }
    }   
    return 1;
}
function _list(tab_l,size_1)
{
    var i = 0;
    while(i++ != size_1)
    {
        tab_l[i] = i;
    }
    return tab_l;
}
function _AfficheTab(tab_a)
{
    i = 0;
    while(i++ != size)
    {
        document.write(tab_a[i - 1]+"<br>");
    }
}
var size = prompt("Quelle est le nombre max souhaité pour le tableaux ?");
var tab = Array(size);
var j = 0;
_list(tab,size);
while(j++ <= size)
{
   tab[j] = _prime(j);
}
var change = tab.splice(0, 1);
_AfficheTab(tab);




