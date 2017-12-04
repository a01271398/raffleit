import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByText(param) {
      if (param !== '') {
        return this.get('store').query('rifa', {
        	orderBy: 'nombre',
        	equalTo: param
        });
      } else {
        return this.get('store').findAll('rifa');
      }
    },
    addToFavorites(rifa){
    	this.get('model.favoritos').pushObject(rifa).save();
    	this.get('model').save();
    }
  }
});
