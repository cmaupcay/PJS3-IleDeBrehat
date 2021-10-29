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
    obscursir('fond');
    obscursir('page');
}

function ouvrir_sous_menu(id)
{ 
    bouton = document.getElementById(id);
    if (bouton.classList.contains('active'))
        bouton.classList.remove('active');
    else
        bouton.classList.add('active');
    ouverture('sm-' + id, 'ouvert-v', 'ferme-v');
}

function ouverture_acces_rapide()
{ 
    ouverture('acces-rapides', 'plus', 'moins');
    ouverture('plus', 'plus', 'moins');
}