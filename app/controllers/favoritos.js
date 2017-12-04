import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByText(param) {
      if (param !== '') {
        return this.get('store').query({
        	orderBy: 'nombre',
        	equalTo: param
        });
      } else {
        return this.get('model.favoritos');
      }
    },
    removeFromFavorites(rifa){

    	this.get('model.favoritos').removeObject(rifa);
    	rifa.save();
    	this.get('model').save();
    }
  }
});
