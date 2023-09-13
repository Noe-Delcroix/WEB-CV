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
                }
            },

            fr: {
                translation: {
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
                }
            }
        }
    });

export default i18n;