var makeDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.setPosition();
  this.step();
}

makeDancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(){
    var styleSettings = {
      top: this.top,
      left: this.left
    };
    this.$node.css(styleSettings);
};
