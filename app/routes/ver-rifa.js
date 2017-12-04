import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    return this.get('session').fetch().then(() => {
      if (!this.get('session.isAuthenticated'))
        this.transitionTo('login')
    }).catch(() => {})
  },

  model(params) {
    return this.get('store').findRecord('rifa', params.idrifa)
  }
});
