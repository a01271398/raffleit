import Component from '@ember/component';

export default Component.extend({
	didInsertElement(){
		window.Materialize.updateTextFields();
	},
	actions:{
		borrar(premio){
			premio.destroyRecord();
		}
	}
});
