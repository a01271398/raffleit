import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		save(perfil){
			perfil.save();
			this.transitionToRoute('mi-perfil')
		}
	}
});
