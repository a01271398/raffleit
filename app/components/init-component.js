import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    switch (this.get('c')) {
      case "carousel":
        this.$('.carousel.carousel-slider').carousel({ fullWidth: true });
        break;
      case "sidenav":
        this.$(".button-collapse").sideNav({edge: 'right'});

    }
  }
});
