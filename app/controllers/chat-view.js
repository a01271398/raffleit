import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    send(texto) {
      let id = this.get('session.currentUser.uid');
      return this.get('store').query('usuario', {
        equalTo: id,
        orderBy: 'firebaseid',
        limitToLast: 1
      }).then((user) => {
        let currentUser = user.get('firstObject');
        let message = this.get('model.messages').createRecord({
          texto: texto
        })
        message.set('dueno', currentUser)
        message.save()
        this.get('model').save();
        this.set('texto', "");
      })

    }
  }
});
