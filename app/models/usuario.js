import DS from 'ember-data';

export default DS.Model.extend({
	nombre: DS.attr('string'),
	apellidos: DS.attr('string'),
	email: DS.attr('string'),
	edad: DS.attr('number'),
	firebaseid: DS.attr('string'),
	favoritos: DS.hasMany('rifa',{
	}),
	rifas: DS.hasMany('rifa'),
	participando: DS.hasMany('rifa'),
	chats: DS.hasMany('chat')
	

});
