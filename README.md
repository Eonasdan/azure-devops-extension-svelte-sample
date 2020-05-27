# AzureDevOps Extension

Ce projet utilise le framework [Svelte](https://svelte.dev).


*Note: vous avez besoin de [Node.js](https://nodejs.org) d'installé.*


## Débuter

Installation des dépendances...

```bash
cd mon-extension-ado
npm install
```

...puis démarrer le serveur webpack:

```bash
npm run start:dev
```

L'extension est lancée sur [localhost:3000](http://localhost:3000). Vous devriez alors voir votre application fonctionner. Éditez un fichier de composant dans `src`, enregistrez-le et la page devrait se recharger avec vos modifications (hot reload).


## Configuration

Dans `src/App.svetle`, changer les variables `projectName` et `repoName` pour correspondre avec votre projet.


## Packager l'extension

```bash
npm run package
```

*Note: ne pas oublier de mettre à jour la version du package dans `vss-extension.json`.*

## Publier le package

Vous aurez besoin d'un PAT (Personal Access Token) pour utiliser le publish.


```bash
npm run publish
```

## Informations

Pour utiliser les api's du framework `azure-devops-extension-api`, il est nécessaire d'avoir les droits suffisants voir [Scopes](https://docs.microsoft.com/en-us/azure/devops/extend/develop/manifest?view=azure-devops#scopes).

Pour la démo, l'extension va chercher les commits d'un repo Azure DevOps, elle a donc besoin de l'autorisation permettant d'intérroger Azure Repos, il faut alors modifier le scope de l'extension, pour la démo on utilisera le scope suivant `vso.code_full` (pour une application de production, prendre le ou les plus restrictifs selon vos besoins bien entendu) cette propriété `scope` est à définir dans le fichier `vss-extension.json`.

Lorsque vous modifier les scopes et si le package a déjà été publié au préalable, il vous faut valider les nouvelles autorisations dans `Organization settings/Extensions`, sans quoi vous aurez des erreurs de type CORS.


## Debug

Pour utiliser le mode debug il vous faut packager (et publier à la main) ou publier l'application en mode dev.

```bash
npm run package:dev
```

ou

```bash
npm run publish:dev
```

*Note: il n'est pas possible de publier le package `dev` sur le package `release`.*

*Solution de contournement: modifier la propriété `name` du fichier `vss-extension.json` pour chaque changement de mode de publication (dev ou release) pour pouvoir faire cohabiter les deux extensions sur Azure DevOps*

Une fois l'application installée sur Azure DevOps et en mode `dev`, si vous naviguez sur celle-ci vous aurez une icône de chargement qui tourne indéfiniment, car en mode `dev` (voir le fichier `configs\dev.json`), le navigateur redirige tout les appels réseau vers l'url définie par la propriété `basePath` à savoir "https://localhost:3000", *c'est magique dis donc c'est celle de mon serveur local ! :laughing:*

Vous l'aurez alors compris en lançant votre serveur local vous pourrez alors debuguer votre application. 

C'est parti, on lance la commande:

```bash
npm run start:dev-ado
```

Votre extension s'affiche désormais dans Azure DevOps, vous pouvez alors modifier vos fichiers en local et apprécier la puissance du hot reload :blush:

*Info tech: afin que le navigateur puisse résoudre les fichiers de votre extension (dossier dist), la commande `npm run start:dev-ado` lance le serveur webpack dans un mode permettant de servir vos fichiers à partir du dossier `/dist` plutôt qu'en mémoire*


Enjoy !