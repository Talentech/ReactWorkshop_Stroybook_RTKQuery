import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-chained-backend";
import LocalStorageBackend from "i18next-localstorage-backend";
import XHR from "i18next-xhr-backend";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      backends: [LocalStorageBackend, XHR],
      backendOptions: [
        {
          versions: JSON.parse(process.env.LANGUAGES).reduce(
            (
              acc: Record<string, string>,
              lang: { lang: string; version: string }
            ) => {
              acc = {
                ...acc,
                [lang.lang]: lang.version,
              };

              return acc;
            },
            {}
          ),
        },
        {
          loadPath: process.env.TRANSLATIONS_PATH + "/{{lng}}.json",
        },
      ],
    },
    fallbackLng: "en",
    debug: process.env.mode !== "production",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
