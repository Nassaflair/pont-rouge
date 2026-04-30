<div align="center">
  <img src="public/logo.svg" alt="Pont-Rouge Logo" />
</div>


<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Nuxt 3](https://img.shields.io/badge/Nuxt-3.0-00DC82?logo=nuxt.js&logoColor=white)](https://nuxt.com)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/Nassaflair/pont-rouge)
[![Status](https://img.shields.io/badge/Maintained-Yes-green.svg)](https://github.com/Nassaflair/pont-rouge)

**Documentation de Déploiement et Développement**

Ce guide explique pas à pas comment récupérer le projet, effectuer des modifications et déployer les mises à jour sur Infomaniak.

</div>

---

## 🚀 1. Récupération du projet (Setup)

Pour installer le projet sur un nouvel IDE ou un nouveau terminal :

1.  **Ouvrez votre terminal.**

2.  **Clonez le dépôt** (via HTTPS) :
    ```bash
    git clone https://github.com/Nassaflair/pont-rouge.git
    ```

3.  **Accédez au dossier du projet** :
    ```bash
    cd pont-rouge
    ```
    > 💡 *Note : Adaptez le nom du dossier si nécessaire.*

4.  **Installez les dépendances** :
    ```bash
    npm install
    ```

5.  **(Optionnel) Testez en local** :
    ```bash
    npm run dev
    ```

---

## 💾 2. Pousser les modifications (Push)

Une fois vos modifications terminées et validées localement :

1.  **Ajoutez les fichiers** à l'index Git :
    ```bash
    git add .
    ```

2.  **Créez un commit** avec un message descriptif :
    ```bash
    git commit -m "Description de la mise à jour"
    ```

3.  **Envoyez les modifications** vers le serveur distant :
    ```bash
    git push origin main
    ```

---

## 🌍 3. Déploiement sur Infomaniak

Pour mettre à jour le site en ligne [`clegal-avocats.ch`](https://clegal-avocats.ch) :

### 🔹 Étape A : Mise à jour du code
1.  **Connexion** : Connectez-vous à votre interface client **[Infomaniak](https://login.infomaniak.com)**.
2.  **Dashboard** : Allez sur le tableau de bord du site **clegal-avocats.ch**.
3.  **Terminal SSH** : Lancez l'outil "Terminal" ou "SSH" depuis le panneau de gestion.
4.  **Commande de mise à jour** :
    Dans le terminal, exécutez :
    ```bash
    cd /sites/clegal-avocats
    git pull
    ```
    > *Cela télécharge la dernière version de votre code que vous venez de "push".*

### 🔹 Étape B : Construction & Redémarrage
1.  Retournez sur le **Dashboard** Infomaniak (interface graphique).
2.  Accédez à la rubrique **"Node.js"** ou **"Applications Web"**.
3.  Cliquez sur le bouton **"Construire"** puis **"Exécuter"** (ou "Relancer l'app").

### 🔹 Étape C : Purger le cache Cloudflare (⚠️ obligatoire)

> Sans cette étape, les visiteurs continuent de voir l'ancienne version du site pendant **jusqu'à 4 heures** (TTL du cache Cloudflare). C'est trompeur : Infomaniak sert bien la nouvelle version, mais Cloudflare la masque.

1.  Connectez-vous à **[Cloudflare](https://dash.cloudflare.com)**.
2.  Sélectionnez le domaine **`clegal-avocats.ch`**.
3.  Dans la sidebar gauche : **Caching** → **Configuration**.
4.  Section "Purge Cache" → cliquez sur **Purge Everything** → confirmez.

> *Effet immédiat : les visiteurs voient la nouvelle version dès leur prochain refresh.*

### ✅ Vérification

Pour confirmer que le déploiement est bien live, testez l'en-tête HTTP :
```bash
curl -sI https://clegal-avocats.ch/ | grep -i "cf-cache-status\|age"
```
- `cf-cache-status: MISS` ou `REVALIDATED` juste après la purge → bon signe
- `age: 0` ou très petit → cache fraîchement reconstruit

---

## 🔄 Récap : Procédure complète d'un déploiement

```
1. Modifs locales → git add . → git commit -m "..." → git push origin main
2. SSH Infomaniak → cd /sites/clegal-avocats && git pull
3. Dashboard Infomaniak → Node.js → Construire → Exécuter
4. Cloudflare → Caching → Purge Everything
5. Vérifier en navigation privée : https://clegal-avocats.ch
```

---
<div align="center">
  <sub>Pont-Rouge by Clegal-Avocats - Tous droits réservés.</sub>
</div>
