import Route from '@ember/routing/route';

export default Route.extend({
	session: Ember.inject.service(),
	beforeModel(){
		this.get('session').fetch().then(()=>{
			if(!this.get('session.isAuthenticated'))
				this.transitionTo('login')
		})
	}
});
