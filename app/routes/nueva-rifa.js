import Route from '@ember/routing/route';
import Ember from "ember";

export default Route.extend({
	store: Ember.inject.service(),
	beforeModel(){
		return this.get('session').fetch().then(()=>{
			if(!this.get('session.isAuthenticated'))
				this.transitionTo('login')
		}).catch(()=>{})
	},
	model(){
		return this.get('session').fetch().then(()=>{
			let id  = this.get('session.currentUser.uid');
			return this.get('store').query('usuario', {
				equalTo: id,
				orderBy: 'firebaseid',
				limitToLast: 1
			}).then((user)=>{	
				return user.get('firstObject.rifas').createRecord();
			})
		}).catch(()=>{

			let id  = this.get('session.currentUser.uid');
			return this.get('store').query('usuario', {
				equalTo: id,
				orderBy: 'firebaseid',
				limitToLast: 1
			}).then((user)=>{
				
				return user.get('firstObject.rifas').createRecord();
			})
		})
	},
	afterModel(model){
		model.get('premios').createRecord();
	},
});
