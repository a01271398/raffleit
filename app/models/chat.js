import DS from 'ember-data';

export default DS.Model.extend({
	usuarios: DS.hasMany('usuario'),
	messages: DS.hasMany('message')

});
