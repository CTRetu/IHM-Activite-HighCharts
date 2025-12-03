# TP Highcharts Interactif

## Description du TP

Ce TP propose une **page HTML interactive** (reproduisant l'architecture d'un notebook), permettant d’apprendre Highcharts (Higthcharts Core / More, Highstock et Highmaps) à travers **40 exercices progressifs**.

Il permet de :

- Modifier et exécuter du code Highcharts directement dans la page  
- Explorer les différents types de graphiques (colonnes, lignes, secteurs, cartes, heatmaps, bougies…)  
- S’initier à la visualisation de données  
- Comprendre les modules spécifiques de Highcharts (heatmap, treemap, funnel, stock, maps, …)

## Contenu du TP

Le TP se compose des fichiers suivants :

| Fichier | Rôle |
|--------|------|
| **index.html** | Structure du TP et des 40 exercices |
| **style.css** | Styles et mise en forme du TP |
| **script.js** | Script exécutant le code des exercices |
| **correction.html**| Correction des exercices 21 à 40 |

## Lancer le TP en local

Aucune installation supplémentaire n’est nécessaire.  
Vous devez simplement disposer de **Python 3**.

### Étapes pour lancer un serveur local

1. Ouvrir un terminal dans le dossier du projet :
   ```bash
   cd chemin/vers/le/projet
   ```
2. Démarrer un serveur local :
   ```bash
   python -m http.server 8000
   ```
3. Ouvrir votre navigateur à l’adresse :
   ```
   http://localhost:8000
   ```
   *Par défaut, ce sera la page index.html contenant les exercices.*
4. Si besoin : ouvrir la page de correction :
   ```
   http://localhost:8000/correction.html
   ```
   
## Documentation Highcharts utile pour les exercices

### Highcharts – Documentation générale
- Documentation: https://api.highcharts.com/highcharts/
- Exemples : https://www.highcharts.com/demo

### Highmaps
- Documentation : https://api.highcharts.com/highmaps/
- Exemples : https://www.highcharts.com/demo/maps
- Cartes : https://code.highcharts.com/mapdata/

### Highstock
- Documentation : https://api.highcharts.com/highstock/
- Exemples : https://www.highcharts.com/demo/stock

### Highcharts Gantt
- Documentation : https://api.highcharts.com/gantt/
- Exemples : https://www.highcharts.com/demo#highcharts-gantt-demo-highcharts-gantt

### Modules avancés
| Module | Lien |
|--------|------|
| Heatmap | https://api.highcharts.com/highcharts/heatmap |
| Treemap | https://api.highcharts.com/highcharts/treemap |
| Funnel | https://api.highcharts.com/highcharts/funnel |
| Arearange | https://api.highcharts.com/highcharts/arearange |
| Columnrange | https://api.highcharts.com/highcharts/columnrange |
| Accessibility | https://api.highcharts.com/highcharts/accessibility |


## Auteurs
ARBAUT Jean-Baptiste et TROPEL Célia
