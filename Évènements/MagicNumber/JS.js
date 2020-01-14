var magic = parseInt(Math.random()*100);
var element_input = document.getElementById('Roger');
function func(){
var nb = document.getElementById("Roger");
var res = nb.value;
    if (res > magic)
    {
        document.getElementById('test').textContent = "Trop grand ! Réessayez ";
        document.getElementById('Roger').value = "";
    } 
    else if( res < magic)
    {
        document.getElementById('test').textContent = "Trop petit ! Réessayez ";
        document.getElementById('Roger').value = "";
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
}
element_input.addEventListener("keypress", function control(event){
    if (event.which === 13)
        func()  
});
var element_button = document.getElementById('button');
element_button.addEventListener("click", function(){
    func();
});