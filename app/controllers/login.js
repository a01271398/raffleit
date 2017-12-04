import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		login(email, pass){
			this.get('session').open('firebase', {
			  provider: 'password',
			  email: email,
			  password: pass
			}).then(()=>{
				this.transitionToRoute('principal')
			}).catch(()=>{
				window.Materialize.toast('Error al iniciar', 4000);
			});
		}
	}
});
