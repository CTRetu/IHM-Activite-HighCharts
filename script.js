/**
 * Exécute le code contenu dans un textarea
 * et affiche le graphique dans la div correspondante.
 */
function runCode(editorId, chartId) {

  const code = document.getElementById(editorId).value;
  const container = document.getElementById(chartId);

  try {
    // 🔵 eval exécute le code écrit par l’étudiant
    eval(code);

  } catch (err) {
    // Affiche l’erreur dans le conteneur du graphique
    container.innerHTML =
      "<p style='color:red'>⚠️ Erreur : " + err.message + "</p>";
  }
}


/* ============================================
   INITIALISATION AUTOMATIQUE AU CHARGEMENT
   Charge tous les graphiques 1 → 40
   ============================================ */

window.onload = () => {

  for (let i = 1; i <= 40; i++) {
    const editor = document.getElementById('editor' + i);

    // On vérifie que l'exercice existe
    if (editor) {
      runCode('editor' + i, 'chart' + i);
    }
  }
};
