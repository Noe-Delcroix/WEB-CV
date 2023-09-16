import resumeFR from "../../assets/documents/resume-fr.pdf";
import resumeEN from "../../assets/documents/resume-en.pdf";
import {PdfContext} from "./PdfContext";
import {useTranslation} from "react-i18next";

export const PdfProvider = ({ children }) => {
    const { t ,i18n} = useTranslation();

    const pdfMap = {
        fr: resumeFR,
        en: resumeEN
    };

    const downloadPdfFromFile = () => {
        const link = document.createElement('a');
        link.href = pdfMap[i18n.language] || resumeFR;
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