import resumeFR from "../../assets/documents/resume-fr.pdf";
import {PdfContext} from "./PdfContext";
import {useTranslation} from "react-i18next";

export const PdfProvider = ({ children }) => {
    const { t } = useTranslation();

    const pdfMap = {
        fr: resumeFR,
    };

    const downloadPdfFromFile = (language) => {
        const link = document.createElement('a');
        link.href = pdfMap[language] || resumeFR;
        link.download = t('nav.button') + '_Noé_Delcroix.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <PdfContext.Provider value={{ downloadPdf: downloadPdfFromFile }}>
            {children}
        </PdfContext.Provider>
    );
}