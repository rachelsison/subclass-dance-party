var makeDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.setPosition();
  this.step();
  window.dancers.push(this);
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

//Generate random number in range
makeDancer.prototype.randomRange = function(max, min){
  return Math.floor(Math.random() * (max- min)-min);
}


