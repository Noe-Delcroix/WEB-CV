import resumeFR from "../../assets/documents/resume-fr.pdf";
import resumeEN from "../../assets/documents/resume-en.pdf";
import {PdfContext} from "./PdfContext";
import {useTranslation} from "react-i18next";

export const PdfProvider = ({ children }) => {
    const {i18n} = useTranslation();

    const pdfMap = {
        fr: resumeFR,
        en: resumeEN
    };

    const downloadPdfFromFile = () => {
        window.open(pdfMap[i18n.language] || resumeFR, '_blank');
    };

    return (
        <PdfContext.Provider value={{ downloadPdf: downloadPdfFromFile }}>
            {children}
        </PdfContext.Provider>
    );
}