import DS from 'ember-data';

export default DS.Model.extend({
	lugar: DS.attr('number'),
	descripcion: DS.attr('string'),
	foto: DS.attr('string'), 
	nombre: DS.attr('string'),
	rifa: DS.belongsTo('rifa')

});
