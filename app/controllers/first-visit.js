import Controller from '@ember/controller';

export default Controller.extend({
	slide: 0,
	init(){
		this.set('slide', 0);
	},
	actions: {
		next(){
			this.set('slide', this.get('slide')+1)
			window.$('.carousel').carousel('next');
			if(this.get('slide')%3==0){
				this.transitionToRoute('index')
			}

		}
	}
});
