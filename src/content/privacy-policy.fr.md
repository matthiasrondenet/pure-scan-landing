# Politique de confidentialité de Pure Scan

Date d'entrée en vigueur : 2026-09-28

Pure Scan est un scanner de documents qui fonctionne entièrement sur votre appareil. Il n'a ni comptes, ni serveurs, ni publicités, ni outils d'analyse. Vos documents ne quittent jamais votre appareil, sauf si vous choisissez de les partager.

## Résumé

- Pure Scan n'a ni comptes, ni serveur central, ni publicités, ni SDK d'analyse ou de rapport de plantage.
- Le code de l'application n'envoie rien sur le réseau.
- Vos images numérisées, le texte reconnu et vos PDF sont stockés uniquement dans l'espace de stockage privé de l'application sur votre appareil.
- Vos documents ne quittent jamais votre appareil, sauf lorsque vous partagez ou enregistrez explicitement un export vers une destination de votre choix.
- Les composants Google ML Kit, qui assurent la numérisation et la reconnaissance de texte, sont décrits dans une section dédiée ci-dessous.

## Données collectées

Pure Scan ne collecte aucune information personnelle. Le développeur ne reçoit aucune donnée de l'application : il n'y a ni système de comptes, ni serveur qui reçoive vos données, ni service publicitaire ou d'analyse tiers intégré à l'application.

Les pages numérisées, le texte reconnu, les noms de documents et les PDF que vous créez sont conservés uniquement sur votre appareil, dans un espace de stockage que les autres applications ne peuvent pas lire. Supprimer un document le retire de l'application, et désinstaller l'application supprime tout ce qu'elle a enregistré.

## Autorisation de l'appareil photo

Pure Scan demande l'accès à l'appareil photo pour que vous puissiez numériser des pages de documents. L'appareil photo n'est utilisé que lorsque vous lancez une numérisation. Les photos sont traitées sur votre appareil et ne sont envoyées nulle part par l'application.

## Vos documents restent sur votre appareil

Vos documents ne quittent jamais votre appareil. Les images, le texte reconnu et les PDF sont traités et stockés localement.

Le seul cas où du contenu quitte l'application est lorsque vous partagez ou enregistrez volontairement un export PDF ou texte via le menu de partage Android. Le contenu est alors envoyé vers la destination que vous choisissez, par exemple une autre application, un e-mail ou un stockage cloud, et la politique de confidentialité de cette destination s'applique dès lors.

## Google ML Kit

Pure Scan utilise deux composants Google ML Kit :

- **La reconnaissance de texte** s'exécute sur votre appareil pour lire le texte de vos numérisations.
- **Le scanner de documents** est fourni par les services Google Play et affiche l'écran de numérisation propre à Google.

D'après la divulgation de données de Google pour ML Kit, ces composants peuvent envoyer à Google des diagnostics techniques, tels que le modèle de votre appareil, la version d'Android, le nom de package et la version de l'application, ainsi que des mesures de performance. Il s'agit d'un traitement propre à Google, soumis aux conditions de Google ; Pure Scan ne reçoit pas ces informations. Les images de documents et le texte reconnu ne font pas partie de ce que Google indique collecter. Vous pouvez lire la description de Google ici : https://developers.google.com/ml-kit/android-data-disclosure

## Sauvegardes

La sauvegarde automatique Android dans le cloud est désactivée pour Pure Scan. Vos documents numérisés ne sont donc pas copiés vers votre compte Google par le service de sauvegarde d'Android. Si vous réinstallez l'application ou changez de téléphone, vos documents ne vous suivent pas. Exportez d'abord en PDF tout ce que vous souhaitez conserver.

## Autorisations

- **Appareil photo** : utilisé pour numériser les pages de documents.
- **Internet et état du réseau** : déclarées par le framework et les bibliothèques sous-jacents. Le code de Pure Scan ne les utilise pas pour envoyer vos données où que ce soit.
- **Stockage (Android 12L et versions antérieures uniquement)** : utilisé uniquement pour enregistrer les exports sur les anciennes versions d'Android.
- **Vibration** : utilisée pour le retour haptique.

## Enfants

Pure Scan ne collecte sciemment aucune information personnelle, y compris auprès d'enfants.

## Modifications de cette politique

Si cette politique change, la version mise à jour sera publiée sur cette page avec une nouvelle date d'entrée en vigueur.

## Contact

Les questions sur cette politique peuvent être envoyées à YASD à hello@yasd.io.
