import DS from 'ember-data';

export default DS.Model.extend({
	nombre: DS.attr('string'),
	img: DS.attr('string'),
	descripcion: DS.attr('string'),
	portada: DS.attr('string'),
	fechainicio: DS.attr('date'),
	fechafin: DS.attr('date'),
	publica: DS.attr('boolean'),
	lugar: DS.attr('string'),
	participantes: DS.attr('number'),
	boleto: DS.attr('number'),
	premios: DS.hasMany('premio'),
	dueno: DS.belongsTo('usuario', { inverse: 'rifas' }),
	favoritoDe: DS.hasMany('usuario', {
		inverse: 'favoritos'
	}),
	participando: DS.hasMany('usuario', {
		inverse: 'participando'
	})
	

});
