import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISChairsChairLForm from './forms/i-i-s-chairs-chair-l';
import IISChairsChairTypeLForm from './forms/i-i-s-chairs-chair-type-l';
import IISChairsChairEForm from './forms/i-i-s-chairs-chair-e';
import IISChairsChairTypeEForm from './forms/i-i-s-chairs-chair-type-e';
import IISChairsChairLegModel from './models/i-i-s-chairs-chair-leg';
import IISChairsChairTypeModel from './models/i-i-s-chairs-chair-type';
import IISChairsChairModel from './models/i-i-s-chairs-chair';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-chairs-chair-leg': IISChairsChairLegModel,
    'i-i-s-chairs-chair-type': IISChairsChairTypeModel,
    'i-i-s-chairs-chair': IISChairsChairModel
  },

  'application-name': 'Chairs',

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
        'application-name': 'Chairs',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Chairs',
          title: 'Chairs'
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
        chairs: {
          caption: 'Chairs',
          title: 'Chairs',
          'i-i-s-chairs-chair-type-l': {
            caption: 'Chair type',
            title: ''
          },
          'i-i-s-chairs-chair-l': {
            caption: 'Chair',
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
    'i-i-s-chairs-chair-l': IISChairsChairLForm,
    'i-i-s-chairs-chair-type-l': IISChairsChairTypeLForm,
    'i-i-s-chairs-chair-e': IISChairsChairEForm,
    'i-i-s-chairs-chair-type-e': IISChairsChairTypeEForm
  },

});

export default translations;
