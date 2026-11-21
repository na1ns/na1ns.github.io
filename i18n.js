const SITE_LANGUAGE_KEY = 'na1n_language';

const siteTranslations = {
  en: {
    'bienvenue chez': 'Welcome to',
    'Connecte-toi pour accéder à l’application': 'Sign in to access the application',
    "Connecte-toi pour accéder à l'application": 'Sign in to access the application',
    'Identifiant': 'Username',
    'Mot de passe': 'Password',
    'Se souvenir de moi': 'Remember me',
    'Se connecter': 'Sign in',
    'Déconnexion': 'Logout',
    'Connexion…': 'Connecting…',
    'Changer le thème': 'Change theme',
    'Passer en anglais': 'Switch to French',
    'Passer en français': 'Switch to English',
    'Rubriques': 'Sections',
    'Train': 'Train',
    'Joueurs': 'Players',
    'Puissances': 'Powers',
    'Recensement des puissances': 'Power survey',
    'Lien du recensement des puissances': 'Power survey link',
    'Pour déclarer tes puissances, indique la puissance et le type de chacune de tes deux équipes. Une déclaration par joueur et par recensement.': 'To report your powers, enter the power and type of both teams. One submission per player per survey.',
    '⚡ Puissance de l’équipe 1': '⚡ Team 1 power',
    'Saisis la puissance de ton équipe 1 en millions (ex. 18.31M). Tu peux utiliser un point ou une virgule.': 'Enter your team 1 power in millions (e.g. 18.31M). You can use a dot or comma.',
    'Enregistrement des puissances…': 'Saving powers…',
    '✓ Valider mes puissances': '✓ Submit my powers',
    'Puissances enregistrées !': 'Powers saved!',
    'Tank': 'Tank',
    'Avion': 'Aircraft',
    'Missile': 'Missile',
    'Hybride': 'Hybrid',
    'Missile hybride': 'Hybrid missile',
    'Joueur': 'Player',
    'Puissance équipe 1': 'Team 1 power',
    'Type équipe 1': 'Team 1 type',
    'Puissance équipe 2': 'Team 2 power',
    'Type équipe 2': 'Team 2 type',
    'Aucun recensement T1 enregistré.': 'No T1 survey has been recorded.',
    'Aucune déclaration pour ce recensement.': 'No submissions for this survey.',
    'Joueur inconnu': 'Unknown player',
    'Recensement en cours — ': 'Survey in progress — ',
    'Dernier recensement — ': 'Latest survey — ',
    'Sondages': 'Surveys',
    'Activités': 'Activities',
    'Historique': 'History',
    'Outils': 'Tools',
    'À propos': 'About',
    'Planning de la semaine': 'Weekly planning',
    'Copier': 'Copy',
    'Modifier': 'Edit',
    'Procéder au tirage': 'Run the draw',
    'Participants': 'Participants',
    'Statistiques': 'Statistics',
    'Canyon': 'Canyon',
    'Tempête du désert': 'Desert Storm',
    'Tirages': 'Draws',
    'Semaines archivées': 'Archived weeks',
    'Recrutements & Départs': 'Recruitments & Departures',
    'Récompenses': 'Rewards',
    'Gestion des sondages': 'Survey management',
    'Puissance T1': 'T1 Power',
    'Centre de sondage': 'Survey center',
    'Nouvelle session TDD': 'New TDD session',
    'Nouvelle session Canyon': 'New Canyon session',
    'Clôturer': 'Close',
    'Sondage Tempête du désert': 'Desert Storm survey',
    'Sondage Canyon': 'Canyon survey',
    'Centre de sondage': 'Survey center',
    'Ajouter': 'Add',
    'Ajouter un nom…': 'Add a name…',
    'Rechercher un joueur…': 'Search for a player…',
    'Cocher tous': 'Check all',
    'Décocher tous': 'Uncheck all',
    'Importer': 'Import',
    'Actualiser': 'Refresh',
    'Export Excel': 'Export Excel',
    'Réparer historique': 'Repair history',
    'Recalculer stats': 'Recalculate stats',
    'Archiver la semaine': 'Archive the week',
    'Podium': 'Podium',
    'Classement': 'Leaderboard',
    'Fiabilité': 'Reliability',
    'Évolution T1': 'T1 Progress',
    'Graphiques': 'Charts',
    'Trier par :': 'Sort by:',
    'Nom': 'Name',
    'Puissance': 'Power',
    'Chauffeur': 'Driver',
    'VIP': 'VIP',
    'Tous les joueurs': 'All players',
    'Top 5': 'Top 5',
    'Top 10': 'Top 10',
    'Top 20': 'Top 20',
    'Recherche ton nom…': 'Search for your name…',
    'Qui es-tu ?': 'Who are you?',
    'Chargement…': 'Loading…',
    'Présent': 'Present',
    'Remplaçant': 'Substitute',
    'Absent': 'Absent',
    'Disponible comme titulaire': 'Available as a starter',
    'Disponible si besoin': 'Available if needed',
    'Indisponible': 'Unavailable',
    'Je serai là — rôle titulaire': 'I will attend — starter role',
    'Je ne serai pas là': 'I will not attend',
    'Changer de nom': 'Change name',
    'Changer de pseudo': 'Change name',
    'Bataille du Canyon': 'Canyon Battle',
    'Tempête du Désert': 'Desert Storm',
    'Sélectionne ton pseudo dans la liste': 'Select your player name',
    'Quel rôle souhaites-tu ?': 'Which role do you want?',
    'Ta disponibilité ?': 'Your availability?',
    'Ouvrir la page Polls': 'Open the Polls page',
    'Copier le lien': 'Copy link',
    'Prévisualiser': 'Preview',
    'Erreur': 'Error',
    'Annuler': 'Cancel',
    'Valider': 'Confirm',
    'Fermer': 'Close'
  }
};

