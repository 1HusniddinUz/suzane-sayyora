import "../assets/App.css";
import Content from "../components/layout/Content";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import i18n from "i18next"; 
import { initReactI18next } from "react-i18next";
import translationsUz from "../locales/translationsUz";
import translationsEn from "../locales/translationsEn";
import translationsRu from "../locales/translationsRu";
import translationsFr from "../locales/translationsFr";
import translationsTr from "../locales/translationsTr";

function App() {
  i18n.use(initReactI18next).init({
    resources: {
      uz: { translation: translationsUz },
      tr: { translation: translationsTr },
      ru: { translation: translationsRu },
      fr: { translation: translationsFr },
      en: { translation: translationsEn },
    },
    lng: "uz",
    fallbackLng: "uz",
  });

  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
