import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    switch (this.get('c')) {
      case "carousel":
        this.$('.carousel.carousel-slider').carousel({ fullWidth: true });
        break;
      case "sidenav":
        this.$(".button-collapse").sideNav({edge: 'right'});
        break;
        case "material-select":
        this.$('select').material_select();
        break;
        case "updateTF":
        window.Materialize.updateTextFields();
        break;
        case "tabs":
        this.$('ul.tabs').tabs();
        break;
    }
  }
});
