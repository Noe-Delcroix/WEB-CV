import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const TranslatedText = ({ translationKey, text, as = 'span', className = '' }) => {
    const { t, i18n } = useTranslation();
    const [isVisible, setIsVisible] = useState(true);
    const [displayText, setDisplayText] = useState('');
    const Component = as;

    useEffect(() => {
        setIsVisible(false);

        const timer1 = setTimeout(() => {
            // Si text est fourni, on l'utilise, sinon on utilise la traduction
            setDisplayText(text || t(translationKey));
            setIsVisible(true);
        }, 200);

        return () => clearTimeout(timer1);
    }, [i18n.language, translationKey, t, text]);

    return (
        <Component 
            className={`
                inline-block transform transition-all duration-200 ease-in-out
                ${isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-1'
                }
                ${className}
            `}
        >
            {displayText || text || t(translationKey)}
        </Component>
    );
};

export default TranslatedText;