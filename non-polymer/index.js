document.addEventListener( "DOMContentLoaded", function() {
  document.removeEventListener("DOMContentLoaded", arguments.callee, false);
  ready();
});
        
var ready = function() {
  document.querySelector('.button').addEventListener('click', onButtonClick.bind(this));
  document.querySelector('.background').addEventListener('click', this.onBackgroundClick.bind(this));
};

var onButtonClick = function(event) {
  document.querySelector('.overlay').classList.toggle('opened')
  event.stopPropagation();
};
  
var onBackgroundClick = function(event) {
  document.querySelector('.overlay').classList.toggle('opened')
  event.stopPropagation();
};
