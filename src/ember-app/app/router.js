import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-chairs-chair-l');
  this.route('i-i-s-chairs-chair-e',
  { path: 'i-i-s-chairs-chair-e/:id' });
  this.route('i-i-s-chairs-chair-e.new',
  { path: 'i-i-s-chairs-chair-e/new' });
  this.route('i-i-s-chairs-chair-type-l');
  this.route('i-i-s-chairs-chair-type-e',
  { path: 'i-i-s-chairs-chair-type-e/:id' });
  this.route('i-i-s-chairs-chair-type-e.new',
  { path: 'i-i-s-chairs-chair-type-e/new' });
});

export default Router;
