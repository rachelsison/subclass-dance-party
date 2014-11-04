var makeConfetti = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = Math.random()*100;
  this.$node.addClass('confetti');
};

makeConfetti.prototype = Object.create(makeDancer.prototype);
makeConfetti.prototype.constructor = makeConfetti;

makeConfetti.prototype.step = function(){

  var width = $("body").width();
  var height = $("body").height();
  var nextPos = [this.randomRange(width, 0), this.randomRange(height, 0)];

  var nextWidth = this.randomRange(300, 0);
  var nextHeight = nextWidth*1.45;
  var backgroundColors = ['green', 'blue', 'yellow'];
  var bg = backgroundColors[this.randomRange(backgroundColors.length, 0)]

  this.$node.css('background-color', bg);

  this.$node.animate({
    borderSpacing: -360,
  }, {step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)');
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
      duration:'slow'
  },'linear');


  makeDancer.prototype.step.call(this);
  this.$node.toggle();

};

