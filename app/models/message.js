import DS from 'ember-data';

export default DS.Model.extend({
	texto: DS.attr('string'),
	dueno: DS.belongsTo('usuario')

});
