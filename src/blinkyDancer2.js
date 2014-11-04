var makeBlinkyDancer2 = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="dancer dancer2"></span>');
  this.$node.addClass('dancer2');
};

makeBlinkyDancer2.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer2.prototype.constructor = makeBlinkyDancer2;

makeBlinkyDancer2.prototype.step = function(){

  makeDancer.prototype.step.call(this);
  //this.$node.toggle();
  //
  this.$node.animate({
    left: '-=500',
    height: '300'
  });

};

