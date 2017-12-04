import Controller from '@ember/controller';

export default Controller.extend({
  session: Ember.inject.service(),
  porcentaje: Ember.computed('model.participantes', 'model.participando', function() {
    return Math.round(this.get('model.participando.length') / this.get('model.participantes') * 100);
  }),
  actions: {
    register() {
      let id = this.get('session.currentUser.uid');
      this.get('store').query('usuario', {
        equalTo: id,
        orderBy: 'firebaseid',
        limitToLast: 1
      }).then((user) => {
        let currentUser = user.get('firstObject');
        this.get('model.participando').pushObject(currentUser);
        this.get('model').save();
        currentUser.save();
        window.swal(
          'Bien!',
          'Registrado correctamente',
          'success'
        )

      })
    },
    goToChat(dueno) {
      this.get('store').findRecord('usuario', dueno).then((duenoFinal) => {

        let chat = this.get('store').createRecord('chat');
        chat.get('usuarios').pushObject(duenoFinal);
        let id = this.get('session.currentUser.uid');
        this.get('store').query('usuario', {
          equalTo: id,
          orderBy: 'firebaseid',
          limitToLast: 1
        }).then((user) => {
          let currentUser = user.get('firstObject');
          chat.get('usuarios').pushObject(currentUser);
          chat.save().then(() => {
            duenoFinal.save().then(() => {
              currentUser.save().then(() => {
                this.transitionToRoute('chat-view', chat.get('id'))
              })
            })

          })
        })
      })


    }
  }
});
