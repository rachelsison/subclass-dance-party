var makeKittyDj = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="catDancer"></span>');
  this.$node.append('<img src="images/djCat.jpg">');

};

makeKittyDj.prototype = Object.create(makeDancer.prototype);
makeKittyDj.prototype.constructor = makeKittyDj;

makeKittyDj.prototype.step = function(){


  makeDancer.prototype.step.call(this);
};

