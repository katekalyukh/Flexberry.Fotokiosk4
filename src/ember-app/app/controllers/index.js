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
          caption: i18n.t('forms.application.sitemap.fotokiosk4.caption'),
          title: i18n.t('forms.application.sitemap.fotokiosk4.title'),
          children: [{
            link: 'i-i-s-fotokiosk4-клиент-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk4.i-i-s-fotokiosk4-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk4.i-i-s-fotokiosk4-клиент-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-fotokiosk4-оплата-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk4.i-i-s-fotokiosk4-оплата-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk4.i-i-s-fotokiosk4-оплата-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-fotokiosk4-печать-фото-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk4.i-i-s-fotokiosk4-печать-фото-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk4.i-i-s-fotokiosk4-печать-фото-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'отправить-на-почту',
            caption: i18n.t('forms.application.sitemap.fotokiosk4.отправить-на-почту.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk4.отправить-на-почту.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-fotokiosk4-сделать-фото-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk4.i-i-s-fotokiosk4-сделать-фото-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk4.i-i-s-fotokiosk4-сделать-фото-l.title'),
            icon: 'building',
            children: null
          }]
        }
      ]
    };
  }),
})