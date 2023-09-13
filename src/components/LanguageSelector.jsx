import {useTranslation} from "react-i18next";
import EN from "country-flag-icons/react/3x2/GB";
import FR from "country-flag-icons/react/3x2/FR";
import React from "react";
import Select,{ components } from "react-select";

export const LanguageSelector = () => {

    const { i18n } = useTranslation();

    const handleChange = (selectedOption) => {
        if (selectedOption) {
            const lang = selectedOption.value;
            i18n.changeLanguage(lang);
        }
    };

    const options = [
        {
            value: 'en',
            label: 'English',
            icon: EN
        },
        {
            value: 'fr',
            label: 'Français',
            icon: FR
        }
    ];

    const formatOptionLabel = ({ label, icon: Icon }) => (
        <div className="flex items-center">
            <Icon className="mr-8" />
            {label}
        </div>
    );

    return (
        <Select
            defaultValue={options.find(option => option.value === i18n.language)}
            options={options}
            formatOptionLabel={formatOptionLabel}
            onChange={handleChange}
            isSearchable={false}
        />
    )
}
