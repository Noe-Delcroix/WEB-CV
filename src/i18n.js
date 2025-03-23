import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    "nav.button": "Resume",
                    "nav.home": "Home",
                    "nav.about": "About",
                    "nav.experience": "Experience",
                    "nav.skills": "Skills",
                    "nav.projects": "My projects",
                    "nav.hobbies": "Hobbies",
                    "nav.contact": "Contact",

                    "side.resume": "Resume",
                    "side.github": "Github",
                    "side.linkedin": "LinkedIn",
                    "side.email": "Email",

                    "home.welcome": "Welcome",
                    "home.job": "Software Engineer",
                    "home.button":"Explore",

                    "about.title1":"Hello, my name is",
                    "about.title2":"Nice to meet you !",
                    "about.p1":"I'm a {0} years old french developer, currently following a work-study program as a web developer in a french children's clothing company called Vertbaudet. I'm studying computer science and network engineering at IMT Nord Europe.",
                    "about.p2":"I've been passionate about computers and development for a long time and I'm always looking for new challenges to discover new technologies !",
                    "about.career":"My career",
                    "about.resume":"See my resume",
                    "about.projects":"My projects",

                    "projects.button.source":"Source code",
                    "projects.button.demo":"Try it online",
                    "projects.type.school":"School project",
                    "projects.type.personal":"Personal project",

                    "projects.forgor.title":"Forgor - VR survival game",
                    "projects.forgor.date":"January 2025",
                    "projects.forgor.desc":"VR survival game developed in two weeks on Unity. Combine objects found on a procedurally generated map to achieve your goals!",

                    "projects.lamazon.title":"Lamazon",
                    "projects.lamazon.date":"October 2024",
                    "projects.lamazon.desc":"Prototype E-commerce web application for selling llamas plushies, developped and deployed on the AWS cloud.",

                    "projects.deploy.title":"Deployment application",
                    "projects.deploy.date":"January 2024",
                    "projects.deploy.desc":"Web application to deploy and monitor projects on a server.",

                    "projects.minecraftclone.title":"Minecraft Clone",
                    "projects.minecraftclone.date":"September 2023",
                    "projects.minecraftclone.desc":"Minecraft remade from scratch in C# with OpenGL. Includes a custom game engine and a world generator",

                    "projects.treasuremap.title":"\"La carte aux trésors\" (Treasure map)",
                    "projects.treasuremap.date":"June 2023",
                    "projects.treasuremap.desc":"Cross-platform geocaching application, with connection system, based on Firebase database",

                    "projects.lightflix.title":"LightFlix",
                    "projects.lightflix.date":"March 2022",
                    "projects.lightflix.desc":"Online series catalog with search page, series information and episode listings. Uses TVMaze API for series information and statistics",

                    "projects.3d.title":"3D Visualizer",
                    "projects.3d.date":"December 2021",
                    "projects.3d.desc":"3D file visualization software (.ply) with integrated file library and extensive display customization",

                    "projects.lockdown.title":"\"Le Jeu du confinement\" (Lockdown game)",
                    "projects.lockdown.date":"May 2020",
                    "projects.lockdown.desc":"An 8bit-style arcade game. Try to do your shopping in a supermarket while respecting the social distancing rules",

                    "projects.platformer.title":"Tile-Based Platformer",
                    "projects.platformer.date":"March 2020",
                    "projects.platformer.desc":"A 2D platformer with simplistic graphics, an integrated level editor and a level-saving system",
                }
            },

            fr: {
                translation: {
                    "nav.button": "CV",
                    "nav.home": "Accueil",
                    "nav.about": "A propos",
                    "nav.experience": "Expériences",
                    "nav.skills": "Compétences",
                    "nav.projects": "Mes projets",
                    "nav.hobbies": "Loisirs",
                    "nav.contact": "Contact",

                    "side.resume": "CV",
                    "side.github": "Github",
                    "side.linkedin": "LinkedIn",
                    "side.email": "Email",

                    "home.welcome": "Bienvenue",
                    "home.job": "Ingénieur logiciel",
                    "home.button":"Explorer",

                    "about.title1":"Salut, moi c'est",
                    "about.title2":"Ravi de vous rencontrer !",
                    "about.p1":"Je suis un ingénieur français de {0} ans, suivant actuellement un cycle d'ingénieur informatique en apprentissage à l'IMT Nord Europe.",
                    "about.p2":"Je suis passionné par l'informatique et le développement depuis longtemps et je suis toujours à la recherche de nouveaux défis pour découvrir de nouvelles technologies !",
                    "about.career":"Mon parcours",
                    "about.resume":"Voir mon CV",
                    "about.projects":"Mes projets",
                
                    "projects.button.source":"Code source",
                    "projects.button.demo":"Essayer en ligne",
                    "projects.type.school":"Projet universitaire",
                    "projects.type.personal":"Projet personnel",

                    "projects.forgor.title":"Forgor - Jeu de survie VR",
                    "projects.forgor.date":"Janvier 2025",
                    "projects.forgor.desc":"Jeu de survie en VR développé en deux semaines sur Unity. Combinez des objets trouvés sur une map générée procéduralement afin d'attiendre vos objectifs !",

                    "projects.lamazon.title":"Lamazon",
                    "projects.lamazon.date":"Octobre 2024",
                    "projects.lamazon.desc":"Prototype d'application web E-commerce de vente de lamas en peluche, déployée sur le cloud AWS.",

                    "projects.deploy.title":"Application de déploiement",
                    "projects.deploy.date":"Janvier 2024",
                    "projects.deploy.desc":"Application web permettant de deployer et de suivre le déploiement de projets sur un serveur.",

                    "projects.minecraftclone.title":"Minecraft Clone",
                    "projects.minecraftclone.date":"Septembre 2023",
                    "projects.minecraftclone.desc":"Minecraft refait de zéro en C# avec OpenGL. Inclut un moteur de jeu personnalisé et un générateur de monde",

                    "projects.treasuremap.title":"\"La carte aux trésors\"",
                    "projects.treasuremap.date":"Juin 2023",
                    "projects.treasuremap.desc":"Application mobile de géocaching multiplateforme, avec système de connexion, basée sur une base de données Firebase",

                    "projects.lightflix.title":"LightFlix",
                    "projects.lightflix.date":"Mars 2022",
                    "projects.lightflix.desc":"Catalogue de séries en ligne avec page de recherche, informations sur les séries et liste des épisodes. Utilise l'API TVMaze pour les informations et les statistiques sur les séries",

                    "projects.3d.title":"Visualiseur 3D",
                    "projects.3d.date":"Décembre 2021",
                    "projects.3d.desc":"Logiciel de visualisation de fichiers 3D (.ply) avec bibliothèque de fichiers intégrée et personnalisation de l'affichage",

                    "projects.lockdown.title":"\"Le Jeu du confinement\"",
                    "projects.lockdown.date":"Mai 2020",
                    "projects.lockdown.desc":"Un jeu d'arcade style 8 bits. Essayez de faire vos courses dans un supermarché tout en respectant les règles de distanciation sociale",

                    "projects.platformer.title":"Jeu de plateforme",
                    "projects.platformer.date":"Mars 2020",
                    "projects.platformer.desc":"Un jeu de plateforme 2D avec des graphismes simplistes, un éditeur de niveaux intégré et un système de sauvegarde des niveaux",
                }
            }
        }
    });

export default i18n;