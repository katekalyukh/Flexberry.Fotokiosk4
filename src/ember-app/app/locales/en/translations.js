import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISFotokiosk4КлиентLForm from './forms/i-i-s-fotokiosk4-клиент-l';
import IISFotokiosk4ОплатаLForm from './forms/i-i-s-fotokiosk4-оплата-l';
import IISFotokiosk4ПечатьФотоLForm from './forms/i-i-s-fotokiosk4-печать-фото-l';
import IISFotokiosk4СделатьФотоLForm from './forms/i-i-s-fotokiosk4-сделать-фото-l';
import Отправить на почтуForm from './forms/отправить-на-почту';
import IISFotokiosk4КлиентEForm from './forms/i-i-s-fotokiosk4-клиент-e';
import IISFotokiosk4ОплатаEForm from './forms/i-i-s-fotokiosk4-оплата-e';
import IISFotokiosk4ПечатьФотоEForm from './forms/i-i-s-fotokiosk4-печать-фото-e';
import IISFotokiosk4СделатьФотоEForm from './forms/i-i-s-fotokiosk4-сделать-фото-e';
import Отправить на почтуForm from './forms/отправить-на-почту';
import IISFotokiosk4ДопНастройкиModel from './models/i-i-s-fotokiosk4-доп-настройки';
import IISFotokiosk4КлиентModel from './models/i-i-s-fotokiosk4-клиент';
import IISFotokiosk4ОплатаModel from './models/i-i-s-fotokiosk4-оплата';
import IISFotokiosk4ОтправНаПочтуModel from './models/i-i-s-fotokiosk4-отправ-на-почту';
import IISFotokiosk4ПечатьФотоModel from './models/i-i-s-fotokiosk4-печать-фото';
import IISFotokiosk4СделатьФотоModel from './models/i-i-s-fotokiosk4-сделать-фото';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-fotokiosk4-доп-настройки': IISFotokiosk4ДопНастройкиModel,
    'i-i-s-fotokiosk4-клиент': IISFotokiosk4КлиентModel,
    'i-i-s-fotokiosk4-оплата': IISFotokiosk4ОплатаModel,
    'i-i-s-fotokiosk4-отправ-на-почту': IISFotokiosk4ОтправНаПочтуModel,
    'i-i-s-fotokiosk4-печать-фото': IISFotokiosk4ПечатьФотоModel,
    'i-i-s-fotokiosk4-сделать-фото': IISFotokiosk4СделатьФотоModel
  },

  'application-name': 'Fotokiosk4',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Fotokiosk4',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Fotokiosk4',
          title: 'Fotokiosk4'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        fotokiosk4: {
          caption: 'Fotokiosk4',
          title: 'Fotokiosk4',
          'i-i-s-fotokiosk4-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-fotokiosk4-оплата-l': {
            caption: 'Оплата',
            title: ''
          },
          'i-i-s-fotokiosk4-печать-фото-l': {
            caption: 'Печать фото',
            title: ''
          },
          'отправить-на-почту': {
            caption: 'Отправ на почту',
            title: ''
          },
          'i-i-s-fotokiosk4-сделать-фото-l': {
            caption: 'Сделать фото',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-fotokiosk4-клиент-l': IISFotokiosk4КлиентLForm,
    'i-i-s-fotokiosk4-оплата-l': IISFotokiosk4ОплатаLForm,
    'i-i-s-fotokiosk4-печать-фото-l': IISFotokiosk4ПечатьФотоLForm,
    'i-i-s-fotokiosk4-сделать-фото-l': IISFotokiosk4СделатьФотоLForm,
    'отправить-на-почту': Отправить на почтуForm,
    'i-i-s-fotokiosk4-клиент-e': IISFotokiosk4КлиентEForm,
    'i-i-s-fotokiosk4-оплата-e': IISFotokiosk4ОплатаEForm,
    'i-i-s-fotokiosk4-печать-фото-e': IISFotokiosk4ПечатьФотоEForm,
    'i-i-s-fotokiosk4-сделать-фото-e': IISFotokiosk4СделатьФотоEForm,
    'отправить-на-почту': Отправить на почтуForm
  },

});

export default translations;
