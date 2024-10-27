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
                    "nav.projects": "Projects",
                    "nav.hobbies": "Hobbies",
                    "nav.contact": "Contact",

                    "side.resume": "Resume",
                    "side.github": "Github",
                    "side.linkedin": "LinkedIn",
                    "side.email": "Email",

                    "home.welcome": "Welcome",
                    "home.job": "Full Stack Developer",
                    "home.button":"Explore",

                    "about.title1":"Hello, my name is",
                    "about.title2":", nice to meet you !",
                    "about.p1":"I'm a {0} years old french developer, currently following a work-study program as a web developer in a french children's clothing company called Vertbaudet. I'm studying computer science and network engineering at IMT Nord Europe.",
                    "about.p2":"I've been passionate about computers and development for a long time and I'm always looking for new challenges to discover new technologies !",

                    "experience.subtitle1":"Work Experience",

                    "experience.vb.date":"2022 - today",
                    "experience.vb.job":"Work-study Web development",
                    "experience.vb.desc1":"<b>C# .net</b> development with <b>Visual Studio</b>",
                    "experience.vb.desc2":"<b>SQL Server</b> database management",
                    "experience.vb.desc3":"Front end development with <b>HTML, CSS, JavaScript</b>",

                    "experience.ramery.date":"April - June 2022",
                    "experience.ramery.job":"Software Development Internship",
                    "experience.ramery.desc1":"Using <b>Revit</b> 3D modeling software",
                    "experience.ramery.desc2":"Development of Revit macros in <b>C#</b>",
                    "experience.ramery.desc3":"Excel Macros in <b>Visual Basic</b>",

                    "experience.subtitle2":"Education",

                    "experience.engineer.date":"2022 - 2025",
                    "experience.engineer.diploma":"Engineering degree in computer and networking",
                    "experience.engineer.school":"IMT Nord Europe, Lille",

                    "experience.dut.date":"2020 - 2022",
                    "experience.dut.diploma":"Technical Degree in computer science",
                    "experience.dut.school":"IUT A, University of Lille",

                    "experience.highschool.date":"June 2020",
                    "experience.highschool.diploma":"Scientific Baccalauréat with honors",
                    "experience.highschool.dut":"Specialized in engineering and mathematics",
                    "experience.highschool.school":"Saint Jude High-school, Armentières",

                    "skills.desc":"/* These are the technologies I've worked with in the past */",
                    "skills.tab1":"Programing Languages",
                    "skills.tab2":"Frameworks & Libraries",
                    "skills.tab3":"Tools & Software",

                    "skills.subtitle1":"Language Skills",
                    "skills.lang.en":"English - B2+",
                    "skills.lang.en2":"TOEIC : 940/990",
                    "skills.lang.de":"German - A2",

                    "skills.subtitle2":"Soft Skills",
                    "skills.soft1":"Agile methodology",
                    "skills.soft2":"Teamwork",
                    "skills.soft3":"Creativity",
                    "skills.soft4":"Curiosity",

                    "skills.subtitle3":"Other Skills",
                    "skills.other1":"Image Editing (Photoshop, Paint.net)",
                    "skills.other2":"Video Editing (DaVinci Resolve, CapCut)",

                    "projects.button.source":"Source code",
                    "projects.button.demo":"Try it online",
                    "projects.type.school":"School project",
                    "projects.type.personal":"Personal project",

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

                    "projects.ant.title":"Ant Simulation",
                    "projects.ant.date":"March 2021",
                    "projects.ant.desc":"A program designed to simulate the behavior of ants as they go back and forth to collect food and return it to the colony, using pheromones to orient themselves",

                    "projects.lockdown.title":"\"Le Jeu du confinement\" (Lockdown game)",
                    "projects.lockdown.date":"May 2020",
                    "projects.lockdown.desc":"An 8bit-style arcade game. Try to do your shopping in a supermarket while respecting the social distancing rules",

                    "projects.platformer.title":"Tile-Based Platformer",
                    "projects.platformer.date":"March 2020",
                    "projects.platformer.desc":"A 2D platformer with simplistic graphics, an integrated level editor and a level-saving system",

                    "hobbies.desc":"/* Things I enjoy doing when I'm not working */",
                    "hobbies.hobby1.title":"Music Production",
                    "hobbies.hobby1.desc":"I've been composing and producing music on <b>FL Studio</b> for about 3 years. I mainly make <b>electronic bass music</b>, but I try to experiment with as many styles as I can to discover new sounds.",
                    "hobbies.hobby2.title":"Video Games",
                    "hobbies.hobby2.desc":"I've always enjoyed playing video games in my spare time. I mainly like games with built-in level editors so I can express my creativity, like <b>Minecraft</b>, <b>Trackmania</b> or <b>Geometry Dash</b>. But I also enjoy playing with friends, from example on <b>Rocket League</b>.",
                    "hobbies.hobby3.title":"Series",
                    "hobbies.hobby3.desc":"I like to watch series to relax, mostly japanese animation. If I had to choose three works, I'd recommend you watch <b><i>Gurren Lagann</i></b>, <b><i>Attack on Titans</i></b> and <b><i>Arcane</i></b>.",
                }
            },

            fr: {
                translation: {
                    "nav.button": "CV",
                    "nav.home": "Accueil",
                    "nav.about": "A propos",
                    "nav.experience": "Expériences",
                    "nav.skills": "Compétences",
                    "nav.projects": "Projets",
                    "nav.hobbies": "Loisirs",
                    "nav.contact": "Contact",

                    "side.resume": "CV",
                    "side.github": "Github",
                    "side.linkedin": "LinkedIn",
                    "side.email": "Email",

                    "home.welcome": "Bienvenue",
                    "home.job": "Développeur Full Stack",
                    "home.button":"Explorer",

                    "about.title1":"Salut, moi c'est",
                    "about.title2":", ravi de vous rencontrer !",
                    "about.p1":"Je suis un développeur français de {0} ans, suivant actuellement un cycle d'ingénieur informatique en apprentissage à l'IMT Nord Europe.",
                    "about.p2":"Je suis passionné par l'informatique et le développement depuis longtemps et je suis toujours à la recherche de nouveaux défis pour découvrir de nouvelles technologies !",

                    "experience.subtitle1":"Expériences Professionnelles",

                    "experience.vb.date":"2022 - Aujourd'hui",
                    "experience.vb.job":"Développement Web en alternance",
                    "experience.vb.desc1":"Développement <b>C# .net</b> avec <b>Visual Studio</b>",
                    "experience.vb.desc2":"Gestion de base de données <b>SQL Server</b>",
                    "experience.vb.desc3":"Développement front end avec <b>HTML, CSS, JavaScript</b>",

                    "experience.ramery.date":"Avril - Juin 2022",
                    "experience.ramery.job":"Stage Développement Logiciel",
                    "experience.ramery.desc1":"Utilisation du logiciel de modélisation 3D <b>Revit</b>",
                    "experience.ramery.desc2":"Développement de macros Revit en <b>C#</b>",
                    "experience.ramery.desc3":"Macros Excel en <b>Visual Basic</b>",

                    "experience.subtitle2":"Formation",

                    "experience.engineer.date":"2022 - 2025",
                    "experience.engineer.diploma":"Diplôme d'ingénieur en informatique et réseaux",
                    "experience.engineer.school":"IMT Nord Europe, Lille",

                    "experience.dut.date":"2020 - 2022",
                    "experience.dut.diploma":"DUT Informatique",
                    "experience.dut.school":"IUT A, Université de Lille",

                    "experience.highschool.date":"Juin 2020",
                    "experience.highschool.diploma":"Baccalauréat Scientifique, mention très bien",
                    "experience.highschool.dut":"Spécialités sciences de l'ingénieur et mathématiques",
                    "experience.highschool.school":"Lycée Saint Jude, Armentières",

                    "skills.desc":"/* Voici les technologies avec lesquelles j'ai travaillé par le passé */",
                    "skills.tab1":"Langages de programmation",
                    "skills.tab2":"Frameworks & Librairies",
                    "skills.tab3":"Outils & Logiciels",

                    "skills.subtitle1":"Compétences Linguistiques",
                    "skills.lang.en":"Anglais - B2+",
                    "skills.lang.en2":"TOEIC : 940/990",
                    "skills.lang.de":"Allemand - A2",

                    "skills.subtitle2":"Soft Skills",
                    "skills.soft1":"Méthodologie Agile",
                    "skills.soft2":"Travail d'équipe",
                    "skills.soft3":"Créativité",
                    "skills.soft4":"Curiosité",

                    "skills.subtitle3":"Autres compétences",
                    "skills.other1":"Montage photo (Photoshop, Paint.net)",
                    "skills.other2":"Montage vidéo (DaVinci Resolve, CapCut)",

                    "projects.button.source":"Code source",
                    "projects.button.demo":"Essayer en ligne",
                    "projects.type.school":"Projet universitaire",
                    "projects.type.personal":"Projet personnel",

                    "projects.minecraftclone.title":"Minecraft Clone",
                    "projects.minecraftclone.date":"Septembre 2023",
                    "projects.minecraftclone.desc":"Minecraft refait de zéro en C# avec OpenGL. Inclut un moteur de jeu personnalisé et un générateur de monde",

                    "projects.treasuremap.title":"\"La carte aux trésors\"",
                    "projects.treasuremap.date":"Juin 2023",
                    "projects.treasuremap.desc":"Application de géocaching multiplateforme, avec système de connexion, basée sur une base de données Firebase",

                    "projects.lightflix.title":"LightFlix",
                    "projects.lightflix.date":"Mars 2022",
                    "projects.lightflix.desc":"Catalogue de séries en ligne avec page de recherche, informations sur les séries et liste des épisodes. Utilise l'API TVMaze pour les informations et les statistiques sur les séries",

                    "projects.3d.title":"Visualiseur 3D",
                    "projects.3d.date":"Décembre 2021",
                    "projects.3d.desc":"Logiciel de visualisation de fichiers 3D (.ply) avec bibliothèque de fichiers intégrée et personnalisation de l'affichage",

                    "projects.ant.title":"Simulation de fourmis",
                    "projects.ant.date":"Mars 2021",
                    "projects.ant.desc":"Un programme conçu pour simuler le comportement des fourmis lorsqu'elles vont et viennent pour collecter de la nourriture et la ramener à la colonie, en utilisant des phéromones pour s'orienter",

                    "projects.lockdown.title":"\"Le Jeu du confinement\"",
                    "projects.lockdown.date":"Mai 2020",
                    "projects.lockdown.desc":"Un jeu d'arcade style 8 bits. Essayez de faire vos courses dans un supermarché tout en respectant les règles de distanciation sociale",

                    "projects.platformer.title":"Jeu de plateforme",
                    "projects.platformer.date":"Mars 2020",
                    "projects.platformer.desc":"Un jeu de plateforme 2D avec des graphismes simplistes, un éditeur de niveaux intégré et un système de sauvegarde des niveaux",

                    "hobbies.desc":"/* Ce que j'aime faire quand je ne travaille pas */",
                    "hobbies.hobby1.title":"Production Musicale",
                    "hobbies.hobby1.desc":"Je compose et produis de la musique sur <b>FL Studio</b> depuis environ 3 ans. Je fais principalement de la <b>musique électronique</b>, mais j'essaie d'expérimenter avec autant de styles que possible pour découvrir de nouveaux sons.",
                    "hobbies.hobby2.title":"Jeux Vidéos",
                    "hobbies.hobby2.desc":"J'ai toujours aimé jouer aux jeux vidéo pendant mon temps libre. J'aime surtout les jeux avec des éditeurs de niveaux intégrés pour pouvoir exprimer ma créativité, comme <b>Minecraft</b>, <b>Trackmania</b> ou <b>Geometry Dash</b>. Mais j'aime aussi jouer avec des amis, par exemple sur <b>Rocket League</b>.",
                    "hobbies.hobby3.title":"Séries",
                    "hobbies.hobby3.desc":"J'aime regarder des séries pour me détendre, principalement des series d'animation japonaise. Si je devais choisir trois œuvres, je vous recommanderais de regarder <b><i>Gurren Lagann</i></b>, <b><i>L'attaque des titans</i></b> et <b><i>Arcane</i></b>.",
                }
            }
        }
    });

export default i18n;