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