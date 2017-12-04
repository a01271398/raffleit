import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('first-visit', {path: "/welcome"});
  this.route('sign_up', { path: "/registrar" });
  this.route('login');
  this.route('explorar');
  this.route('panel');
  this.route('mi-perfil', {path:"/perfil"});
  this.route('favoritos');
  this.route('mis-rifas', {path:"/misrifas"});
  this.route('chat');
  this.route('edit-perfil',{path:"edit/:perfil"});
  this.route('principal');
  this.route('nueva-rifa');
  this.route('editar-rifa', {path: "/editar/:idrifa"});
  this.route('ver-rifa', {path:"/rifa/:idrifa"});
  this.route('chat-view', {path:"/chats/:idchat"});
});

export default Router;
