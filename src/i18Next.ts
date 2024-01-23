import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import globalEN from "./translations/en/global.json";
import globalES from "./translations/es/global.json";
import globalGR from "./translations/gr/global.json";

const resources = {
  en: {
    translation: {
      global: globalEN,
    },
  },
  es: {
    translation: {
      global: globalES,
    },
  },
  gr: {
    translation: {
      global: globalGR,
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources,
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
