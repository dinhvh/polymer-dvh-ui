Polymer('dvh-menu-button', {
  ready: function() {
    this.$.button.addEventListener('click', this.onButtonClick.bind(this));
    this.$.background.addEventListener('click', this.onBackgroundClick.bind(this));
  },
  onButtonClick: function(event) {
    this.$.overlay.classList.toggle('opened')
    event.stopPropagation();
  },
  onBackgroundClick: function(event) {
    console.log('clicked overlay');
    this.$.overlay.classList.toggle('opened')
    event.stopPropagation();
  }
});
