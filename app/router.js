import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('first-visit', {path: "/welcome"});
  this.route('sign_up');
  this.route('login');
  this.route('explorar');
});

export default Router;
