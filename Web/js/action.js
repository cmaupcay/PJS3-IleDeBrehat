function ouverture(id)
{
    objet = document.getElementById(id);
    if (objet.classList.contains('ouvert'))
    {
        objet.classList.remove('ouvert');
        objet.classList.add('ferme');
    }
    else if (objet.classList.contains('ferme'))
    {
        objet.classList.remove('ferme');
        objet.classList.add('ouvert');
    }
}

function obscursir(id)
{
    objet = document.getElementById(id);
    if (objet.classList.contains("obscur"))
        objet.classList.remove("obscur");
    else objet.classList.add("obscur");
}

function ouvrir_navigation()
{
    ouverture('navigation');
    obscursir('page');
}