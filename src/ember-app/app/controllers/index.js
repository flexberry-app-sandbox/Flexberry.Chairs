import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.chairs.caption'),
          title: i18n.t('forms.application.sitemap.chairs.title'),
          children: [{
            link: 'i-i-s-chairs-chair-type-l',
            caption: i18n.t('forms.application.sitemap.chairs.i-i-s-chairs-chair-type-l.caption'),
            title: i18n.t('forms.application.sitemap.chairs.i-i-s-chairs-chair-type-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-chairs-chair-l',
            caption: i18n.t('forms.application.sitemap.chairs.i-i-s-chairs-chair-l.caption'),
            title: i18n.t('forms.application.sitemap.chairs.i-i-s-chairs-chair-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})