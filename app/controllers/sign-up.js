import Controller from '@ember/controller';

export default Controller.extend({
	firebase: Ember.inject.service('firebaseApp'),
	actions: {
		registrar(usuario){
			this.get('firebase').auth().createUserWithEmailAndPassword(usuario.get('email'),this.get('pass')).then((user)=>{
				usuario.set('firebaseid', user.uid);
				usuario.save();
			}).then(()=>{
				window.Materialize.toast('Registrado correctamente', 4000),
				this.transitionToRoute('panel')
			}).catch((error)=>{
				console.log(error)

			});
		}
	}
});
