var makeBlinkyDancer2 = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="dancer dancer2"></span>');
  //
  this.timeBetweenSteps = Math.random()*100;
  this.$node.addClass('dancer2');
  this.celebs = [];
  this.celebs.push('<img src="images/mel-gibson.png">');
  this.celebs.push('<img src="images/gary-busey.png">');
  var appendImg = this.celebs[randomRange(this.celebs.length, 0)];
  this.$node.append(appendImg);
};

makeBlinkyDancer2.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer2.prototype.constructor = makeBlinkyDancer2;

makeBlinkyDancer2.prototype.step = function(){

  var width = $("body").width();
  var height = $("body").height();
  var nextPos = [randomRange(width, 0), randomRange(height, 0)];

  var nextWidth = randomRange(300, 0);
  var nextHeight = nextWidth*1.45;



  makeDancer.prototype.step.call(this);
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

};


//Generate random number in range
function randomRange(max, min){
  return Math.floor(Math.random() * (max- min)-min);
}