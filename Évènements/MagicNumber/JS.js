var magic = parseInt(Math.random()*100);
var element = document.getElementById('Roger');
element.addEventListener("keypress", function control(event){
    var nb = document.getElementById("Roger");
    var res = nb.value;
    if (event.which === 13 && res > magic)
    {
        document.getElementById('test').textContent = "Trop grand ! Réessayez";
        document.getElementById('Roger').value = "";
        event.preventDefault();
    } 
    else if( (event.which === 13 && res < magic))
    {
        document.getElementById('test').textContent = "Trop petit ! Réessayez";
        document.getElementById('Roger').value = "";
        event.preventDefault();
    }
    else if(res == magic)
    {
        alert("Félitations vous avez gagné");
        if(confirm("Voulez vous recommencer ?") == true)
        {
            window.location.reload();
        }
        else 
        {
            window.close();
        }
    }   
});
var element = document.getElementById('button');
element.addEventListener("click", function control(event){
    var nb = document.getElementById("Roger");
    var res = nb.value;
    if (res > magic)
    {
        document.getElementById('test').textContent = "Trop grand ! Réessayez";
        document.getElementById('Roger').value = "";
        event.preventDefault();
    } 
    else if( res < magic)
    {
        document.getElementById('test').textContent = "Trop petit ! Réessayez";
        document.getElementById('Roger').value = "";
        event.preventDefault();
    }
    else if(res == magic)
    {
        alert("Félitations vous avez gagné");
        if(confirm("Voulez vous recommencer ?") == true)
        {
            window.location.reload();
        }
        else 
        {
            window.close();
        }
        
    }
});