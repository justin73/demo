/**
 * Application Locale settings
 * Default locale 'en'
 */

import Vue from 'vue';
import enUS from './en/en_US';
import frFR from './fr/fr_FR';

const locales = {
  en: enUS,
  fr: frFR,
};

Object.keys(locales).forEach((lang) => {
  Vue.locale(lang, locales[lang]);
});

Vue.config.lang = 'en';

export default Vue;
