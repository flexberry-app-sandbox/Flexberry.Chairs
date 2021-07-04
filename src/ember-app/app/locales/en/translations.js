import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
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
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
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
        chairs: {
          caption: 'chairs',
          title: 'chairs',
          'i-i-s-chairs-chair-type-l': {
            caption: 'i-i-s-chairs-chair-type-l',
            title: 'i-i-s-chairs-chair-type-l'
          },
          'i-i-s-chairs-chair-l': {
            caption: 'i-i-s-chairs-chair-l',
            title: 'i-i-s-chairs-chair-l'
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
    'i-i-s-chairs-chair-l': IISChairsChairLForm,
    'i-i-s-chairs-chair-type-l': IISChairsChairTypeLForm,
    'i-i-s-chairs-chair-e': IISChairsChairEForm,
    'i-i-s-chairs-chair-type-e': IISChairsChairTypeEForm
  },

});

export default translations;
