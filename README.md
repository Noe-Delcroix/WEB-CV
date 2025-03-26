# WEB CV 2.0

## Init

Run the following command
```bat
npm i
```

## Run locally

Run the following command
```bat
npm run start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.


## Deploy on AWS
Website is deployed publically at this url : https://www.noedelcroix.com


TODO instructions

# 1.1 Créer un bucket S3
- Allez dans la console AWS > S3
- Cliquez sur "Créer un bucket"
- Nom du bucket: www.votre-domaine.com
- Région: choisissez la plus proche de vos utilisateurs
- Décochez "Bloquer tout accès public"
- Créez le bucket

# 1.2 Configurer le bucket pour l'hébergement statique
- Sélectionnez votre bucket
- Onglet "Propriétés"
- Descendez jusqu'à "Hébergement de site web statique"
- Activez l'hébergement
- Document index: index.html
- Document d'erreur: index.html (pour le routage React)

# 1.3 Ajoutez la politique de bucket suivante
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::www.votre-domaine.com/*"
        }
    ]
}

# 2.1 Obtenir un certificat SSL avec AWS Certificate Manager
- Allez dans AWS Certificate Manager
- Cliquez sur "Demander un certificat"
- Choisissez "Demander un certificat public"
- Ajoutez vos domaines:
  * votre-domaine.com
  * *.votre-domaine.com
- Choisissez la validation par DNS
- Créez les enregistrements CNAME dans votre zone DNS OVH avec les valeurs fournies
- Attendez la validation du certificat (peut prendre jusqu'à 30 minutes)

# 3.1 Configuration de CloudFront
- Allez dans CloudFront
- Créez une distribution
- Origin domain: choisissez votre bucket S3
- Viewer protocol policy: Redirect HTTP to HTTPS
- Alternate domain names (CNAMEs): www.votre-domaine.com
- SSL Certificate: Choisissez votre certificat ACM
- Default root object: index.html
- Dans "Error pages":
  * Créez une redirection personnalisée
  * HTTP Error Code: 403
  * Response page path: /index.html
  * HTTP Response Code: 200

# 4.1 Configuration DNS sur OVH
- Connectez-vous à votre panel OVH
- Allez dans la zone DNS de votre domaine
- Ajoutez un enregistrement CNAME:
  * Sous-domaine: www
  * Cible: [votre-distribution-id].cloudfront.net
- Si vous voulez aussi le domaine apex (sans www):
  * Créez un enregistrement A
  * Pointez-le vers l'IP d'alias CloudFront

# 5.1 Build de l'application
npm run build

# 5.2 Upload vers S3 (avec AWS CLI)
aws s3 sync build/ s3://www.votre-domaine.com

# 5.3 Invalidation du cache CloudFront
aws cloudfront create-invalidation --distribution-id [VOTRE_DISTRIBUTION_ID] --paths "/*"

{
  "scripts": {
    "deploy": "npm run build && aws s3 sync build/ s3://www.votre-domaine.com && aws cloudfront create-invalidation --distribution-id [VOTRE_DISTRIBUTION_ID] --paths \"/*\""
  }
}








