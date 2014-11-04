var makeCelebDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="dancer celebDancer"></span>');

  this.timeBetweenSteps = Math.random()*100;
  this.$node.addClass('celebDancer');
  this.celebs = [];
  this.celebs.push('<img src="images/mel-gibson.png">');
  this.celebs.push('<img src="images/gary-busey.png">');
  var appendImg = this.celebs[this.randomRange(this.celebs.length, 0)];
  this.$node.append(appendImg);
};

makeCelebDancer.prototype = Object.create(makeDancer.prototype);
makeCelebDancer.prototype.constructor = makeCelebDancer;

makeCelebDancer.prototype.step = function(){



  var width = $("body").width();
  var height = $("body").height();
  var nextPos = [this.randomRange(width, 0), this.randomRange(height, 0)];

  var nextWidth = this.randomRange(300, 0);
  var nextHeight = nextWidth*1.45;



  this.$node.animate({
    borderSpacing: -360,
    top: nextPos[1],
    left: nextPos[0],
    width: nextWidth,
    height: nextHeight

  }, {step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)');
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
},'linear');

 makeDancer.prototype.step.call(this);

};

