import i18n from "i18next"
import { initReactI18next } from "react-i18next"


i18n.use(initReactI18next).init({
    resources:{
        kg: {
            translation: {
                logo : "Эксклюсивдуу"
            }
        },
        en: {
            translation: {
                logo : "Exclusive"
            }
        },
        ru: {
            translation: {
                logo : "Эксклюсивный"
            }
        },
    },
    lng : "kg"
})

export default i18n