import i18n from "i18next";
import { initReactI18next } from "react-i18next";

 export default i18n
  .use(initReactI18next) 
  .init({
   
    resources: {
        ka:{
            "card1": "ბლოკჩეინის ტექნოლოგიის მომავალი",
            "card2": "კრიპტოვალუტა: დამწყებთათვის გზამკვლევი",
            "card3": "დეცენტრალიზებული ფინანსები (DeFi) განმარტება" 
        },
      en: {
        translation: {
          "card1": "The Future of Blockchain Technology",
          "card2": "Cryptocurrency: A Beginner's Guide",
          "card3": "Decentralized Finance (DeFi) Explained"
        }
      }
    },
    lng: "en", 
    fallbackLng: "en",

    interpolation: {
      escapeValue: false 
    }
  });