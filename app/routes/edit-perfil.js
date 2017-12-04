import Route from '@ember/routing/route';

export default Route.extend({
	store: Ember.inject.service(),
	beforeModel(){
		return this.get('session').fetch().then(()=>{
			if(!this.get('session.isAuthenticated'))
				this.transitionTo('login')
		}).catch(()=>{})
	},

	model(params){
		return this.get('store').findRecord('usuario', params.perfil);
	}
});
