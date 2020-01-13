var naissance = window.prompt("Quelle est votre année de naissance ?");
var aujd = new Date();
var année = aujd.getFullYear();
var age = année - naissance;
if(age < 0)
{
    window.alert("Vous n'êtes pas née ???");
}
else if(age >= 18)
{
    window.alert("Vous avez " + age + " et vous êtes majeur");
}
else
{
    window.alert("Vous avez " + age + " et vous êtes mineur")
}