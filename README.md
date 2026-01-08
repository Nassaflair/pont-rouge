<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Documentation de Déploiement et Développement

Ce guide explique pas à pas comment récupérer le projet, effectuer des modifications et déployer les mises à jour sur Infomaniak.

## 1. Récupération du projet (Setup)

Pour installer le projet sur un nouvel IDE ou un nouveau terminal :

1.  Ouvrez votre terminal.
2.  Clonez le dépôt (assurez-vous d'avoir l'URL du dépôt Git) :
    ```bash
    git clone https://github.com/Nassaflair/pont-rouge.git
    ```
3.  Entrez dans le dossier du projet :
    ```bash
    cd pont-rouge
    ```
    *(Note : Adaptez le nom du dossier si nécessaire)*
4.  Installez les dépendances :
    ```bash
    npm install
    ```
5.  (Optionnel) Pour tester en local :
    ```bash
    npm run dev
    ```

## 2. Pousser les modifications (Push)

Une fois vos modifications terminées :

1.  Ajoutez les fichiers modifiés à l'index Git :
    ```bash
    git add .
    ```
2.  Créez un commit avec un message expliquant vos changements :
    ```bash
    git commit -m "Description de la mise à jour"
    ```
3.  Envoyez les modifications vers le serveur distant :
    ```bash
    git push
    ```

## 3. Déploiement sur Infomaniak

Pour mettre à jour le site en ligne (`clegal-avocats.ch`) :

1.  **Connexion** : Connectez-vous à votre interface client **Infomaniak**.
2.  **Dashboard** : Allez sur le tableau de bord du site **clegal-avocats.ch**.
3.  **Terminal SSH** : Accédez à l'outil "Terminal" ou "SSH" depuis le panneau de gestion.
4.  **Mise à jour du code** :
    Dans la fenêtre de terminal qui s'ouvre, tapez les commandes suivantes :
    ```bash
    cd /sites/clegal-avocats
    git pull
    ```
    *Cela va télécharger la dernière version de votre code que vous venez de "push".*
5.  **Build & Redémarrage** :
    *   Retournez sur le **Dashboard** Infomaniak (interface graphique).
    *   Lancez la **construction (Build)** et l'**exécution** du site via les outils mis à disposition (souvent dans la rubrique "Node.js" ou "Applications Web", bouton "Relancer l'app" ou "Déployer").
