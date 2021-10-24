function ouverture(id, classe_o, classe_f)
{
    objet = document.getElementById(id);
    if (objet.classList.contains(classe_o))
    {
        objet.classList.remove(classe_o);
        objet.classList.add(classe_f);
    }
    else if (objet.classList.contains(classe_f))
    {
        objet.classList.remove(classe_f);
        objet.classList.add(classe_o);
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
    ouverture('actions', 'nav-fermee', 'nav-ouverte');
    ouverture('navigation', 'ouvert', 'ferme');
    obscursir('page');
}

function ouvrir_sous_menu(id)
{ ouverture('sm-' + id, 'ouvert-v', 'ferme-v'); }