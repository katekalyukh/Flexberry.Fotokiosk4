import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-fotokiosk4-клиент-l');
  this.route('i-i-s-fotokiosk4-клиент-e',
  { path: 'i-i-s-fotokiosk4-клиент-e/:id' });
  this.route('i-i-s-fotokiosk4-клиент-e.new',
  { path: 'i-i-s-fotokiosk4-клиент-e/new' });
  this.route('i-i-s-fotokiosk4-оплата-l');
  this.route('i-i-s-fotokiosk4-оплата-e',
  { path: 'i-i-s-fotokiosk4-оплата-e/:id' });
  this.route('i-i-s-fotokiosk4-оплата-e.new',
  { path: 'i-i-s-fotokiosk4-оплата-e/new' });
  this.route('i-i-s-fotokiosk4-печать-фото-l');
  this.route('i-i-s-fotokiosk4-печать-фото-e',
  { path: 'i-i-s-fotokiosk4-печать-фото-e/:id' });
  this.route('i-i-s-fotokiosk4-печать-фото-e.new',
  { path: 'i-i-s-fotokiosk4-печать-фото-e/new' });
  this.route('i-i-s-fotokiosk4-сделать-фото-l');
  this.route('i-i-s-fotokiosk4-сделать-фото-e',
  { path: 'i-i-s-fotokiosk4-сделать-фото-e/:id' });
  this.route('i-i-s-fotokiosk4-сделать-фото-e.new',
  { path: 'i-i-s-fotokiosk4-сделать-фото-e/new' });
  this.route('отправить-на-почту');
  this.route('отправить-на-почту',
  { path: 'отправить-на-почту/:id' });
  this.route('отправить-на-почту.new',
  { path: 'отправить-на-почту/new' });
});

export default Router;
