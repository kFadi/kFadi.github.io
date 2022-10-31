import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import transEn from "./en.json";
import transHe from "./he.json";

const resources = {
    en: { translation: transEn },
    he: { translation: transHe }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
        interpolation: { escapeValue: false },
        
});