import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Fotokiosk4',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Fotokiosk4',
          title: 'Fotokiosk4'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
