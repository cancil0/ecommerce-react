import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import TRResource from "./resources/tr.json";
import ENResource from "./resources/en.json";

const resources = {
  tr: { translation: TRResource },
  en: { translation: ENResource },
};

const lang =
  sessionStorage.getItem("cultereInfo")?.slice(0, 2) ??
  (navigator.language === "tr-TR" || navigator.language === "en-US"
    ? navigator.language
    : "en-US"
  ).slice(0, 2);

export default i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: lang,
    debug: false,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

  /* You should use this method at outside of React functions and in Classes 
      because you can not use hooks in classes and React functions. */

  // If you need to translate a line inside React functions, you can use useTranslation() hook.
  
export const translate = (key) => {
  return i18n.cloneInstance().t(key);
};