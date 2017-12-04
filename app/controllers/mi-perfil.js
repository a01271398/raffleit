import Controller from '@ember/controller';

export default Controller.extend({

	session: Ember.inject.service(),
	actions: {
		logOut(){
			this.get('session').close();
			this.transitionToRoute('login');
		}
	}
});
