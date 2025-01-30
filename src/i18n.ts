import { createI18n } from 'vue-i18n';

import en from './locales/en.json';
import uk from './locales/uk.json';

export const SUPPORTED_LANGUAGES = ['en', 'uk'];

export function saveLanguage(language: string) {
    console.log('saveLanguage', language);
    if (SUPPORTED_LANGUAGES.includes(language)) {
        localStorage.setItem('language', language);
    } else {
        console.warn(`Language "${language}" is not supported.`);
    }
}

export function loadStoredLanguage() {
    const storedLanguage = localStorage.getItem('language');
    return storedLanguage || 'en'; // Повертаємо збережену мову або мову за замовчуванням
}

export const i18n = createI18n({
    legacy: false, // Використовуємо Composition API
    locale: loadStoredLanguage(), // Поточна мова
    fallbackLocale: 'en', // Резервна мова
    messages: {
        en,
        uk,
    },
});