// créer les constantes nécessaires
const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const linkInput = document.querySelector('#enterLink');
const submitBtn = document.querySelector('#submitLink');
const forgetBtn = document.querySelector('#forgetLink');

const linkDisplay = document.querySelector('.linkDisplay')
const scheduleLink = document.querySelector('.linkClass');

form.addEventListener('submit', function(e) {
    e.preventDefault();
  });

    // exécuter la fonction quand le bouton 'Save' est cliqué
    submitBtn.addEventListener('click', function() {
    
    // stocker l'url entré dans le web storage
    localStorage.setItem('link', linkInput.value);
    
    // exécuter linkDisplayCheck() pour afficher la
    // page personnalisée et changer le formulaire
    linkDisplayCheck();
  });

    // exécuter la fonction quand le bouton 'Forget' est cliqué
    forgetBtn.addEventListener('click', function() {
    // supprimer l'item name du web storage
    localStorage.removeItem('link');
    // exécuter nameDisplayCheck() pour afficher la
    // page personnalisée et changer le formulaire
    linkDisplayCheck();
});

// définit la fonction nameDisplayCheck()
function linkDisplayCheck() {
    // vérifie si l'élément 'link' est stocké dans le web storage
    if(localStorage.getItem('link')) {

      // Si c'est le cas, affiche le lien
      let link = localStorage.getItem('link');
      linkDisplay.textContent = 'Here\'s your link: ' + link;

      // cache la partie 'remember' du formulaire et affiche la partie 'forget'
      forgetDiv.style.display = 'block';
      rememberDiv.style.display = 'none';

    } else {
      // Sinon, affiche un accueil générique
      link.textContent = 'You didn\'t gave us anything yet :(';

      // cache la partie 'forget' du formulaire et affiche la partie 'remember'
      forgetDiv.style.display = 'none';
      rememberDiv.style.display = 'block';
    }
}

document.body.onload = linkDisplayCheck;