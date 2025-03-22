import {useTranslation} from "react-i18next";
import enFlag from '../assets/images/toggle/en.png';
import frFlag from '../assets/images/toggle/fr.png';

export const LanguageSelector = () => {
    const { i18n } = useTranslation();
    
    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'fr' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <label className="inline-flex items-center cursor-pointer group">
            <input 
                type="checkbox" 
                className="sr-only peer"
                checked={i18n.language === 'fr'}
                onChange={toggleLanguage}
            />
            <div className="relative w-[66px] h-9 bg-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-[#F4F0F0] rounded-full peer overflow-hidden group">
                
                <span className={`absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-to-r from-[#FF8F28] to-[#FFD600] rounded-full group-hover:w-[66px] group-hover:h-[66px] ${
                    i18n.language === 'en' 
                        ? 'right-[0px] top-1/2 -translate-y-1/2' 
                        : 'left-[0px] top-1/2 -translate-y-1/2'
                }`}></span>
                
                <div 
                    className={`absolute top-[3px] left-[3px] w-[30px] h-[30px] rounded-full transition-transform duration-200 ease-in-out flex items-center justify-center group-hover:bg-white bg-[#F4F0F0] z-10 ${
                        i18n.language === 'en' ? 'translate-x-[30px]' : ''
                    }`}
                >
                    <img 
                        src={i18n.language === 'fr' ? frFlag : enFlag} 
                        alt={`${i18n.language} flag`}
                        className="w-6 h-6 rounded-full select-none pointer-events-none"
                    />
                </div>
            </div>
        </label>
    )
}