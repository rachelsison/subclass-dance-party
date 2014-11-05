var makeCelebDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.timeBetweenSteps = Math.random()*8000;
  this.$node.addClass('celebDancer');
  this.celebs = [];
  this.celebs.push('<img src="images/mel-gibson.png">');
  this.celebs.push('<img src="images/gary-busey.png">');
  var appendImg = this.celebs[this.randomRange(this.celebs.length, 0)];
  this.$node.append(appendImg);
  this.dancerMaxWidth = 400;

 // if( $('.stop').hasClass('stopped')){
 //    this.timer = setInterval(this.step.bind(this), this.timeBetweenSteps);
 //  };

};

makeCelebDancer.prototype = Object.create(makeDancer.prototype);
makeCelebDancer.prototype.constructor = makeCelebDancer;

makeCelebDancer.prototype.step = function(){


  var width = $("body").width();
  var height = $("body").height();
  var nextPos = [this.randomRange(width, 0), this.randomRange(height, 0)];

  var nextWidth = this.randomRange(this.dancerMaxWidth, 0);
  var nextHeight = nextWidth*1.45;


  this.$node.animate({
    borderSpacing: -360,
    top: nextPos[1],
    left: nextPos[0],
    width: nextWidth,
    height: nextHeight

  }, {step: function(now) {
      $(this).css('-webkit-transform','rotate('+now+'deg)');
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
      duration:'slow'
  },'linear');


   makeDancer.prototype.step.call(this);

};
makeCelebDancer.prototype.lineup = function(){
  this.stop();

  this.left = 0;
  this.setPosition();

this.$node.animate({
    borderSpacing: 0,
    left: '15px',
    width: '100px',
    height: '145px'

  }, {step: function(now) {
      $(this).css('-webkit-transform','none');
      $(this).css('-moz-transform','none');
      $(this).css('transform','none');
    },
      duration:'fast'
  },'linear');
};

makeCelebDancer.prototype.reset = function(){

};

makeCelebDancer.prototype.stop = function(){
  clearInterval(this.timer);
};
