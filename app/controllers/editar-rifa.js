import Controller from '@ember/controller';

export default Controller.extend({

  total: Ember.computed('model.participantes', 'model.boleto', function() {
    let total = this.get('model.participantes') * this.get('model.boleto');
    if (isFinite(total))
      return total;
    else
      return 0;

  }),
  comision: Ember.computed('total', function() {
    return Math.round(this.get('total') * 0.10);
  }),
  ganancia: Ember.computed('total', function() {
    return this.get('total') - this.get('comision')
  }),
  actions: {
    addPremio(rifa) {
      rifa.get('premios').createRecord();
    },
    guardarTodo(rifa) {
      Ember.RSVP.all(
        rifa.get('premios').map((premio) => {
          premio.save();
        })
      ).then(() => {
        rifa.save().then(() => {
          this.get('store').peekRecord('usuario', rifa.get('dueno.id')).save().then(()=>{
          	this.transitionToRoute('principal')
          });
        })
      })
    }
  }
});