function getSiteLanguage() {
  let language = 'fr';
  try {
    language = localStorage.getItem(SITE_LANGUAGE_KEY) ||
      localStorage.getItem('alliance_poll_language') ||
      localStorage.getItem('na1n_qr_language') ||
      'fr';
  } catch (_) {}
  return language === 'en' ? 'en' : 'fr';
}

function translateSiteText(text, language) {
  if (language !== 'en') return text;
  const dictionary = siteTranslations.en;
  let result = text;
  if (dictionary[result.trim()]) return dictionary[result.trim()];
  Object.keys(dictionary)
    .sort((a, b) => b.length - a.length)
    .forEach(source => {
      if (source.length >= 3) result = result.split(source).join(dictionary[source]);
    });
  return result;
}

function applySiteTranslations(language = getSiteLanguage()) {
  document.documentElement.lang = language;
  const dictionary = siteTranslations.en;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach(node => {
    if (!node.parentElement || node.parentElement.closest('script,style,option')) return;
    if (!node.originalText) node.originalText = node.textContent;
    const original = language === 'fr' ? node.originalText : node.originalText;
    const translated = translateSiteText(original, language);
    if (node.textContent !== translated) node.textContent = translated;
  });

  document.querySelectorAll('[placeholder],[title],[aria-label]').forEach(element => {
    ['placeholder', 'title', 'aria-label'].forEach(attribute => {
      if (!element.hasAttribute(attribute)) return;
      if (!element.dataset.originalAttribute) element.dataset.originalAttribute = '';
      const originalKey = `${attribute}_original`;
      if (!element.dataset[originalKey]) element.dataset[originalKey] = element.getAttribute(attribute);
      const original = element.dataset[originalKey];
      const translated = translateSiteText(original, language);
      if (element.getAttribute(attribute) !== translated) element.setAttribute(attribute, translated);
    });
  });

  const button = document.getElementById('siteLanguageBtn');
  if (button) {
    button.textContent = language === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR';
    button.title = language === 'fr' ? 'Passer en anglais' : 'Passer en français';
    button.setAttribute('aria-label', button.title);
  }

  try {
    localStorage.setItem(SITE_LANGUAGE_KEY, language);
  } catch (_) {}
}

function setSiteLanguage(language) {
  const next = language === 'en' ? 'en' : 'fr';
  try {
    localStorage.setItem(SITE_LANGUAGE_KEY, next);
    localStorage.setItem('alliance_poll_language', next);
    localStorage.setItem('na1n_qr_language', next);
  } catch (_) {}
  applySiteTranslations(next);
  document.title = next === 'en'
    ? document.title.replace(/^Bienvenue chez/, 'Welcome to')
    : document.title.replace(/^Welcome to/, 'Bienvenue chez');
  if (typeof setPollLanguage === 'function') setPollLanguage(next);
}

function toggleSiteLanguage() {
  setSiteLanguage(getSiteLanguage() === 'fr' ? 'en' : 'fr');
}

window.setSiteLanguage = setSiteLanguage;
window.toggleSiteLanguage = toggleSiteLanguage;

document.addEventListener('DOMContentLoaded', () => {
  applySiteTranslations();
  const observer = new MutationObserver(() => applySiteTranslations(getSiteLanguage()));
  observer.observe(document.body, { childList: true, subtree: true, characterData: true });
});
