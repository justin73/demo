/**
 * Application Locale settings
 * Default locale 'en'
 */

import Vue from 'vue';
import enUS from './en/en_US';
import CHN from './chn/chn';
import frFR from './fr/fr_FR';

const store = require('../store/store').default;

const locales = {
  en: enUS,
  fr: frFR,
  zh: CHN,
};

Object.keys(locales).forEach((lang) => {
  Vue.locale(lang, locales[lang]);
});
console.log('from locale config page ');

const langCode = store.state.langCode;
console.log(store.state.langCode);
// langCode = langCode.replace('-', '_');
Vue.config.lang = langCode;

// dynamically change locale

// var self = this
// var lang = 'ja'
// Vue.locale(lang, function () {
//   self.loading = true
//   return fetch('/locale/' + lang, {
//     method: 'get',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   }).then(function (res) {
//     return res.json()
//   }).then(function (json) {
//     self.loading = false
//     if (Object.keys(json).length === 0) {
//       return Promise.reject(new Error('locale empty !!'))
//     } else {
//       return Promise.resolve(json)
//     }
//   }).catch(function (error) {
//     self.error = error.message
//     return Promise.reject()
//   })
// }, function () {
//   Vue.config.lang = lang
// })

export default Vue;
