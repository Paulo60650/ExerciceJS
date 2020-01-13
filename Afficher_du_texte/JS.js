var nom = window.prompt("Entrez votre nom");
var prenom = window.prompt("Entrez votre prenom");
var sexe = window.confirm("Etes-vous un homme ?");
if (sexe == false)
{
    window.alert("Bonjour Madame " + nom + " " + prenom);
}
else
{
    window.alert("Bonjour Monsieur " + nom + " " + prenom);
}