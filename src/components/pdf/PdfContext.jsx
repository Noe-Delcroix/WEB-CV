import { createContext } from 'react';

export const PdfContext = createContext({
    pdfMap: {},
    downloadPdf: () => {}
});